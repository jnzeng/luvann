<template lang="pug">
  layout
    #hero-1.hero
      .hero-body
        .container.is-fluid
          img#img-01(src="/static/Protein_VEGANBeauty.png")

    #hero-2.hero.is-medium
      .hero-body
        .title Made Just For You
        .subtitle Experience the power of food as medicine and transform your body
        router-link.button.m-t-md(to="/quiz") Get Started

    #hero-3.hero
      .hero-body
        .hero--left
          .media
            img(src="/static/video-placeholder.png")

          .title Our Mission
          p Our mission is to pair cutting-edge food science and ancient healing wisdom to deliver nutrient dense superfoods to transform your life. We specialize on helping you personalize your nutrition to make it work for you.our mission
          router-link.button.m-t-xl.m-b-xl(to="/mission") Learn More

        .hero--right
          .media
            img(src="/static/product.gif")

          .title Our Product
          p Luvann´s biologically active nutritional foods are designed to help individuals reach their weight and health goals with formulas designed to help shed excess weight, increase focus and energy, improve skin clarity, boost immune system, and eliminate bloat.our product.
          router-link.button.m-t-xl.m-b-xl(to="product") Learn More

    #hero-4.hero.parallax
      .hero-body
        .content
          .title Personalize your protein, transform your life
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
  .title {
    text-align: left;
  }

  p {
    color: #888;
  }

  .hero .hero-body .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  #hero-1 {
    padding: 0 1rem;
    height: 900px;

    .hero-body {
      background-color: #eee;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    img {
      max-width: 50rem;
      transform: translateX(-22%); // compensate for shadow
    }
  }

  #hero-2 {
    * {
      text-align: center;
    }

    .hero-body {
      background-color: #fff;
    }
    .title {
      font-size: 32px;
      text-transform: uppercase;
      font-weight: 400;
      margin-bottom: 4rem;
    }

    .subtitle {
      font-familiy: 'Roboto Condensed';
      font-size: 16px;
      text-transform: uppercase;
      font-weight: 300;
      color: #888;
    }
  }

  #hero-3 {
    .hero-body {
      display: flex;
      flex-direction: row;
      justify-content: center;
      padding: 0;
    }

    .media {
      margin-bottom: 3rem;
    }

    .title {
      font-size: 22px;
    }

    p {
      font-size: 14px;
      width: 78%;
    }

    .hero--left, .hero--right {
      $length: calc(50vw - 5 * 15px);
      margin: 15px;
      width: $length;
      min-width: $length;
      max-width: $length;

      .media, .media img {
        height: $length;
        min-height: $length;
        max-height: $length;
        height: 100%;
        width: 100%;
      }
    }

    .hero--left .media {
      background-color: #E0EDEB;
    }
    .hero--right .media {
      background-color: #FDF5BF;
    }
  }

  #hero-4 {
    .hero-body {
      background-image: url('/static/pattern.png');
      background-size: cover;
      height: 700px;
      margin: 1rem;
      padding: 0;
    }

    .content {
      background-color: rgba(240, 240, 240, 0.8);
      margin: 0;
      height: 100%;
      width: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .title {
      font-size: 28px;
    }
  }
</style>
