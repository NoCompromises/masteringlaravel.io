import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      showStartingPoint: true,
      fieldData: getInitialFieldData(),
    };
  },
  mutations: {
    initializeForm(state) {
      state.fieldData = getInitialFieldData();
    },
    setShowStartingPoint(state, payload) {
      state.showStartingPoint = payload.value;
    },
    setFieldData(state, payload) {
      state.fieldData[payload.fieldName] = payload.value;
    },
  },
  actions: {
    hideWorksheet(context) {
      context.commit("setShowStartingPoint", { value: true });
    },
    showWorksheet(context) {
      context.commit("setShowStartingPoint", { value: false });
    },
    resetForm(context) {
      context.commit("setShowStartingPoint", { value: true });
      context.commit("initializeForm");
    },
    updateFieldData(context, payload) {
      context.commit("setFieldData", payload);

      if (payload.fieldName === "required" && payload.value === false) {
        context.commit("setFieldData", {
          fieldName: "allowEmpty",
          value: true,
        });
      }
    },
  },
  strict: process.env.NODE_ENV !== "production",
});

function getInitialFieldData() {
  return {
    name: "",
    required: null,
    allowEmpty: null,
    inputType: null,
    onlyIntegers: null,
    email: null,
    dropDownSource: null,
    singleCheckbox: null,
    radioSource: null,
    dateFormat: null,
    fileTypes: null,
    maxFileSize: null,
    storeInDatabase: null,
    databaseFieldType: null,
  };
}
