<template>
  <main>
    <section class="mb-5">
      <div class="container overflow-hidden">
        <div class="row hero gx-5">
          <div class="col-12 col-lg-6 mb-5 mb-md-0">
            <div class="row h-100">
              <div class="col-12 col-xl-10">
                <div class="d-flex flex-column h-100">
                  <h2>Make your app better</h2>

                  <div class="flex-grow-1 pt-3">
                    <img
                      src="../assets/tips-cover.jpg"
                      alt="Book cover for Mastering Laravel Validation Rules"
                      class="float-start img-fluid w-25 w-lg-50 pe-3"
                    />
                    <p>
                      We've assembled a collection of short useful tips that
                      will make your Laravel application a little bit better.
                    </p>
                    <p>
                      These tips are quick and easy to apply, but can make a
                      noticeable improvement.
                    </p>
                    <div class="d-lg-none">
                      <a
                        href="https://nocompromises.gumroad.com/l/little-laravel"
                        class="btn btn-primary"
                        target="_blank"
                      >
                        Get your FREE Laravel tips
                        <span class="text-nowrap"
                          >book<i class="bi bi-caret-right-fill"></i
                        ></span>
                      </a>
                    </div>
                  </div>

                  <div class="mt-4 d-none d-lg-block">
                    <a
                      href="https://nocompromises.gumroad.com/l/little-laravel"
                      class="btn btn-primary"
                      target="_blank"
                    >
                      Get your FREE Laravel tips
                      <span class="text-nowrap"
                        >book<i class="bi bi-caret-right-fill"></i
                      ></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 pt-5 pt-lg-0">
            <div class="row h-100">
              <div class="col-12 col-xl-10 offset-xl-2">
                <div class="d-flex flex-column h-100">
                  <h2>Use the right validation rules</h2>

                  <div class="flex-grow-1 pt-3">
                    <img
                      src="../assets/lots-of-rules-portrait.png"
                      alt="Book cover for Mastering Laravel Validation Rules"
                      class="float-start img-fluid w-25 w-lg-50 pe-3"
                    />
                    <p>
                      Validation is a deep topic, but it's important to get it
                      right.
                    </p>
                    <p class="flex-grow-1">
                      Whether you want to dive deep and master the available
                      validation rules, or just need a nudge to start, we can
                      help.
                    </p>
                    <div class="d-lg-none">
                      <router-link
                        :to="{ name: 'ValidationHome' }"
                        class="btn btn-primary"
                      >
                        Learn Laravel Validation
                        <i class="bi bi-caret-right-fill"></i>
                      </router-link>
                    </div>
                  </div>

                  <div class="mt-4 d-none d-lg-block">
                    <router-link
                      :to="{ name: 'ValidationHome' }"
                      class="btn btn-primary"
                    >
                      Learn Laravel Validation
                      <i class="bi bi-caret-right-fill"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-4 py-5 px-2 bg-light border-top">
      <email-sign-up />
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
