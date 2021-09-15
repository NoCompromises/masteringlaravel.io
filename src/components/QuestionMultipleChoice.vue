<template>
  <section v-if="fieldData[fieldName] === null" class="mt-4 card bg-light">
    <div class="card-body">
      <h6>{{ question }}</h6>
      <div>
        <button
          v-for="choice in choices"
          :key="choice"
          @click="updateFieldData({ fieldName, value: choice })"
          class="btn btn-secondary btn-sm me-1 mb-1"
        >
          {{ choice }}
        </button>
      </div>
    </div>
  </section>
  <section v-else class="mt-4 card bg-light">
    <div class="card-body">
      <h6>{{ question }}</h6>
      <div>
        <code>{{ fieldData[fieldName] }}</code>
      </div>
    </div>
  </section>
</template>

<script>
import useAnswerQuestions from "@/composables/useAnswerQuestions";

export default {
  name: "QuestionMultipleChoice",
  props: {
    question: { type: String, required: true },
    fieldName: { type: String, required: true },
    choices: { type: Array, required: true },
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
