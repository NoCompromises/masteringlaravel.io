<template>
  <main>
    <section class="mb-5">
      <div class="container">
        <div class="row hero">
          <div class="col-12 col-md-5 mb-5 mb-md-0">
            <h2 class="mb-4">Send us a note</h2>
            <p>
              Do you have a question or a topic that you'd like us to discuss on
              the podcast?
            </p>
            <p>
              Or do you have a question about something published on this site?
            </p>
          </div>
          <div class="col-12 col-md-6 offset-md-1">
            <form name="contact" method="POST" data-netlify="true">
              <input
                type="hidden"
                name="form-name"
                action="/contact-success"
                value="contact"
              />
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  class="form-control"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  class="form-control"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <p>
                <button type="submit" class="btn btn-primary">Send</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section
      class="pt-3 py-3 px-2 bg-light border-top border-bottom text-center"
    >
      <h4>Or are you looking to work with us?</h4>
      <p>
        <a href="https://nocompromises.io?ref=ml" target="_blank"
          >Book a free call</a
        >
        to see if we can help.
      </p>
    </section>
  </main>
</template>
