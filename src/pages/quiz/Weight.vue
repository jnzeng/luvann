<template lang="pug">
  .quiz--question
    .title Current Weight

    .form
      .field
        .control
          input.input.is-large(
            required,
            maxlength="3",
            type="text",
            v-model="val")
          .unit lbs
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
  .form .field {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
  }
  .form .field .control {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .form .field .input {
    width: 4em;
    padding-bottom: 3px;
  }
  .control + .control {
    margin-left: 10px;
  }
  .unit {
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
