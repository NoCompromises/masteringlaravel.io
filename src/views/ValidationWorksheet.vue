<template>
  <site-header />

  <main>
    <main class="container" :class="{ start: showStartingPoint }">
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
      <div class="col-12 col-lg-6 pb-3" v-else>
        <section class="row mt-3">
          <div class="col-8 fst-italic">
            We have to ask you a few questions to build your validation rules.
          </div>
          <div class="col-4 text-end">
            <a @click="resetForm" href="#">Start over</a>
          </div>
        </section>
        <question-field-name :name="fieldData.name" />
      </div>
    </main>
  </main>

  <site-footer />
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import QuestionFieldName from "@/components/QuestionFieldName.vue";

export default {
  name: "ValidationWorksheet",
  components: {
    SiteHeader,
    SiteFooter,
    QuestionFieldName,
  },
  data() {
    return {
      showStartingPoint: true,
      fieldData: this.getInitialFieldData(),
    };
  },
  methods: {
    resetForm() {
      this.showStartingPoint = true;
      this.fieldData = this.getInitialFieldData();
    },
    getInitialFieldData() {
      return {
        name: "",
      };
    },
  },
};
</script>
