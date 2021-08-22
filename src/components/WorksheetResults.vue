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

    case "Date":
      if (answers.dateFormat) {
        rules.push(`'date_format:yyyy-mm-dd'`);
      } else if (answers.dateFormat === false) {
        rules.push(`'date'`);
      }
      break;

    default:
      break;
  }

  return rules;
}

function getBoundsRules(answers) {
  let rules = [];

  switch (answers.inputType) {
    case "Numeric":
      switch (answers.databaseFieldType) {
        case "TINYINT":
          rules.push(`'between:-128,127'`);
          break;

        case "TINYINT UNSIGNED":
          rules.push(`'between:0,255'`);
          break;

        case "SMALLINT":
          rules.push(`'between:-32768,32767'`);
          break;

        case "SMALLINT UNSIGNED":
          rules.push(`'between:0,65535'`);
          break;

        case "MEDIUMINT":
          rules.push(`'between:-8388608,8388607'`);
          break;

        case "MEDIUMINT UNSIGNED":
          rules.push(`'between:0,16777215'`);
          break;

        case "INT":
          rules.push(`'between:-2147483648,2147483647'`);
          break;

        case "INT UNSIGNED":
          rules.push(`'between:0,4294967295'`);
          break;

        case "BIGINT":
          rules.push(`'between:-9223372036854775808,9223372036854775807'`);
          break;

        case "BIGINT UNSIGNED":
          rules.push(`'between:0,18446744073709551615'`);
          break;

        default:
          break;
      }
      break;

    case "Text":
      switch (answers.databaseFieldType) {
        case "CHAR":
          rules.push(`'max:255' // change default as needed`);
          break;

        case "VARCHAR":
          rules.push(`'max:255' // change default as needed`);
          break;

        case "TINYTEXT":
          rules.push(`'max:256'`);
          break;

        case "TEXT":
          rules.push(`'max:65536'`);
          break;

        case "MEDIUMTEXT":
          rules.push(`'max:16777216'`);
          break;

        case "LONGTEXT":
          rules.push(`'max:4294967296'`);
          break;

        default:
          break;
      }

      break;

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

    case "File":
      if (answers.fileTypes) {
        rules.push(`'mime_types:list,png,pdf,etc'`);
      }

      switch (answers.maxFileSize) {
        case "1 MB":
          rules.push(`'max:1024'`);
          break;
        case "5 MB":
          rules.push(`'max:5120'`);
          break;
        case "10 MB":
          rules.push(`'max:10240'`);
          break;
        case "20 MB":
          rules.push(`'max:20480'`);
          break;
        default:
          break;
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
