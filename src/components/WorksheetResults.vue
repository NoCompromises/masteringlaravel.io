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
        <a href="#" @click="showInstructions = !showInstructions"
          >How do I use these rules?</a
        >
      </div>
      <div class="col-6 text-end">
        <transition name="fade">
          <i v-if="clipboardFlashSuccess" class="bi bi-hand-thumbs-up me-2" />
        </transition>
        <button
          @click="putRulesOnClipboard"
          class="btn btn-secondary btn-sm"
          title="Copy your validation rules, then click me!"
        >
          <i class="bi bi-clipboard"></i>
          Copy to Clipboard
        </button>
      </div>
    </div>

    <div v-if="showInstructions" class="row mt-3">
      <h4>Use this? Can I? Should I? Dare I????</h4>
      <p>
        A man once told me something that shook my mind within inches of
        collapse. He leaned in, and with four soft-spoken words, he left a
        permanent mark on my very being. He said...hold on, be right back. I'll
        finish this story later, I promise.
      </p>
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
  data() {
    return {
      showInstructions: false,
      clipboardFlashSuccess: false,
    };
  },
  methods: {
    putRulesOnClipboard() {
      navigator.clipboard.writeText(this.recommendedRules).then(() => {
        this.clipboardFlashSuccess = true;
        setTimeout(() => (this.clipboardFlashSuccess = false), 1500);
      }),
        () =>
          alert(
            "Clipboard access denied. Use your keyboard the old-fashioned way!"
          );
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

  return `[\n` + formattedRules + `],`;
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

    case "Drop down":
      rules.push(`'string'`);

      break;

    case "Checkbox":
      if (answers.singleCheckbox) {
        rules.push(`'boolean'`);
      } else if (answers.singleCheckbox === false) {
        rules.push(`// array support coming soon`);
      }

      break;

    case "Radio":
      rules.push(`'string'`);

      break;

    default:
      break;
  }

  return rules;
}

function getBoundsRules(answers) {
  let rules = [];

  switch (answers.inputType) {
    case "Drop down":
      if (answers.dropDownSource === "PHP array") {
        rules.push(`Rule::in($array)`);
      } else if (answers.dropDownSource === "Database") {
        rules.push(`Rule::exists($table, $column)`);
      }

      break;

    case "Radio":
      if (answers.radioSource === "PHP array") {
        rules.push(`Rule::in($array)`);
      } else if (answers.radioSource === "Database") {
        rules.push(`Rule::exists($table, $column)`);
      }

      break;

    default:
      break;
  }
  return rules;
}

function getCustomRules() {
  return [];
}
</script>
