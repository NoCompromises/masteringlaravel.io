<template>
  <site-header />

  <main>
    <section class="mb-5">
      <div class="container">
        <div class="row hero">
          <div class="col-12 col-md-5 text-center mb-5 mb-md-0">
            <img
              src="../assets/worksheet-preview.png"
              alt="Preview of worksheet"
              class="img-fluid img-thumbnail"
            />
          </div>
          <div class="col-12 col-md-6 offset-md-1">
            <h2 class="mb-4">Get a jump start on your validation rules</h2>
            <p>
              Are you stuck staring at a blank page in your editor and
              considering maybe just skipping validation this time? Or do you
              worry that you're overlooking some very basic rules?
            </p>
            <p>
              This worksheet asks you a series of simple questions and creates a
              set of rules you can copy and paste as a starting point.
            </p>
            <div class="text-center mt-4">
              <router-link to="/worksheet" class="btn btn-primary">
                Generate Validation Rules
                <i class="bi bi-caret-right-fill"></i>
              </router-link>
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
  name: "ValidationHome",
  components: {
    SiteHeader,
    EmailSignUp,
    SiteFooter,
  },
};
</script>
