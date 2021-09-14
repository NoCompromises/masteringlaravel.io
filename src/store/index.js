import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      showStartingPoint: true,
    };
  },
  mutations: {
    setShowStartingPoint(state, payload) {
      state.showStartingPoint = payload.value;
    },
  },
  actions: {
    hideWorksheet(context) {
      context.commit("setShowStartingPoint", { value: true });
    },
    showWorksheet(context) {
      context.commit("setShowStartingPoint", { value: false });
    },
  },
});
