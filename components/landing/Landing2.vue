<template>
  <div class="lb-2">
    <Octagone/>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h3 class="lb-2__title">Sick skills</h3>
        </div>
        <div class="col-12 ">
          <Skill_animation :text="'HTML'">
            <img src="@/static/icons/HTML5_logo.svg" alt="logo" class="sa__logo">
          </Skill_animation>
        </div>
        <div class="col-12 ">
          <Skill_animation :text="'CSS'">
            <img src="@/static/icons/CSS3_logo.svg" alt="logo" class="sa__logo">
          </Skill_animation>
        </div>
        <div class="col-12">
          <Skill_animation :text="'SCSS'">
            <img src="@/static/icons/sass-1.svg" alt="logo" class="sa__logo">
          </Skill_animation>
        </div>
        <div class="col-12">
          <Skill_animation :text="'VueJS'">
            <img src="@/static/icons/Vue.js_Logo.svg" alt="logo" class="sa__logo">
          </Skill_animation>
        </div>
        <div class="col-12">
          <Skill_animation :text="'Nuxt'">
            <img src="@/static/icons/nuxt-square.svg" alt="logo" class="sa__logo">
          </Skill_animation>
        </div>
        <div class="col-12">
          <Skill_animation :text="'Webpack'">
            <img src="@/static/icons/webpack_logo.svg" alt="logo" class="sa__logo">
          </Skill_animation>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Octagone from '@/components/animated/Octagone'
  import Skill_animation from '@/components/animated/Skill_animation'

  export default {
    name: "Landing2",
    components: {
      Octagone,
      Skill_animation
    }
  }
</script>

<style lang="scss">
  .lb-2 {
    position: relative;
    padding-bottom: 10rem;
    &__title {
      text-align: center;
      font-size: 5rem;
      font-weight: bold;
      letter-spacing: 16px;
      margin-bottom: 5rem;
    }
    .sa{
      margin: 3rem 0;
    }
    .octagone {
      margin: 0 auto;
      position: absolute;
      left: 0;
      top: 10%;
      transform: translateY(-50%) translateX(-50%) scale(1.5);
      /*@media(max-width: 767px) {*/
      /*transform: translateY(50%) translateX(50%) scale(2.5);*/
      /*top: auto;*/
      /*bottom: 0;*/
      /*}*/
    }
  }
</style>
