<template lang="pug">
  .page
    .page--head
      .page--head--left
        //-

      .page--head--center
        .subtitle.brand
          img.logo(
            src="@/assets/logo.png",
            alt="LUVANN")

      .page--head--right
        //-

    .page--body
      .title What's your name and email?

      form.form(@submit.prevent="register")
        .field
          label.label Full Name
          .control
            input.input(
              type="text",
              autocorrect="off",
              spellcheck="false",
              v-model="user.name")
        .field
          label.label E-mail
          .control
            input.input(
              type="email",
              autocorrect="off",
              autocapitalize="off",
              spellcheck="false",
              v-model="user.email")
        .field
          label.label Password
          .control
            input.input(
              type="password",
              v-model="user.password")

    .page--foot
      .page--foot--left
        a.login-button Log In

      .page--foot--right(@click="register")
        button.register-button Sign Up
</template>

<script>
import ls from 'local-storage'

export default {
  name: 'register',

  data () {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    }
  },

  methods: {
    register () {
      ls('user', this.user)
      this.$router.push('/profile')
    }
  }
}
</script>

<style lang="scss" scoped>
  .page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: 100vw;
    min-height: 500px;
  }

  .logo {
    height: 0.85rem;
  }

  .page--head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;
  }

  .page--body {
    flex-grow: 5;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: stretch;
  }

  .page--foot {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 100vw;
    flex-grow: 1;
    padding-top: 2rem;
  }

  .form {
    width: 19rem;
  }

  .title {
    font-size: 22px;
    font-weight: 400;
  }

  .register-button, .login-button {
    border: 2px #000 solid;
    border-radius: 3px;
    height: 3rem;
    width: 8rem;
    margin: 0 5px;
    color: #000;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;
    font-size: 11px;
  }

  .register-button {
    background-color: var(--color-blue);
  }

  .login-button {
    //
  }
</style>
