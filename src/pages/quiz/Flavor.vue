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
import Vanilla from './icons/flavor/vanilla.svg'
import Chocolate from './icons/flavor/chocolate.svg'
import Matcha from './icons/flavor/matcha.svg'
import Turmeric from './icons/flavor/turmeric.svg'
import Coffee from './icons/flavor/coffee.svg'
import Chai from './icons/flavor/chai.svg'

export default {
  mixins: [question],

  data () {
    return {
      title: 'What flavor do you prefer?',

      options: [
        {
          text: 'Vanilla',
          icon: Vanilla,
          value: 'vanilla'
        },
        {
          text: 'Chocolate',
          icon: Chocolate,
          value: 'chocolate'
        },
        {
          text: 'Matcha Green Tea',
          icon: Matcha,
          value: 'matcha'
        },
        {
          text: 'Turmeric',
          icon: Turmeric,
          value: 'turmeric'
        },
        {
          text: 'Coffee',
          icon: Coffee,
          value: 'coffee'
        },
        {
          text: 'Chai',
          icon: Chai,
          value: 'chai'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
