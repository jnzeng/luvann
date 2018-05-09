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
import maleIcon from './icons/gender/male.svg'
import femaleIcon from './icons/gender/female.svg'

export default {
  mixins: [question],

  data () {
    return {
      title: 'Gender',

      options: [
        {
          text: 'Male',
          icon: maleIcon,
          value: 'm'
        },
        {
          text: 'Female',
          icon: femaleIcon,
          value: 'f'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .options {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  input.radio {
    display: none;
  }
  label.radio {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  label.radio .icon-button {
    border-radius: 50%;
    padding: 5px;
  }

  label.radio.active .icon-button {
    background-color: var(--color-blue);
  }

  .icon-button img {
    max-height: 5rem;
    max-width: 5rem;
  }
</style>
