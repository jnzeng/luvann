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
import meals2 from './icons/meals/meals2.svg'
import meals3 from './icons/meals/meals3.svg'
import meals4 from './icons/meals/meals4.svg'

export default {
  mixins: [question],

  data () {
    return {
      title: 'On average, how many meals do you eat each day?',

      options: [
        {
          text: '2 or less',
          icon: meals2,
          value: '2_or_less'
        },
        {
          text: '3',
          icon: meals3,
          value: '3'
        },
        {
          text: '4 or more',
          icon: meals4,
          value: '4_or_more'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
