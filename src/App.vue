<template>
  <header>
    <div class="container pt-3 mb-5">
      <div class="row">
        <div class="col-12 col-md-10 text-center text-sm-start">
          <router-link to="/">
            <img src="./assets/logo.svg" alt="No Compromises Logo" />
          </router-link>
          <h1>Mastering Laravel</h1>
        </div>
        <div class="col-12 col-md-2 mt-3 mt-sm-0">
          <nav class="text-center text-md-end pt-0 pt-md-2">
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
