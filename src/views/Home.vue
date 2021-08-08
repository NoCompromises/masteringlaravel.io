<template>
  <header>
    <div class="container pt-3 mb-5">
      <div class="row">
        <div class="col-12 col-md-10 text-center text-sm-start">
          <img src="../assets/logo.svg" alt="No Compromises Logo" />
          <h1>Laravel Validation Builder</h1>
        </div>
        <div class="col-12 col-md-2 mt-3 mt-sm-0">
          <nav class="text-center text-md-end pt-0 pt-md-2">
            <a href="https://nocompromises.io">Contact Us</a>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <main>
    <section class="mb-5">
      <div class="container">
        <div class="row hero">
          <div class="col-12 col-md-6 text-center mb-5 mb-md-0">
            <img
              src="https://placekitten.com/550/360"
              alt="Preview of worksheet"
              class="img-fluid img-thumbnail"
            />
          </div>
          <div class="col-12 col-md-6">
            <h2 class="mb-4">
              Fart Blossom Dong Cheadle Brick of Blue Cheese Chub Rub
            </h2>
            <p>
              Bacon ipsum dolor amet ribeye salami sausage, beef ribs prosciutto
              pork loin ham hock shoulder brisket biltong. Chicken
              <strong>t-bone strip steak</strong> ground round, pork belly
              meatloaf tail short loin capicola kevin picanha ham hock hamburger
              frankfurter.
            </p>
            <p>
              T-bone ham burgdoggen cow. Ham hock pork belly pancetta cow pork
              loin alcatra beef ribs drumstick pastrami tri-tip sausage shankle
              meatloaf spare ribs. Pork chop t-bone beef ribs, cow meatball
              jerky picanha.
            </p>
            <div class="text-center mt-4">
              <a
                href="step-1-we-can-have-lots-of-fun.html"
                class="btn btn-primary"
              >
                Generate Validation Rules
                <i class="bi bi-caret-right-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-4 py-5 px-2 bg-light border-top">
      <email-sign-up />
    </section>
  </main>

  <footer>
    <div class="container p-3 small text-center">
      &copy; 2021
      <a href="https://nocompromises.io" title="We _know_ Laravel!"
        >No Compromises LLC</a
      >
    </div>
  </footer>
</template>

<script>
// @ is an alias to /src
import EmailSignUp from "@/components/EmailSignUp.vue";

export default {
  name: "Home",
  components: {
    EmailSignUp,
  },
};
</script>
