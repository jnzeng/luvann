<template lang="pug">
  .splash.page
    section.hero.is-fullheight
      .hero-body
        .container
          img.logo(
            src="@/assets/logo.png",
            alt="LUVANN")
          router-link.enter-button(to="/landing") Enter
</template>

<script>
export default {
  //
}
</script>

<style lang="scss" scoped>
  $space: 3rem;

  .page {
    min-height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
  }

  $drop: rgba(255, 255, 255, 0.5);

  .hero {
    background-image: url('/static/cover.jpg');
    background-size: cover;
  }

  .hero .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero .logo {
    height: 1.5em;
    margin-bottom: $space / 2;
    // box-shadow: 0 0 50px rgba(255, 255, 255, 0.4);
    // background-color: rgba(255, 255, 255, 0.5);
  }

  .hero .enter-button {
    $color: #fff;

    margin-top: $space / 2;

    color: $color;
    border: 2px $color solid;
    border-radius: 200px;
    padding: 4px 40px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .page--head {
    //
  }

  .page--body {
    flex-grow: 1;
  }

  .page--foot {
    //
  }
</style>
