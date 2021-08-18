<template>
  <section v-if="required === null" class="mt-4 card bg-light">
    <div class="card-body">
      <h6>Is the field required to be in the request?</h6>
      <div class="row">
        <div class="col-6">
          <button
            @click="setRequired(true)"
            class="btn btn-success btn-sm show-next-step"
          >
            Yes
          </button>
        </div>
        <div class="col-6 text-end">
          <button
            @click="setRequired(false)"
            class="btn btn-danger btn-sm show-next-step"
          >
            No
          </button>
        </div>
      </div>
    </div>
  </section>
  <section v-else class="mt-4 card bg-light additional-question">
    <div class="card-body">
      <h6>Is the field required to be in the request?</h6>
      <div>
        <code>{{ required ? "Yes" : "No" }}</code>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "QuestionRequired",
  emits: ["answerSelected"],
  data() {
    return {
      required: null,
    };
  },
  methods: {
    setRequired(value) {
      this.required = value;
      this.$emit("answerSelected", {
        fieldName: "required",
        answer: value,
      });
    },
  },
};
</script>
