<template>
  <section class="mt-4 card bg-light">
    <div class="card-body">
      <h6>{{ question }}</h6>
      <div>
        <code>{{ fieldData[fieldName] }}</code>
      </div>
    </div>
    <question-undo :field-name="fieldName" />
  </section>
</template>

<script>
import { mapState } from "vuex";
import QuestionUndo from "@/components/QuestionUndo.vue";

export default {
  name: "QuestionReadOnly",
  components: {
    QuestionUndo,
  },
  props: {
    question: { type: String, required: true },
    fieldName: { type: String, required: true },
  },
  computed: {
    ...mapState(["fieldData"]),
  },
};
</script>
