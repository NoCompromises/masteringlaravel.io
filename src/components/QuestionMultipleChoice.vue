<template>
  <section v-if="answer === null" class="mt-4 card bg-light">
    <div class="card-body">
      <h6>{{ question }}</h6>
      <div>
        <button
          v-for="choice in choices"
          :key="choice"
          @click="setAnswer(choice)"
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
        <code>{{ answer }}</code>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "QuestionMultipleChoice",
  props: ["question", "fieldName", "choices"],
  emits: ["answerSelected"],
  data() {
    return {
      answer: null,
    };
  },
  methods: {
    setAnswer(value) {
      this.answer = value;
      this.$emit("answerSelected", {
        fieldName: this.fieldName,
        answer: value,
      });
    },
  },
};
</script>
