<template>
  <header>
    <div class="container pt-3 mb-5">
      <div class="row">
        <div class="col-12 col-lg-5 text-center text-md-start">
          <router-link :to="{ name: 'Home' }">
            <img src="./assets/logo.svg" alt="No Compromises Logo" />
            <h1>Mastering Laravel</h1>
          </router-link>
        </div>
        <div class="col-12 col-lg-7 mt-3 mt-md-0">
          <nav class="text-center text-lg-end pt-0 pt-md-3">
            <a
              href="https://nocompromises.gumroad.com/l/little-laravel"
              target="_blank"
              class="me-3 d-inline-block"
              >Tips</a
            >
            <router-link
              :to="{ name: 'ValidationWorksheet' }"
              class="me-sm-3 d-inline-block"
              >Validation Worksheet</router-link
            >
            <br class="d-sm-none" />
            <router-link
              :to="{ name: 'ValidationBook' }"
              class="me-3 d-inline-block"
              >Validation Book</router-link
            >
            <a
              href="https://nocompromises.io?ref=ml"
              target="_blank"
              class="d-inline-block"
              >Contact Us</a
            >
          </nav>
        </div>
      </div>
    </div>
  </header>

  <router-view />

  <footer class="py-4">
    <div class="container">
      <section class="row">
        <div class="col-md mb-4 mb-md-0">
          <h6>
            Brought to you by
            <a href="https://nocompromises.io?ref=ml" target="_blank"
              >No Compromises</a
            >:
          </h6>
          <p class="mb-0">
            <a href="https://twitter.com/jclermont" target="_blank">
              Joel Clermont
            </a>
            /
            <a href="https://twitter.com/aaronsaray" target="_blank">
              Aaron Saray
            </a>
          </p>
          <p class="mb-0">Milwaukee, Wisconsin</p>
        </div>
        <div class="col-md">
          <h6>No Compromises Podcast</h6>
          <iframe
            width="100%"
            height="180"
            frameborder="no"
            scrolling="no"
            seamless
            src="https://share.transistor.fm/e/08b0bc00"
          ></iframe>
        </div>
      </section>
    </div>
  </footer>
</template>

<style lang="scss"></style>
