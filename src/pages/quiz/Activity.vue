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
import Sedentary from './icons/activity/sedentary.svg'
import Light from './icons/activity/light.svg'
import Moderate from './icons/activity/moderate.svg'
import Hard from './icons/activity/hard.svg'

export default {
  mixins: [question],

  data () {
    return {
      title: 'Current Activity Level',
      options: [
        {
          text: 'Sedentary \n(little or no exercise)',
          value: 'sedentary',
          icon: Sedentary
        },
        {
          text: 'Lightly active \n(1-3 days/week)',
          value: 'lightly_active',
          icon: Light
        },
        {
          text: 'Moderately active \n(3-5 days/week)',
          value: 'moderately_active',
          icon: Moderate
        },
        {
          text: 'Very active \n(very hard exercise)',
          value: 'very_active',
          icon: Hard
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  label.radio span {
    max-width: 200px;
  }
</style>
