<template>
  <main>
    <section class="mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-7 col-lg-5 pt-0 pt-lg-5 mb-4 mb-md-0">
            <h1 class="mb-4">Mastering Laravel Validation Rules</h1>
            <p>
              A deep dive into validation rules with real-world examples,
              hands-on exercises, and a dash of fun.
            </p>
            <div class="d-grid d-md-block">
              <a href="#" class="btn btn-primary rounded">Buy the book</a>
            </div>
            <p class="small mt-4">
              <strong>Over 200 pages</strong> and
              <span class="text-secondary">10 exercises</span> - only
              <span class="text-success">$34.99</span>
            </p>
          </div>
          <div class="col-12 col-md-5 col-lg-6 offset-lg-1">
            <div class="shadow rounded">
              <img
                src="../assets/book-cover-shot.png"
                alt="book cover"
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "ValidationHome",
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 900;
}
.small {
  font-size: 0.7rem;
}
strong {
  font-weight: 700;
}
.btn {
  padding: 0.5rem 2rem;
  font-size: 0.85rem;
}
.btn-primary {
  color: white;
  background-color: #059669;
}
.text-secondary {
  color: #ff0000 !important;
}
</style>
