<template>
  <site-header />

  <main>
    <main class="container start">
      <section class="mb-3">
        <p id="question">
          We have to ask you a few questions to build your validation rules:
        </p>
        <form class="mt-3 mt-md-5" id="vue-does-this-better">
          <div class="row">
            <div class="col-12">
              <label for="fieldName" class="form-label">
                What is the name of your form field?
              </label>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-9 mb-3 mb-sm-0">
              <input type="text" class="form-control" id="fieldName" required />
            </div>
            <div class="col-12 col-sm-3">
              <button type="submit" class="btn btn-primary">
                Next
                <i class="bi bi-caret-right-fill"></i>
              </button>
            </div>
          </div>
        </form>
      </section>
    </main>
  </main>

  <site-footer />
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";

export default {
  name: "ValidationWorksheet",
  components: {
    SiteHeader,
    SiteFooter,
  },
};
</script>
