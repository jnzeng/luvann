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
import Blog from './icons/referral/blog.svg'
import Facebook from './icons/referral/facebook.svg'
import Friend from './icons/referral/friend.svg'
import Google from './icons/referral/google.svg'
import Instagram from './icons/referral/instagram.svg'

export default {
  mixins: [question],

  data () {
    return {
      title: 'How did you hear about us?',

      options: [
        {
          text: 'Instagram',
          icon: Instagram,
          value: 'instagram'
        },
        {
          text: 'Facebook',
          icon: Facebook,
          value: 'facebook'
        },
        {
          text: 'Google',
          icon: Google,
          value: 'google'
        },
        {
          text: 'Friend',
          icon: Friend,
          value: 'friend'
        },
        {
          text: 'Blog',
          icon: Blog,
          value: 'blog'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
