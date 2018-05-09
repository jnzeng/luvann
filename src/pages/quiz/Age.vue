<template lang="pug">
  .quiz--question
    .title Age

    .form
      .field
        .control
          input.input.is-large(
            type="text",
            maxlength="2",
            v-model="val")
</template>

<script>
import question from './question'

export default {
  mixins: [question],

  data () {
    return {
      isNumber: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .form .input {
    width: 3em;
    text-align: center;
  }
</style>
