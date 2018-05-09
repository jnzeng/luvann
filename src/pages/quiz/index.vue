<template lang="pug">
  .quiz.page
    .page--head
      .page--head--left
        span.delete.m-sm(@click="home")

      .page--head--center
        .subtitle.brand
          img.logo(
            src="@/assets/logo.png",
            alt="LUVANN")

      .page--head--right
        span.m-sm

    .page--body
      component(
        :is="page",
        @answer="answer",
        :value="answers[page]"
        @next="next")

    .page--foot.is-unselectable
      a.back-button.is-default(
        @click="back") Back
      a.next-button.is-info(
        @click="next") Next
</template>

<script>
import Intro from './Intro'
import Gender from './Gender'
import Age from './Age'
import Height from './Height'
import Weight from './Weight'
import Goal from './Goal'
import Activity from './Activity'
import Exercise from './Exercise'
import Meals from './Meals'
import Consume from './Consume'
import Vegan from './Vegan'
import Timing from './Timing'
import Benefits from './Benefits'
import Flavor from './Flavor'
import Sweetener from './Sweetener'
import Referral from './Referral'
import ls from 'local-storage'

export default {
  name: 'QuizContainer',

  components: {
    Intro,
    Gender,
    Age,
    Height,
    Weight,
    Goal,
    Activity,
    Exercise,
    Meals,
    Consume,
    Vegan,
    Timing,
    Benefits,
    Flavor,
    Sweetener,
    Referral
  },

  data () {
    return {
      step: 0,

      pages: [
        'intro',
        'gender',
        'age',
        'height',
        'weight',
        'goal',
        'activity',
        'exercise',
        'meals',
        'consume',
        'vegan',
        'timing',
        'benefits',
        'flavor',
        'sweetener',
        'referral'
      ],

      answers: {
        gender: null,
        age: null,
        height: null,
        weight: null,
        goal: null,
        activity: null,
        exercise: null,
        meals: null,
        consume: null,
        vegan: null,
        timing: null,
        benefits: null,
        flavor: null,
        sweetener: null,
        referral: null
      }
    }
  },

  computed: {
    page () {
      return this.pages[this.step]
    },

    progress () {
      const p = 100 / this.pages.length * this.step
      return p.toFixed(0)
    },

    styles () {
      const progress = {
        width: `${this.progress}%`
      }

      return {
        progress
      }
    }
  },

  methods: {
    home () {
      this.step = 0
      this.$router.push('/landing')
    },

    next () {
      if (this.step < this.pages.length - 1) {
        this.step++
      } else {
        this.$router.push('/register')
      }
    },

    back () {
      if (this.step > 0) {
        this.step--
      }
    },

    answer (val, key) {
      key = key || this.page
      this.answers[key] = val
      ls('quiz', this.answers)
    }
  }
}
</script>

<style lang="scss" scoped>
  .page {
    height: 100vh;
    width: 100vw;
    max-height: 100vh;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
  }

  .page--head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-height: 4rem;
  }

  .page--head--left {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 8rem;
  }
  .page--head--center {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .page--head--right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 8rem;
  }

  .page--body {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .page--foot {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 10px;
    min-height: 8rem;
  }

  .logo {
    height: 0.85rem;
  }

  .next-button, .back-button {
    border: 2px #000 solid;
    border-radius: 3px;
    height: 3rem;
    width: 8rem;
    margin: 0 5px;
    color: #000;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    text-transform: uppercase;
    font-size: 11px;
  }

  .next-button {
    background-color: var(--color-blue);
  }

  .back-button {
    //
  }

  .page--progress-container {
    background-color: #eee;
    height: 5px;
  }

  .page--progress {
    background-color: #bca;
    height: 5px;
  }
</style>
