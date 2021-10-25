<template>
  <site-header />

  <main>
    <section class="mb-5">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h1>Mastering Laravel Validation Rules</h1>
            <p>
              A deep dive into validation rules with real-world examples,
              hands-on exercises, and a dash of fun.
            </p>
            <button>Buy the book</button>
            <p>Over 200 pages and 10 exercises - only $34.99</p>
          </div>
          <div class="col-6"></div>
        </div>
      </div>
    </section>
  </main>

  <site-footer />
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";

import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "ValidationHome",
  components: {
    SiteHeader,

    SiteFooter,
  },
};
</script>