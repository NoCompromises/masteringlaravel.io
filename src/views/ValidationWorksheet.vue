<template>
  <main class="container main-interface" :class="{ start: showStartingPoint }">
    <section class="mb-3" v-if="showStartingPoint">
      <p id="question">
        We have to ask you a few questions to build your validation rules:
      </p>
      <form class="mt-3 mt-md-5" @submit.prevent="showWorksheet">
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
              v-model="name"
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
          field-name="name"
        />

        <question-yes-no
          question="Is the field required to be present in the request?"
          field-name="required"
        />

        <question-yes-no
          v-if="fieldData.required"
          question="Is it okay for the field to be empty though?"
          field-name="allowEmpty"
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
        />

        <question-yes-no
          v-if="fieldData.inputType === 'Numeric'"
          question="Do you want to restrict input to integers?"
          field-name="onlyIntegers"
        />

        <question-yes-no
          v-if="fieldData.inputType === 'Text'"
          question="Is this an email input?"
          field-name="email"
        />

        <question-multiple-choice
          v-if="fieldData.inputType === 'Drop down'"
          question="Where are the drop down values coming from?"
          field-name="dropDownSource"
          :choices="['PHP array', 'Database']"
        />

        <question-yes-no
          v-if="fieldData.inputType === 'Checkbox'"
          question="Is it a single checkbox?"
          field-name="singleCheckbox"
        />

        <div
          v-if="fieldData.singleCheckbox === false"
          class="alert alert-danger mt-4"
        >
          Array support is coming soon.
        </div>

        <question-multiple-choice
          v-if="fieldData.inputType === 'Radio'"
          question="Where are the radio values coming from?"
          field-name="radioSource"
          :choices="['PHP array', 'Database']"
        />

        <question-yes-no
          v-if="fieldData.inputType === 'Date'"
          question="Do you care about the date format?"
          field-name="dateFormat"
        />

        <question-yes-no
          v-if="fieldData.inputType === 'File'"
          question="Do you want to restrict file types?"
          field-name="fileTypes"
        />

        <question-multiple-choice
          v-if="fieldData.inputType === 'File' && fieldData.fileTypes !== null"
          question="What is the maximum size?"
          field-name="maxFileSize"
          :choices="['1 MB', '5 MB', '10 MB', '20 MB']"
        />

        <question-yes-no
          v-if="needDatabaseInfo"
          question="Will this be data be stored in a database?"
          field-name="storeInDatabase"
        />

        <question-multiple-choice
          v-if="needDatabaseInfo && fieldData.storeInDatabase"
          question="What type of database field are you using?"
          field-name="databaseFieldType"
          :choices="databaseFieldChoices"
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
</template>

<script>
import { mapState, mapActions } from "vuex";
import QuestionReadOnly from "@/components/QuestionReadOnly.vue";
import QuestionMultipleChoice from "@/components/QuestionMultipleChoice.vue";
import QuestionYesNo from "@/components/QuestionYesNo.vue";
import WorksheetComplete from "@/components/WorksheetComplete.vue";
import WorksheetResults from "@/components/WorksheetResults.vue";
import BookInfo from "@/components/BookInfo.vue";

export default {
  name: "ValidationWorksheet",
  components: {
    QuestionReadOnly,
    QuestionMultipleChoice,
    QuestionYesNo,
    WorksheetComplete,
    WorksheetResults,
    BookInfo,
  },
  data() {
    return {};
  },
  computed: {
    name: {
      get() {
        return this.$store.state.fieldData.name;
      },
      set(value) {
        this.updateFieldData({ fieldName: "name", value });
      },
    },
    fileInputComplete() {
      return (
        this.fieldData.onlyIntegers !== null ||
        this.fieldData.email !== null ||
        this.fieldData.dropDownSource !== null ||
        this.fieldData.singleCheckbox !== null ||
        this.fieldData.radioSource !== null ||
        this.fieldData.dateFormat !== null ||
        this.fieldData.maxFileSize !== null
      );
    },
    needDatabaseInfo() {
      return (
        this.fileInputComplete &&
        (["Text", "Drop down", "Radio"].includes(this.fieldData.inputType) ||
          this.fieldData.onlyIntegers)
      );
    },
    databaseFieldChoices() {
      return this.fieldData.inputType === "Numeric"
        ? [
            "TINYINT",
            "TINYINT UNSIGNED",
            "SMALLINT",
            "SMALLINT UNSIGNED",
            "MEDIUMINT",
            "MEDIUMINT UNSIGNED",
            "INT",
            "INT UNSIGNED",
          ]
        : ["CHAR", "VARCHAR", "TINYTEXT", "TEXT", "MEDIUMTEXT", "LONGTEXT"];
    },
    worksheetComplete() {
      return (
        this.fileInputComplete &&
        (!this.needDatabaseInfo ||
          this.fieldData.storeInDatabase === false ||
          this.fieldData.databaseFieldType)
      );
    },
    ...mapState(["showStartingPoint", "fieldData"]),
  },
  methods: {
    ...mapActions([
      "hideWorksheet",
      "showWorksheet",
      "resetForm",
      "updateFieldData",
    ]),
  },
};
</script>
