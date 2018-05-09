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
import Vegan from './icons/vegan/vegan.svg'
import Whey from './icons/vegan/whey.svg'

export default {
  mixins: [question],

  data () {
    return {
      title: 'Vegan or whey?',

      key: 'vegan_whey',

      options: [
        {
          text: 'Vegan',
          icon: Vegan,
          value: 'vegan'
        },
        {
          text: 'Whey',
          icon: Whey,
          value: 'whey'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
