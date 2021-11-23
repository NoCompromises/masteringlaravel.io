<template>
  <div>
    <hr class="d-none d-lg-block" />
    <div class="d-flex align-items-center book-cta mt-4">
      <div class="flex-shrink-0">
        <router-link :to="{ name: 'ValidationBook' }">
          <img src="../assets/validation-book-cover.jpg" alt="Book Cover" />
        </router-link>
      </div>
      <div class="flex-grow-1 ms-3">
        <h6>Want to Master Validation Rules?</h6>
        <p>
          We've written the book on it! Let us teach you everything we know
          about validation rules.
        </p>
        <router-link :to="{ name: 'ValidationBook' }" class="btn btn-primary">
          Check out the Book
        </router-link>
      </div>
    </div>
  </div>
</template>
