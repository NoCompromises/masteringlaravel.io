import { ref } from "vue";

export default function useAnswerQuestions(fieldName, context) {
  let answer = ref(null);

  const setAnswer = (value) => {
    answer.value = value;
    context.emit("answerSelected", {
      fieldName,
      answer: value,
    });
  };

  return {
    answer,
    setAnswer,
  };
}
