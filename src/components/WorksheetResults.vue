<template>
  <div class="bg-light border p-3" id="validation-panel">
    <p class="fst-italic">
      This should be added to the array of rules sent to your validator
      instance:
    </p>

    <textarea
      id="results"
      class="form-control"
      v-model="recommendedRules"
    ></textarea>

    <div class="row mt-3">
      <div class="col-6">
        <a href="#">How do I use these rules?</a>
      </div>
      <div class="col-6 text-end">
        <button
          class="btn btn-secondary btn-sm"
          title="Copy your validation rules, then click me!"
        >
          <i class="bi bi-clipboard"></i>
          Copy to Clipboard
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorksheetResults",
  props: ["answers"],
  computed: {
    recommendedRules() {
      return `'${this.answers.name}' => ${buildResults(this.answers)}`;
    },
  },
};

function buildResults(answers) {
  var results = [
    ...getAvailabilityRules(answers),
    ...getTypeRules(answers),
    ...getBoundsRules(answers),
    ...getCustomRules(answers),
  ];

  return formatArray(results);
}

function formatArray(results) {
  if (results.length === 0) {
    return "[]";
  }
  let formattedRules = "";
  results.forEach((rule) => (formattedRules += `\t${rule},\n`));

  return `[\n` + formattedRules + `]`;
}

function getAvailabilityRules(answers) {
  let rules = [];

  if (answers.required && answers.allowEmpty) {
    rules.push(`'present'`);
  } else if (answers.required) {
    rules.push(`'required'`);
  }

  return rules;
}

function getTypeRules(answers) {
  let rules = [];

  switch (answers.inputType) {
    case "Text":
      rules.push(`'string'`);

      if (answers.email) {
        rules.push(`'email'`);
      }

      break;

    case "Numeric":
      if (answers.onlyIntegers) {
        rules.push(`'integer'`);
      } else {
        rules.push(`'numeric'`);
      }

      break;

    default:
      break;
  }

  return rules;
}

function getBoundsRules() {
  return [];
}

function getCustomRules() {
  return [];
}
</script>
