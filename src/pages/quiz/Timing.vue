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
import Afternoon from './icons/timing/afternoon.svg'
import Breakfast from './icons/timing/breakfast.svg'
import Dinner from './icons/timing/dinner.svg'
import Lunch from './icons/timing/lunch.svg'
import Midmorning from './icons/timing/midmorning.svg'
import PostWorkout from './icons/timing/post-workout.svg'
import PreWorkout from './icons/timing/pre-workout.svg'

export default {
  mixins: [question],

  data () {
    return {
      title: 'When do you normally have it?',

      key: 'when_to_take',

      options: [
        {
          text: 'Breakfast',
          icon: Breakfast,
          value: 'breakfast'
        },
        {
          text: 'Midmorning',
          icon: Midmorning,
          value: 'midmorning'
        },
        {
          text: 'Lunch',
          icon: Lunch,
          value: 'lunch'
        },
        {
          text: 'Afternoon',
          icon: Afternoon,
          value: 'afternoon'
        },
        {
          text: 'Dinner',
          icon: Dinner,
          value: 'dinner'
        },
        {
          text: 'Before exercises',
          icon: PreWorkout,
          value: 'before_exercise'
        },
        {
          text: 'After exercises',
          icon: PostWorkout,
          value: 'after_exercise'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
