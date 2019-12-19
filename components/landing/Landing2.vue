<template>
  <div class="lb-2">
    <!--<Octagone/>-->
    <div class="slide-show">
      <div class="slide-show__container">
        <img src="@/static/icons/HTML5_logo.svg" alt="logo" class="slide-show__item"
             :class="{'--show':showImages.includes('e1')}">
        <img src="@/static/icons/CSS3_logo.svg" alt="logo" class="slide-show__item"
             :class="{'--show':showImages.includes('e2')}">
        <img src="@/static/icons/sass-1.svg" alt="logo" class="slide-show__item"
             :class="{'--show':showImages.includes('e3')}">
        <img src="@/static/icons/Vue.js_Logo.svg" alt="logo" class="slide-show__item"
             :class="{'--show':showImages.includes('e4')}">
        <img src="@/static/icons/nuxt-square.svg" alt="logo" class="slide-show__item"
             :class="{'--show':showImages.includes('e5')}">
        <img src="@/static/icons/webpack_logo.svg" alt="logo" class="slide-show__item"
             :class="{'--show':showImages.includes('e6')}">
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h3 class="lb-2__title">My skills</h3>
        </div>
        <Skill_animation ref="e1" :text="'HTML'"
                         :class="{ '--hover': hover_id && hover_id === 'HTML','--not-hover':hover_id && hover_id !== 'HTML'}"
                         @mouseenter="setHoverEl" @mouseleave="setHoverEl">
          <img src="@/static/icons/HTML5_logo.svg" alt="logo" class="sa__logo">
        </Skill_animation>
        <Skill_animation ref="e2" :text="'CSS'"
                         :class="{ '--hover': hover_id && hover_id === 'CSS','--not-hover':hover_id && hover_id !== 'CSS'}"
                         @mouseenter="setHoverEl('CSS')" @mouseleave="setHoverEl(null)">
          <img src="@/static/icons/CSS3_logo.svg" alt="logo" class="sa__logo">
        </Skill_animation>
        <Skill_animation ref="e3" :text="'SCSS'"
                         :class="{ '--hover': hover_id && hover_id === 'SCSS','--not-hover':hover_id && hover_id !== 'SCSS'}"
                         @mouseenter="setHoverEl('SCSS')" @mouseleave="setHoverEl(null)">
          <img src="@/static/icons/sass-1.svg" alt="logo" class="sa__logo">
        </Skill_animation>
        <Skill_animation ref="e4" :text="'VueJS'"
                         :class="{ '--hover': hover_id && hover_id === 'Vue','--not-hover':hover_id && hover_id !== 'Vue'}"
                         @mouseenter="setHoverEl('Vue')" @mouseleave="setHoverEl(null)">
          <img src="@/static/icons/Vue.js_Logo.svg" alt="logo" class="sa__logo">
        </Skill_animation>
        <Skill_animation ref="e5" :text="'Nuxt'"
                         :class="{ '--hover': hover_id && hover_id === 'Nuxt','--not-hover':hover_id && hover_id !== 'Nuxt'}"
                         @mouseenter="setHoverEl('Nuxt')" @mouseleave="setHoverEl(null)">
          <img src="@/static/icons/nuxt-square.svg" alt="logo" class="sa__logo">
        </Skill_animation>
        <Skill_animation ref="e6" :text="'Webpack'"
                         :class="{ '--hover': hover_id && hover_id === 'Webpack','--not-hover':hover_id && hover_id !=='Webpack'}"
                         @mouseenter="setHoverEl('Webpack')" @mouseleave="setHoverEl(null)">
          <img src="@/static/icons/webpack_logo.svg" alt="logo" class="sa__logo">
        </Skill_animation>
      </div>
    </div>
  </div>
</template>

<script>
  import Octagone from '@/components/animated/Octagone'
  import Skill_animation from '@/components/animated/Skill_animation'

  export default {
    name: "Landing2",
    data() {
      return {
        hover_id: null,
        showImages: [],
        images: ['e1', 'e2', 'e3', 'e4', 'e5', 'e6']
      }
    },
    components: {
      Octagone,
      Skill_animation
    },
    mounted() {
      document.addEventListener('scroll', this.spySkills);
    },
    beforeDestroy() {
      document.removeEventListener('scroll', this.spySkills);
    },
    methods: {
      spySkills() {
        // console.log(this.$refs['e1'].$el);
        let scrolled = document.documentElement.clientHeight;
        this.images.forEach((item, i) => {
          let rect = this.$refs[item].$el.getBoundingClientRect(),
            top = rect.top;

          // if (item === 'e6') {
          //   console.log('top:' + top)
          //   console.log('ch:' + scrolled)
          // }
          if (top < scrolled/2) {
            if(this.showImages.indexOf(item) === -1){
              this.showImages.push(item);
            }
          } else {
            this.showImages.splice(i, 1)
          }
        })
      },
      setHoverEl(el_id) {
        console.log('el_id')
        this.hover_id = el_id;
      }
    }
  }
</script>

<style lang="scss">
  @import '@/assets/themes.scss';
  .lb-2 {
    position: relative;
    padding-bottom: 15rem;

    &__title {
      text-align: center;
      font-size: 5rem;
      font-weight: bold;
      letter-spacing: 16px;
      margin-bottom: 5rem;
    }

    .sa {
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

    .slide-show {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;

      &__container {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
      }

      &__item {
        height: auto;
        transition: width .2s .3s,opacity .3s,transform .3s;
        opacity: 0;
        transform: translateX(150%);
        width: 0;

        @include themify($themes) {
          filter: themed('filter');
        }
        &.--show {
          max-width: 16%;
          width: 16%;
          /*-ms-flex-preferred-size: 0;*/
          /*flex-basis: 0;*/
          /*-ms-flex-positive: 1;*/
          /*-webkit-box-flex: 1;*/
          /*flex-grow: 1;*/
          /*max-width: 100%;*/
          opacity: 1;
          transform: translateX(0);
          transition: width 0s,opacity .3s,transform .3s;

        }
      }
    }


    @media(max-width: 767.98px){
      .lb-2__title{
        font-size: 3rem;
      }
      .sa{
        margin: 2rem 0;
      }
    }
  }
</style>
