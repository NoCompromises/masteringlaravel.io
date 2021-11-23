<template>
  <main>
    <section class="mb-5">
      <div class="container">
        <div class="row hero">
          <div class="col-12 col-md-6 mb-5 mb-md-0">
            <div class="card h-100">
              <div class="card-body d-flex flex-column">
                <h2 class="card-title text-center">Make your app better</h2>
                <p>
                  We've assembled a collection of short useful tips that will
                  make your Laravel application a little bit better.
                </p>
                <p class="flex-grow-1">
                  These tips are quick and easy to apply, but can make a
                  noticeable difference in your app.
                </p>
                <div class="text-center">
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
          <div class="col-12 col-md-6">
            <div class="card h-100">
              <div class="card-body d-flex flex-column">
                <h2 class="card-title text-center">
                  Use the right validation rules
                </h2>
                <p>
                  Validation is a deep topic, but it's important to get it
                  right.
                </p>
                <p class="flex-grow-1">
                  Whether you want to dive deep and master the available
                  validation rules, or just need some help to get started, we
                  can help.
                </p>
                <div class="text-center mt-4">
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
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>
