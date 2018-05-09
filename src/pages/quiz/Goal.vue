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
import acceleratedWeightLoss from './icons/goal/accelerated-weight-loss.svg'
import normalWeightLoss from './icons/goal/normal-weight-loss.svg'
import maintain from './icons/goal/maintain.svg'
import gainMuscle from './icons/goal/gain-muscle.svg'

export default {
  mixins: [question],

  data () {
    return {
      title: 'Body Goal',
      options: [
        {
          text: 'Accelerated Weight loss',
          icon: acceleratedWeightLoss,
          value: 'accelerated_weight_loss'
        },
        {
          text: 'Normal \nWeight loss',
          icon: normalWeightLoss,
          value: 'normal_weight_loss'
        },
        {
          text: 'Maintain',
          icon: maintain,
          value: 'maintenance'
        },
        {
          text: 'Gain Muscle',
          icon: gainMuscle,
          value: 'gain_muscle'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
