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
import Stevia from './icons/sweetener/stevia.svg'
import Unsweetened from './icons/sweetener/unsweetened.svg'

export default {
  mixins: [question],

  data () {
    return {
      title: 'How would you like it sweetened?',

      options: [
        {
          text: 'Stevia',
          icon: Stevia,
          value: 'stevia'
        },
        {
          text: 'Unsweetened',
          icon: Unsweetened,
          value: 'unsweetened'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
