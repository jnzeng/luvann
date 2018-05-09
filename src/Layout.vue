<template lang="pug">
  .layout.page
    .page--head
      .page--head--left
        //- span
      .page--head--center
        .subtitle.brand
          router-link(to="/landing")
            img.logo(
              src="@/assets/logo-black.png",
              alt="LUVANN")

        .nav
          router-link.nav-item(to="/mission") Mission
          router-link.nav-item(to="/product") Our Product
          router-link.nav-item(to="/profile", v-if="user") Profile
          router-link.nav-item(to="/quiz", v-else) Profile

      .page--head--right
        router-link.button(to="/profile", v-if="user") {{ user.name }}
        router-link.button(to="/quiz", v-else) Get Started
        span.icon.m-l-sm
          img(src="@/assets/icons/cart.svg")

    .page--body
      slot

    .page--foot
      .subtitle.brand.row
        router-link(to="/landing")
          img.logo(
            src="@/assets/logo-black.png",
            alt="LUVANN")
      .row
        .icons
          img(src="@/assets/mail.png")
          img(src="@/assets/facebook.png")
          img(src="@/assets/instagram.png")
          img(src="@/assets/pinterest.png")

      form.form.subscribe.flex.row.evenly-center(
        @submit.prevent="subscribe(email)")
        input.input(
          type="email",
          placeholder="Email Address",
          autocomplete="off",
          autocorrect="off",
          autocapitalize="off",
          spellcheck="false",
          v-model="email")
        button.button.is-dark.is-outlined
          span Sign up
</template>

<script>
import ls from 'local-storage'

export default {
  name: 'Layout',

  data () {
    return {
      user: null,
      email: ''
    }
  },

  created () {
    try {
      this.user = ls('user')
    } catch (e) {
      console.error(e)
    }
  },

  methods: {
    subscribe (email) {
      console.log('subscribe', email)
    }
  }
}
</script>

<style lang="scss" scoped>
  .page {
    min-height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
  }

  .page--head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 14rem;
  }

  .page--head--left {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 15rem;
    padding-left: 2rem;
  }

  .page--head--center {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  .page--head--right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 15rem;
    padding-right: 2rem;
  }

  .page--body {
    flex-grow: 1;
  }

  .page--foot {
    min-height: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .row {
      margin: 1rem 0;
    }
  }

  .icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .icons img {
    max-height: 1rem;
    max-width: 1rem;
    margin: 0 10px;
  }

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 400px;
  }

  .nav .nav-item {
    text-transform: uppercase;
    color: #888;
    font-size: 13px;
  }

  .nav .nav-item:hover {
    color: #222;
  }

  .logo {
    height: 1rem;
  }

  .subscribe {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: stretch;

    .input {
      margin-right: 2rem;
      border: 1px #999 solid;
      border-radius: 3px;
    }

    .button {
      border: 2px #000 solid;
      padding: 0 2rem;
      text-transform: uppercase;
      font-size: 14px;
      height: 2.25rem;
    }
  }
</style>
