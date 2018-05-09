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
      form.login--form(@submit.prevent="login")
        .field
          .control
            input.input(
              type="text",
              autocomplete="off",
              autocorrect="off",
              autocapitalize="off",
              spellcheck="false",
              v-model="user.name")
        .field
          .control
            input.input(
              type="email",
              placeholder="Email",
              autocomplete="off",
              autocorrect="off",
              autocapitalize="off",
              spellcheck="false",
              v-model="user.email")
        .field
          .control
            input.input(
              type="password",
              placeholder="Password",
              autocomplete="off",
              autocorrect="off",
              autocapitalize="off",
              spellcheck="false",
              v-model="user.password")
    .page--foot
</template>

<script>
export default {
  name: 'login',

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
    login () {
      this.$api.users.create()
    }
  }
}
</script>

<style lang="scss" scoped></style>
