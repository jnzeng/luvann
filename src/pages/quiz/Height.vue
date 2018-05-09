<template lang="pug">
  .quiz--question
    .title Height

    .form
      .field
        .control
          .unit Feet
          input.input.is-large.feet(
            required,
            type="text",
            maxlength="1",
            v-model="feet")
        .control
          .unit Inches
          input.input.is-large.inches(
            required,
            type="text",
            maxlength="2",
            v-model="inches")
</template>

<script>
import question from './question'

export default {
  mixins: [question],

  data () {
    return {
      feet: null,
      inches: null
    }
  },

  watch: {
    feet (feet) {
      this.$emit('answer', parseInt(feet), 'height_feet')
    },

    inches (inches) {
      this.$emit('answer', parseInt(inches), 'height_inch')
    }
  }
}
</script>

<style lang="scss" scoped>
  .form .field {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
  }
  .form .field .control {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .form .field .input {
    width: 2em;
    padding-bottom: 3px;
  }
  .form .field .inches {
    width: 2.5em;
  }
  .control + .control {
    margin-left: 10px;
  }
  .unit {
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
