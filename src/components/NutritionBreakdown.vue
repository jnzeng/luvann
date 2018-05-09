<template lang="pug">
  .nutrition-breakdown
    .left
      img(src="/static/pie.png")
    .right
      table.top
        thead
          tr
            th(style="border-bottom:0;")
            th Grams
            th(style="width:8rem;")
            th Calories
        tbody
          tr
            th Daily Protein Intake
            td {{ x | round(0) }}
            td
            td {{ ab | round(0) }}
          tr
            th Daily Fat Intake
            td {{ y | round(0) }}
            td
            td {{ ac | round(0) }}
          tr
            th Daily Carbohydrate Intake
            td {{ z | round(0) }}
            td
            td {{ ad | round(0) }}

      .flex.row.center-center(style="color:#aaa")
        span.is-size-1.m-r-sm &middot;
        span.is-size-1.m-r-sm &middot;
        span.is-size-1.m-r-sm &middot;

      table.bot
        tbody
          tr
            th Body Mass Index (BMI)
            td {{ q | round(0) }}
          tr
            th Body Fat (%)
            td {{ r * 100 | round(0) }}
          tr
            th Basal Metabolic Rate (BMR)
            td {{ u | round(0) }}
</template>

<script>
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
    }
  },

  data () {
    return {
      x: this.facts.protein_grams_per_day || 'X',
      y: this.facts.fat_grams_per_day || 'Y',
      z: this.facts.carb_grams_per_day || 'Z',
      ab: this.facts.protein_calories_per_day || 'AB',
      ac: this.facts.fat_calories_per_day || 'AC',
      ad: this.facts.carb_calories_per_day || 'AD',
      q: this.facts.bmi || 'Q',
      r: this.facts.body_fat || 'R',
      u: this.facts.bmr || 'U'
    }
  }
}
</script>

<style lang="scss" scoped>
  .nutrition-breakdown {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    color: #aaa;
  }
  img {
    margin-top: 3rem;
    height: 15rem;
  }

  table {
    // width: 380px;
  }

  thead th {
    border-bottom: 1px #aaa solid;
    text-align: center;
  }

  tbody th {
    text-align: left;
    width: 12rem;
  }

  th, td {
    color: #aaa;
    vertical-align: bottom;
    text-align: center;
    height: 3rem;
  }

  th {
    font-weight: 400;
    font-size: 14px;
  }

  .top thead th {
    padding: 0;
    margin: 0;
    padding-bottom: 0.5rem;
  }

  .top tbody td {
    padding: 0;
    margin: 0;
  }

  .bot td {
    padding-left: 6rem;
    text-align: left;
    width: 11rem;
  }
</style>
