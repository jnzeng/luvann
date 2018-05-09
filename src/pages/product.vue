<template lang="pug">
  layout
    #hero-1.hero
      .hero-body
        .container.is-fluid
          img#img-01(src="/static/Protein_VEGANBeauty.png")

    .container
      .title The Luvann Fit System
      .content
        p If you are looking to take our protein for weight loss, we recommend you do our full system along with our hunger-buster beauty and detox plant-based booster mylks as part of our program to motivate your metabolism and feel energized throughout your day.
      .content
        p The Luvann Fit System works by replacing two meals with our protein blends, have two daily plant-based booster mylks as snacks, and eat one sensible meal of your choice. Our plant-based booster mylks formulas are currently standard and uncustomizable.

    .container
      .title Shop Protein &amp; Booster Mylks
      .content
        p 1 for $12: 7 servings
        p 2 for $20: 14 servings
        p 4 for $36: 28 servings

    .container
      .title Shop Luvann Fit System
      .content
        .m-t-md
          .is-bold One-week Trial $36:
          p 14 servings of personalized protein meal replacement with 25 grams of protein per serving
          p 14 servings of daily detox and beauty booster mylks with 10 grams of protein per serving
        .m-t-md
          .is-bold Two-week Commitment $68:
          p 28 servings of personalized protein meal replacement with 25 grams of protein per serving

          p 28 servings of daily detox and beauty booster mylks with 10 grams of protein per serving

        .m-t-lg
          p We offer convenient small packaging with simple pricing to give you flexibility and variety. Prices do not include shipping fees.

    .container
      .title Other Product (Coming Soon)

    #hero-2.hero
      .tile.is-ancestor
        .tile.is-vertical.is-8
          .tile.is-parent
            article.tile.is-child.tile-01
              img(src="/static/product/JalJeera2.jpg")
        .tile.is-parent.is-vertical
          article.tile.is-child.tile-02
            img(src="/static/product/Tepache.jpg")
          article.tile.is-child.tile-03
            img(src="/static/product/OilPulling2.jpg")

      .tile.is-ancestor
        .tile.is-parent.is-6
          article.tile.is-child.tile-04
            img(src="/static/product/Oatmeal2.jpg")

        .tile.is-parent.is-6
          article.tile.is-child.tile-05
            img(src="/static/product/Tamil-Molaga2.jpg")
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
    margin: 5rem auto;
    width: 45rem;
    font-size: 14px;
  }
  .content {
    color: #999;
  }

  #hero-1 {
    padding: 0 1rem;
    height: 900px;
    margin-bottom: 3rem;

    .container.is-fluid {
      width: initial;
      margin-left: 32px;
      margin-right: 32px;
    }

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

  .is-bold {
    font-weight: 400;
  }

  .content p {
    font-weight: 300;
    margin-bottom: 5px;
  }

  .title {
    font-size: 24px;
  }

  #hero-2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  #hero-2 > .tile.is-ancestor {
    margin-left: 10px;
    margin-right: 10px;
  }

  .tile-01 {
    background-color: #ececec;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }
  .tile-02 {
    background-color: #FAD8DE;
  }
  .tile-03 {
    background-color: #A5BAEE;
  }
  .tile-04 {
    background-color: #DDA8E3;
  }
  .tile-05 {
    background-color: #FEF2A5;
  }
</style>
