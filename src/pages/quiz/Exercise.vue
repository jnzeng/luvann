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
import Weightlifting from './icons/exercise/Weightlifting.svg'
import Cardio from './icons/exercise/Cardio.svg'
import Sports from './icons/exercise/Sports.svg'
import Yoga from './icons/exercise/Yoga.svg'
import Dance from './icons/exercise/Dance.svg'
import Swimming from './icons/exercise/Swimming.svg'
import Crossfit from './icons/exercise/Crossfit.svg'
import Other from './icons/exercise/Other.svg'
import None from './icons/exercise/None.svg'

export default {
  mixins: [question],

  data () {
    return {
      title: 'What type of exercise or sports do you do?',

      options: [
        {
          text: 'Weightlifting',
          icon: Weightlifting,
          value: 'weightlifting'
        },
        {
          text: 'Cardio',
          icon: Cardio,
          value: 'cardio'
        },
        {
          text: 'Sports',
          icon: Sports,
          value: 'sports'
        },
        {
          text: 'Yoga',
          icon: Yoga,
          value: 'yoga'
        },
        {
          text: 'Dance',
          icon: Dance,
          value: 'dance'
        },
        {
          text: 'Swimming',
          icon: Swimming,
          value: 'swimming'
        },
        {
          text: 'Crossfit',
          icon: Crossfit,
          value: 'crossfit'
        },
        {
          text: 'Other',
          icon: Other,
          value: 'other'
        },
        {
          text: 'None',
          icon: None,
          value: 'none'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
