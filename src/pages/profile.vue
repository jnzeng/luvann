<template lang="pug">
  layout
    .flex.col.center-center
      #hero-1.hero.is-medium
        .container
          .title Body Science + Ancient Healing Wisdom
          .content At Luvann, we use a body science calculator to analyze your body measurements, activity level, personal preferenc- es, and body goals to recommend your personal optimal levels of macronutrient daily needs and then we apply a holistic wellness lense using medicinal superfoods, adaptogenic herbs, and ancient healing remedies to help you achieve transformational results.

      #hero-2.hero.is-medium
        .container
          .title Your Daily Nutrition Breakdown
          .content Based on your current body data and fitness goals, we calculate your daily nutrition intake for you. So even if you don’t buy our product today, you can still use it as a reference to keep your body fit and healthy:

          nutrition-breakdown(:facts="facts")

      #hero-3.hero.is-large
        .container
          .title.has-text-left Nutrition Facts
          .content Whenever you decide to buy our protein powder, please take a look at your customized nutrition facts below. We recommend to mix one serving of powder in 6-8oz of milk or water and using ice-cold milk, soy milk, or almond milk. Free shipping for eligible products.
        .flex.row
          .page--body--left
            nutrition-facts(:facts="facts")
          .page--body--right
            img(src="/static/protein-vegan-beauty-no-shadow.png")
</template>

<script>
import ls from 'local-storage'
import calculate from '@/utils/calculate'
import NutritionFacts from '@/components/NutritionFacts'
import NutritionBreakdown from '@/components/NutritionBreakdown'
import Layout from '@/Layout'

export default {
  components: {
    Layout,
    NutritionFacts,
    NutritionBreakdown
  },

  data () {
    return {
      quiz: {},
      facts: {},
      user: {}
    }
  },

  created () {
    this.user = ls('user')
    this.quiz = ls('quiz')
    this.facts = this.calculate(this.quiz)
  },

  methods: {
    calculate
  }
}
</script>

<style lang="scss" scoped>
  .title {
    text-align: left;
  }

  .page--body--left {
    margin-right: 2rem;
  }
  .page--body--right {
    margin-left: 2rem;
  }

  .page--body--right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content {
    color: #888;
    font-size: 14px;
  }

  .container {
    width: 45rem;
    margin: 6rem 0;
  }

  #hero-2 {
    img {
      height: 15rem;
    }
  }

  #hero-3 {
    img {
      height: 500px;
    }
  }
</style>
