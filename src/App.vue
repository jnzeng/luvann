<template lang="pug">
  #app
    router-view(@save="save")
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      quiz: {},
      user: {}
    }
  },

  methods: {
    save (key, val) {
      if (['quiz', 'user'].includes(key)) {
        this[key] = val
      }
    }
  }
}
</script>

<style lang="scss" src="./assets/app.scss"></style>
