import { computed, nextTick } from "vue";
import { useStore } from "vuex";

export default function useAnswerQuestions() {
  const store = useStore();

  return {
    fieldData: computed(() => store.state.fieldData),
    updateFieldData: (payload) => {
      store.dispatch("updateFieldData", payload);
      nextTick(() => window.scrollTo(0, document.body.scrollHeight));
    },
  };
}
