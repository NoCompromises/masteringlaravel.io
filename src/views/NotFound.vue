<template>
  <site-header />

  <main>
    <section class="mb-5">
      <div class="container">
        <div class="row">
          <h1>You have failed in your feeble attempt at navigation.</h1>
          <router-link to="/">Home</router-link>
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
  name: "NotFound",
  components: {
    SiteHeader,
    SiteFooter,
  },
};
</script>
