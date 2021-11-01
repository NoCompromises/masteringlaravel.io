<template>
  <main>
    <section class="mb-5">
      <div class="container">
        <div class="row pb-3">
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

        <div class="row mt-5">
          <div
            class="col-12 col-md-5 pt-0 pt-md-2 mb-4 mb-md-0 image-container"
          >
            <img
              src="../assets/lots-of-rules.png"
              alt="lots of rules in IDE"
              class="img-fluid rounded"
            />
          </div>
          <div class="col-12 col-md-6 offset-md-1">
            <h2>So many rules, which one is best?</h2>
            <p>
              Laravel includes over 70 built-in rules. Choice is good, but
              sometimes it can be a bit daunting to know which rule is the best
              for a specific situation. For example, should this field be
              excluded or prohibited? Or, what's the difference between digits,
              integer, and numeric validation?
            </p>
            <p>
              The Laravel docs are world-class, but wouldn't it be great if you
              didn't have to reference them so often while trying to get work
              done?
            </p>
            <p>
              For every rule, we show you how it works with detailed code
              examples, explain when you'd use it, and point out things that may
              trip you up. Once you've worked through the book and exercises,
              you won't be visiting the docs as often, and when you do, you'll
              know much more quickly which rule is the right one to use.
            </p>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-12 col-md-6 mt-4 mt-md-0">
            <h2>Garbage in, garbage out</h2>
            <p>
              No one likes having to clean up messy data, like phone numbers or
              dates. Are you overwhelmed with bug reports from users typing in
              bad data and getting an exception? Or even worse, have you ever
              wondered if a malicious user could get up to mischief because some
              input wasn't handled properly?
            </p>
            <p>
              Well-written validation rules can help with all of these
              scenarios. Enjoy having consistent data, cut down on the noise in
              your bug reporting, and sleep a little easier at night knowing
              you've handled user input safely.
            </p>
            <p>
              We go beyond the mechanics of how rules work, and share our
              opinions on how to write secure, reliable, and easy-to-maintain
              validation logic. With our deep experience working in apps of all
              different sizes, we share some battle-tested strategies that will
              help you be much more confident in your choice of validation
              rules.
            </p>
          </div>
          <div
            class="
              order-first order-md-last
              col-12 col-md-5
              offset-md-1
              pt-0 pt-md-2
              image-container
            "
          >
            <img
              src="../assets/bad-data.png"
              alt="garbage telephone numbers"
              class="img-fluid rounded"
            />
          </div>
        </div>

        <div class="row mt-5">
          <div
            class="col-12 col-md-5 pt-0 pt-md-2 mb-4 mb-md-0 image-container"
          >
            <img
              src="../assets/exercises-graded.png"
              alt="output of grading of exercises"
              class="img-fluid rounded"
            />
          </div>
          <div class="col-12 col-md-6 offset-md-1">
            <h2>Will this really improve my skills?</h2>
            <p>
              We've all bought a new tech book, excited to level up our skills.
              While reading it, we're nodding our head - this is great
              information! But when we're all done and set the book back on the
              shelf, we're not really sure if we're any better at our day-to-day
              work.
            </p>
            <p>
              This book was designed with learning and retention in mind. We
              write with a conversational style, and include a number of asides
              that keep you mentally engaged. For those who learn better by
              reading code, we also include numerous code blocks showing what
              data passes and fails validation.
            </p>
            <p>
              We also offer a set of robust exercises to help you immediately
              practice what you've learned. Use your favorite editor and get
              hands-on experience. The exercises automatically check your work
              and guide you toward a solution without just giving you the
              answer.
            </p>
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
p {
  color: #666666;
  font-size: 0.85rem;
}
p:first-of-type {
  font-size: 1rem;
}
h1 {
  font-weight: 900;
}
h2 {
  font-weight: 700;
  margin-bottom: 1rem;
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
.image-container {
  text-align: center;

  img {
    max-height: 20rem;
  }
}
</style>
