<template lang="pug">
  .quiz--question
    .title {{ title }}

    .options
      label.radio(
        v-for="option in options",
        :class="{ active: isActive(option) }")
        input.radio(
          type="radio",
          :value="option.value",
          v-model="val")
        a.icon-button
          img(:src="option.icon")
        span {{ option.text }}
</template>

<script>
import question from './question'
import Snack from './icons/consume/Snack.svg'
import Replacement from './icons/consume/Replacement.svg'

export default {
  mixins: [question],

  data () {
    return {
      title: 'How will you consume it?',

      options: [
        {
          text: 'Snack',
          icon: Snack,
          value: 'snack'
        },
        {
          text: 'Meal Replacement',
          icon: Replacement,
          value: 'replacement'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
