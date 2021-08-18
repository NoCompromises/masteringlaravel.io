<template>
  <section class="mt-4 card bg-light">
    <div class="card-body">
      <h6>{{ question }}</h6>
      <div>
        <code>{{ answer }}</code>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "QuestionReadOnly",
  props: ["question", "answer"],
};
</script>
