<template>
  <div class="text-center" id="updates-signup">
    <h3>Sign up to get updates</h3>
    <p>Get updates when we release new features and other projects.</p>
    <form class="updates-form">
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="name@example.com"
          required
        />
        <label for="email">Email address</label>
      </div>
      <button type="submit" class="btn btn-secondary">
        Sign Up
        <i class="ms-2 bi bi-person-plus-fill"></i>
      </button>
    </form>
    <div class="d-none signup-success">
      <div class="alert alert-success">
        Sweet. You're on our list to know when we release new updates.
      </div>
      <p>
        Now, head over and
        <a href="step-1-we-can-have-lots-of-fun.html"
          >generate some validation rules</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmailSignUp",
  props: {
    /* mad props to Aaron for taking this component */
  },
};
</script>
