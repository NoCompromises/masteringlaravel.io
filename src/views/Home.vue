<template>
  <site-header />

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

  <site-footer />
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import EmailSignUp from "@/components/EmailSignUp.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "Home",
  components: {
    SiteHeader,
    EmailSignUp,
    SiteFooter,
  },
};
</script>
