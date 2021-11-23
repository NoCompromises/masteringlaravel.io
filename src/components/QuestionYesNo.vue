<template>
  <section v-if="fieldData[fieldName] === null" class="mt-4 card bg-light">
    <div class="card-body">
      <h6>{{ question }}</h6>
      <div class="row">
        <div class="col-6">
          <button
            @click="updateFieldData({ fieldName, value: true })"
            class="btn btn-success btn-sm"
          >
            Yes
          </button>
        </div>
        <div class="col-6 text-end">
          <button
            @click="updateFieldData({ fieldName, value: false })"
            class="btn btn-danger btn-sm"
          >
            No
          </button>
        </div>
      </div>
    </div>
  </section>
  <section v-else class="mt-4 card bg-light">
    <div class="card-body">
      <h6>{{ question }}</h6>
      <div>
        <code>{{ fieldData[fieldName] ? "Yes" : "No" }}</code>
      </div>
    </div>
    <question-undo :field-name="fieldName" />
  </section>
</template>

<script>
import useAnswerQuestions from "@/composables/useAnswerQuestions";
import QuestionUndo from "@/components/QuestionUndo.vue";

export default {
  components: {
    QuestionUndo,
  },
  props: {
    question: { type: String, required: true },
    fieldName: { type: String, required: true },
  },
  setup() {
    const { fieldData, updateFieldData } = useAnswerQuestions();

    return {
      fieldData,
      updateFieldData,
    };
  },
};
</script>
