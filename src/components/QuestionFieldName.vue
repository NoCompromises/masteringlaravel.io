<template>
  <section class="mt-4 card bg-light">
    <div class="card-body">
      <h6>What is the name of your field?</h6>
      <div>
        <code>{{ name }}</code>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "QuestionFieldName",
  props: ["name"],
};
</script>
