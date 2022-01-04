<template>
  <main>
    <section class="mb-4">
      <div class="container">
        <h2 class="text-center mb-4">Laravel App Security</h2>
        <div class="row">
          <div class="col-12 col-md-8 offset-md-2">
            <p>
              Laravel is a very powerful framework. But we should keep in mind
              what a wise man once said,
              <strong>"With great power comes great responsibility."</strong>
            </p>
            <p>
              You have a great responsibility when programming your Laravel
              apps: to solve the business problem, to program accurately and
              efficiently, and to build securely.
            </p>
            <p>
              Security can seem tedious or overwhelming, but it doesn't have to
              be! We can help.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="choice py-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-5">
            <h3 class="mb-3">7 Steps to a Secure Laravel App</h3>
            <div class="d-flex">
              <div class="flex-shrink-0">
                <a href="#gumroad-link" target="_blank">
                  <img
                    src="../assets/7-steps-security-cover.jpg"
                    alt="7 steps book cover"
                    class="book-cover"
                  />
                </a>
              </div>
              <div class="flex-grow-1 ms-3">
                <p>
                  This ebook breaks down securing your Laravel app into 7 easy,
                  simple and effective steps.
                </p>
                <p>
                  Each step only takes a few minutes to read, and up to a few
                  hours to implement.
                </p>
              </div>
            </div>
            <div class="mt-4">
              <a href="#gumroad-link" class="btn btn-primary" target="_blank"
                >Get your FREE copy of the book<i
                  class="bi bi-caret-right-fill"
                ></i
              ></a>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-5 offset-lg-2">
            <h3 class="mb-3">Secure Coding Laravel Video Course</h3>
            <div class="d-flex">
              <div class="flex-shrink-0">
                <a href="#interior-link" target="_blank">
                  <img
                    src="../assets/security-video-cover.jpg"
                    alt="Laravel secure coding video course"
                    class="video-course-preview"
                  />
                </a>
              </div>
              <div class="flex-grow-1 ms-3">
                <p>
                  This video course makes securing your app a breeze. It has
                  something for every level of Laravel programmer: simple
                  authorization and validation all the way to advanced security
                  scanning tools, honey pots and tripwires.
                </p>
              </div>
            </div>
            <div class="mt-4">
              <router-link
                :to="{ name: 'SecurityVideo' }"
                class="btn btn-primary"
                >Learn more about the course<i
                  class="bi bi-caret-right-fill"
                ></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import "bootstrap/scss/bootstrap-utilities";

.choice {
  background-color: #f1f1f1;
}
h3 {
  font-size: 1.5rem;
}
.book-cover,
.video-course-preview {
  height: 150px;
  @include media-breakpoint-up(lg) {
    height: 200px;
  }
}
</style>
