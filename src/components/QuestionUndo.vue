<template>
  <div v-if="lastAnsweredQuestion === fieldName" class="card-footer">
    <button class="btn btn-outline-secondary btn-sm" @click="undoAnswer">
      Undo
    </button>
  </div>
</template>

<script>
import useAnswerQuestions from "@/composables/useAnswerQuestions";
import { mapState } from "vuex";

export default {
  name: "QuestionUndo",
  props: {
    fieldName: { type: String, required: true },
  },
  setup() {
    const { undoAnswer } = useAnswerQuestions();

    return {
      undoAnswer,
    };
  },
  computed: {
    ...mapState(["lastAnsweredQuestion"]),
  },
};
</script>
