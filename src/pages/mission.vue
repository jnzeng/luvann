<template lang="pug">
  layout
    .flex.col.center-center
      #hero-1.hero.is-medium
        .container.is-fluid
          img#img-01(src="/static/mission-strawberry.jpg")
        .container
          .title Start Feeling And Looking Good
          .content Our mission is to pair cutting-edge food science and ancient healing wisdom to deliver nutrient dense medicinal superfoods to transform your life. We specialize on helping you personalize your nutrition to make it work for you.

        .container
          .title Functional Medicinal Nutrition
          .content Luvann's biologically active nutritional delicious foods are designed to help individuals reach their weight and health goals with formulas designed to help shed excess weight, increase focus and energy, improve skin clarity, boost immune system, and eliminate bloat.
          .content Luvann blends are plant-based, organic, raw, plant-based, dairy-free, gluten-free, non-gmo, no refined sugars and are encapsulated with phytochemicals, fiber and other nutrients to work synergistically with your body. Our blends are 100% customizable and can be personalized to also include natural collagen supplements and organic grass-fed bone broth to improve bone and skin health.

        .container
          .title Join the Luvann Clan
          .content Experience medicinal foods for inside out transformational change. Start creating the body you feel best in with powerful life changing plant nutrition that works synergistically in the body and deliver healthy gut probiotic bacteria, alkalizing superfood red and greens, digestion-supporting fiber, beauty and youth antioxidants, collagen support for inside out transformational change.

        .container.flex.center-center
          button.button.is-dark.is-outlined
            span Sign Up now

        .container
          .title Made just for you
          .content At Luvann we have realized that fitness and health goals are unique to each individual. That is why we believe in bringing the power of personalization to nutrition. Our bodies are all different, we digest macronutrients in different ways and not all one-size fits all proteins work for everyone. That is why we want to empower you to learn more about your body and nourish it in a way that works for you.

        .container
          .title Regenerative &amp; Biodynamic Farms
          .content We care about what goes into your body. We believe in using simple, few, and powerful nutrients and remedies to deliver results. Our ingredients are sourced from trusted suppliers and farmers using regenerative, biodynamic and sustainable agriculture practices to bring you high quality and effective organic superfoods that work synergistically with your body to optimize for best results.

        .container
          .title Food as medicine
          .content Our focus is at the nexus of cutting-edge nutrition science backed by numerous trials, ancient healing wisdom, and clean eating. We believe in the power of nutrition for body and mind. Your inner body and gut microbiome health radiates through your skin. Eating well means feeling and looking great. That is why we have paired our protein blends that have gone through a fermentation process with transformational nutrient-rich adaptogenic tonic herbs, superfoods, and medicinal plants for mood, focus, beauty, immunity, stamina, and energy added health benefits.
</template>

<script>
import Layout from '@/Layout'

export default {
  components: {
    Layout
  }
}
</script>

<style lang="scss" scoped>
  .container {
    margin: 3rem auto;
    width: 45rem;
    font-size: 14px;
  }
  .content {
    color: #999;
  }

  #hero-1 {
    .container.is-fluid {
      width: initial;
      margin-left: 32px;
      margin-right: 32px;
    }
  }
</style>
