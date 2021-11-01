<template>
  <header>
    <div class="container pt-3 mb-5">
      <div class="row">
        <div class="col-12 col-md-7 text-center text-md-start">
          <router-link :to="{ name: 'ValidationHome' }">
            <img src="./assets/logo.svg" alt="No Compromises Logo" />
            <h1>Mastering Laravel</h1>
          </router-link>
        </div>
        <div class="col-12 col-md-5 mt-3 mt-md-0">
          <nav class="text-center text-md-end pt-0 pt-md-3">
            <router-link :to="{ name: 'ValidationBook' }" class="me-3"
              >Validation Book</router-link
            >
            <a href="https://nocompromises.io?ref=worksheet">Contact Us</a>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <router-view />

  <footer>
    <div class="container p-3 small text-center">
      &copy; 2021
      <a
        href="https://nocompromises.io?ref=worksheet"
        title="We _know_ Laravel!"
        >No Compromises LLC</a
      >
    </div>
  </footer>
</template>

<style lang="scss"></style>
