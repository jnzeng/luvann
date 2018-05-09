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
import Beauty from './icons/benefits/beauty.svg'
import Stamina from './icons/benefits/stamina.svg'
import Energy from './icons/benefits/energy.svg'
import Mood from './icons/benefits/mood.svg'
import Detox from './icons/benefits/detox.svg'
import GutHealth from './icons/benefits/gut-health.svg'
import Antioxidants from './icons/benefits/antioxidants.svg'
import BodyBuilder from './icons/benefits/body-builder.svg'
import None from './icons/benefits/none.svg'

export default {
  mixins: [question],

  data () {
    return {
      title: 'What benefits are you interested in?',

      options: [
        {
          text: 'Beauty',
          icon: Beauty,
          value: 'beauty'
        },
        {
          text: 'Stamina',
          icon: Stamina,
          value: 'stamina'
        },
        {
          text: 'Energy',
          icon: Energy,
          value: 'energy'
        },
        {
          text: 'Mood',
          icon: Mood,
          value: 'mood'
        },
        {
          text: 'Detox',
          icon: Detox,
          value: 'detox'
        },
        {
          text: 'Gut health',
          icon: GutHealth,
          value: 'gut_health'
        },
        {
          text: 'Antioxidants',
          icon: Antioxidants,
          value: 'antioxidants'
        },
        {
          text: 'Body builder',
          icon: BodyBuilder,
          value: 'body_builder'
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
