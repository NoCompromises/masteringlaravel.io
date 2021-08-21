<template>
  <site-header />

  <main class="container main-interface" :class="{ start: showStartingPoint }">
    <section class="mb-3" v-if="showStartingPoint">
      <p id="question">
        We have to ask you a few questions to build your validation rules:
      </p>
      <form class="mt-3 mt-md-5" @submit.prevent="showStartingPoint = false">
        <div class="row">
          <div class="col-12">
            <label for="fieldName" class="form-label">
              What is the name of your form field?
            </label>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-9 mb-3 mb-sm-0">
            <input
              type="text"
              v-model="fieldData.name"
              class="form-control"
              id="fieldName"
              required
            />
          </div>
          <div class="col-12 col-sm-3">
            <button type="submit" class="btn btn-primary">
              Next
              <i class="bi bi-caret-right-fill"></i>
            </button>
          </div>
        </div>
      </form>
    </section>
    <div class="row" v-else>
      <div class="col-12 col-lg-6 pb-3">
        <section class="row mt-3">
          <div class="col-8 fst-italic">
            We have to ask you a few questions to build your validation rules.
          </div>
          <div class="col-4 text-end">
            <a @click="resetForm" href="#">Start over</a>
          </div>
        </section>

        <question-read-only
          question="What is the name of your field?"
          :answer="fieldData.name"
        />

        <question-yes-no
          question="Is the field required to be present in the request?"
          field-name="required"
          @answer-selected="
            answerSelected($event);
            if ($event.answer === false) {
              fieldData.allowEmpty = true;
            }
          "
        />

        <question-yes-no
          v-if="fieldData.required"
          question="Is it okay for the field to be empty though?"
          field-name="allowEmpty"
          @answer-selected="answerSelected"
        />

        <question-multiple-choice
          v-if="fieldData.allowEmpty !== null"
          question="What type of form input is it?"
          field-name="inputType"
          :choices="[
            'Text',
            'Numeric',
            'Drop down',
            'Checkbox',
            'Radio',
            'Date',
            'File',
          ]"
          @answer-selected="answerSelected"
        />

        <question-yes-no
          v-if="fieldData.inputType === 'Numeric'"
          question="Do you want to restrict input to integers?"
          field-name="onlyIntegers"
          @answer-selected="answerSelected"
        />

        <question-yes-no
          v-if="fieldData.inputType === 'Text'"
          question="Is this an email input?"
          field-name="email"
          @answer-selected="answerSelected"
        />

        <question-multiple-choice
          v-if="fieldData.inputType === 'Drop down'"
          question="Where are the drop down values coming from?"
          field-name="dropDownSource"
          :choices="['PHP array', 'Database']"
          @answer-selected="answerSelected"
        />

        <worksheet-complete v-if="worksheetComplete">
          <book-info class="d-none d-lg-block" />
        </worksheet-complete>
      </div>

      <div class="col-12 col-lg-6 mt-4 mb-4 mt-lg-0">
        <worksheet-results :answers="fieldData" />

        <book-info v-if="worksheetComplete" class="d-block d-lg-none" />
      </div>
    </div>
  </main>

  <site-footer />
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import QuestionReadOnly from "@/components/QuestionReadOnly.vue";
import QuestionMultipleChoice from "@/components/QuestionMultipleChoice.vue";
import QuestionYesNo from "@/components/QuestionYesNo.vue";
import WorksheetComplete from "@/components/WorksheetComplete.vue";
import WorksheetResults from "@/components/WorksheetResults.vue";
import BookInfo from "@/components/BookInfo.vue";

export default {
  name: "ValidationWorksheet",
  components: {
    SiteHeader,
    SiteFooter,
    QuestionReadOnly,
    QuestionMultipleChoice,
    QuestionYesNo,
    WorksheetComplete,
    WorksheetResults,
    BookInfo,
  },
  data() {
    return {
      showStartingPoint: true,
      fieldData: this.getInitialFieldData(),
    };
  },
  computed: {
    worksheetComplete() {
      return (
        ["Checkbox", "Radio", "Date", "File"].includes(
          this.fieldData.inputType
        ) ||
        this.fieldData.onlyIntegers !== null ||
        this.fieldData.email !== null ||
        this.fieldData.dropDownSource !== null
      );
    },
  },
  methods: {
    resetForm() {
      this.showStartingPoint = true;
      this.fieldData = this.getInitialFieldData();
    },
    getInitialFieldData() {
      return {
        name: "",
        required: null,
        allowEmpty: null,
        inputType: null,
        onlyIntegers: null,
        email: null,
        dropDownSource: null,
      };
    },
    answerSelected({ fieldName, answer }) {
      this.fieldData[fieldName] = answer;
      this.$nextTick(() => window.scrollTo(0, document.body.scrollHeight));
    },
  },
};
</script>
