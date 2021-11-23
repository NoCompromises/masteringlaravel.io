<template>
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
    <section class="my-5">
      <div class="container">
        <div class="row hero">
          <div class="col-12 col-md-6">
            <h2 class="mb-4">Master Laravel validation rules</h2>
            <p>
              Do you feel like you're just scratching the surface of what you
              can do with Laravel validation rules? Dive deep with this book and
              gain confidence as you improve your skills.
            </p>
            <p>
              In addition to reading about how to write better rules, we help
              you practice what you're learning with a set of real-world
              exercises.
            </p>
            <div class="text-center mt-4">
              <router-link
                :to="{ name: 'ValidationBook' }"
                class="btn btn-primary"
              >
                Learn More
                <i class="bi bi-caret-right-fill"></i>
              </router-link>
            </div>
          </div>
          <div class="col-12 col-md-5 offset-md-1 text-center mb-5 mb-md-0">
            <img
              src="../assets/book-cover-shot.png"
              alt="Book cover for Mastering Laravel Validation Rules"
              class="img-fluid img-thumbnail"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import EmailSignUp from "@/components/EmailSignUp.vue";

export default {
  components: {
    EmailSignUp,
  },
};
</script>
