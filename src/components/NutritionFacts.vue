<template lang="pug">
  .nutrition-facts
    .line.l01 Nutrition Facts
    .line.l02 30 servings per container
    .line.l03
      .left Service size
      .right 1 scoop ({{ ai | round }}g)
    hr.bold
    //- .line.l04
    .line.l05
      .left
        .top Amount Per Serving
        .bot Calories
      .right {{ ap | round(0) }}
    hr
    .line.l06
      .left
      .right % Daily Value*
    .line.l07
      .left Total Fat {{ ag | round(0) }}g
      .right {{ ak | round(0) }}%
    .line.l08
      .left Saturated Fat 0g
      .right 0%
    .line.l09
      .left Sodium 140mg
      .right 6%
    .line.l10
      .left Total Carbohydrate {{ ah | round(0) }}mg
      .right {{ al | round(0) }}%
    .line.l11
      .left Dietary Fiber 2g
      .right 7%
    .line.l12 Protein {{ af | round(0) }}g
    hr.bold
    .line.l13
      .left Vitamin D 0mcg
      .right 0%
    .line.l14
      .left Iron 2.528mg
      .right 14%
    .line.l15 {{ as | humanize }}
    .line.l16 {{ ar | humanize }}
    .line.l17 {{ aq | humanize }}
    hr.bold
    .line.l18 *Percent Daily Values are based on 2,000 calorie diet
</template>

<script>
import {capitalize} from 'lodash'

export default {
  props: {
    facts: {
      type: Object,
      required: true,
      default () {
        return {}
      }
    }
  },

  filters: {
    round (val, len = 2) {
      return val.toFixed(len)
    },
    humanize (val) {
      return val.split('_').map(capitalize).join(' ')
    }
  },

  data () {
    return {
      ai: this.facts.total_grams_per_serving || 'AI',
      ap: this.facts.total_calories_per_serving || 'AP',
      ag: this.facts.fat_grams_per_serving || 'AG',
      ak: this.facts.fat_daily_value || 'AK',
      ah: this.facts.carb_grams_per_serving || 'AH',
      al: this.facts.carb_daily_value || 'AL',
      af: this.facts.protein_grams_per_serving || 'AF',
      as: this.facts.custom_ingredients.decisionTree || 'AS',
      ar: this.facts.flavor || 'AR',
      aq: this.facts.vegan_whey || 'AQ'
    }
  }
}
</script>

<style lang="scss" scoped>
  .nutrition-facts {
    color: #000;
    border: 1px #000 solid;
    width: 22rem;
    padding: 10px;
  }
  hr {
    height: 6px;
    background-color: #000;
    padding: 0;
    margin: 0;
  }
  hr.bold {
    height: 14px;
  }
  .line {
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .l01 {
    font-family: 'Roboto';
    font-weight: 900;
    font-size: 3rem;
    line-height: 1em;
  }
  .l02 {
    font-weight: 300;
  }
  .l03 {
    .left {
      font-size: 1.1rem;
    }
  }
  .l04 {
    font-size: 0.9rem;
  }
  .l05 {
    .left .top {
      font-size: 0.9rem;
      font-weight: 400;
    }
    .left .bot {
      font-size: 1.35rem;
    }
    .right {
      font-size: 2.9rem;
      line-height: 1em;
      bottom: -3px;
      position: relative;
    }
  }
  .l06 {}
  .l07 {}
  .l08 {
    margin-left: 26px;
  }
  .l09 {}
  .l10 {}
  .l11 {
    margin-left: 26px;
  }
  .l12 {}
  .l13 {}
  .l14 {}
  .l15 {}
  .l16 {}
  .l17 {}
  .l18 {}

  .l07,
  .l08,
  .l09,
  .l10,
  .l11,
  .l12,
  .l14,
  .l15,
  .l16,
  .l17, {
    border-top: 1px #000 solid;
  }
</style>
