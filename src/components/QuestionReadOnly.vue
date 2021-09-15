<template>
  <section class="mt-4 card bg-light">
    <div class="card-body">
      <h6>{{ question }}</h6>
      <div>
        <code>{{ fieldData[fieldName] }}</code>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "QuestionReadOnly",
  props: {
    question: { type: String, required: true },
    fieldName: { type: String, required: true },
  },
  computed: {
    ...mapState(["fieldData"]),
  },
};
</script>
