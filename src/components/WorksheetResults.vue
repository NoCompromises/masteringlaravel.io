<template>
  <div class="col-12 col-lg-6 mt-4 mb-4 mt-lg-0">
    <div class="bg-light border p-3" id="validation-panel">
      <p class="fst-italic">
        This should be added to the array of rules sent to your validator
        instance:
      </p>
      <textarea id="results" class="form-control">'title' => [],</textarea>
      <div class="row mt-3">
        <div class="col-6">
          <a href="#">How do I use these rules?</a>
        </div>
        <div class="col-6 text-end">
          <button
            class="btn btn-secondary btn-sm"
            title="Copy your validation rules, then click me!"
          >
            <i class="bi bi-clipboard"></i>
            Copy to Clipboard
          </button>
        </div>
      </div>
    </div>
    <section class="finish-panel d-none">
      <div class="d-block d-lg-none">
        <div class="d-flex align-items-center book-cta mt-4">
          <div class="flex-shrink-0">
            <img src="validation-book-cover.jpg" alt="Book Cover" />
          </div>
          <div class="flex-grow-1 ms-3">
            <h6>Want to Master Validation Rules?</h6>
            <p>
              TV shows on radio are lazy. Food is sitting while the weather is
              flying. Cold is with the monkey's ears and toes. Cats, dogs, and
              babies, it's Tuesday!
            </p>
            <a href="#" class="btn btn-primary">Check out the Book</a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "WorksheetResults",
};
</script>
