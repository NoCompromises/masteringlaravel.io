<template>
  <site-header />

  <main>
    <section class="mb-5">
      <div class="container">
        <div class="col-12 col-md-6">
          <h2 class="mb-4">I'm the Worksheet Now!!</h2>
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
  name: "Worksheet",
  components: {
    SiteHeader,
    SiteFooter,
  },
};
</script>
