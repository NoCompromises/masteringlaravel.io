<template>
  <div class="text-center" id="updates-signup">
    <h3>Sign up to get updates</h3>
    <p>Get updates when we release new features and other projects.</p>
    <transition name="email-signup-success" mode="out-in">
      <form v-if="!submitted" @submit.prevent="handleSubmit()">
        <div class="form-floating mb-3">
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="email"
            placeholder="name@example.com"
            required
            :readonly="submitting"
          />
          <label for="email">Email address</label>
        </div>
        <button :disabled="submitting" type="submit" class="btn btn-secondary">
          Sign Up
          <i class="ms-2 bi bi-person-plus-fill"></i>
          <span
            v-if="submitting"
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
        </button>
      </form>
      <div v-else>
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
    </transition>
  </div>
</template>

<script>
export default {
  name: "EmailSignUp",

  data() {
    return {
      email: "",
      submitting: false,
      submitted: false,
    };
  },

  methods: {
    handleSubmit() {
      this.submitting = true;

      const formData = new FormData();
      formData.append("seller_id", "8910930605039");
      formData.append("email", this.email);

      fetch("https://app.gumroad.com/follow_from_embed_form", {
        mode: "no-cors",
        method: "POST",
        body: formData,
      }).finally(() => {
        this.submitting = false;
        this.submitted = true;
      });
    },
  },
};
</script>

<style lang="scss">
#updates-signup {
  max-width: 30rem;
  margin: auto;
}
.email-signup-success-enter-active,
.email-signup-success-leave-active {
  transition: opacity 0.5s;
}
.email-signup-success-enter,
.email-signup-success-leave-to {
  opacity: 0;
}
</style>
