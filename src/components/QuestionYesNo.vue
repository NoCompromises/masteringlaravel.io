<template>
  <section v-if="answer === null" class="mt-4 card bg-light">
    <div class="card-body">
      <h6>{{ question }}</h6>
      <div class="row">
        <div class="col-6">
          <button @click="setAnswer(true)" class="btn btn-success btn-sm">
            Yes
          </button>
        </div>
        <div class="col-6 text-end">
          <button @click="setAnswer(false)" class="btn btn-danger btn-sm">
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
        <code>{{ answer ? "Yes" : "No" }}</code>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "QuestionYesNo",
  props: ["question", "fieldName"],
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
