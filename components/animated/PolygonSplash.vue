<template>
  <div class="root" v-observe-visibility="vis" :class="appearClass">

    <font-awesome-icon :icon="fa"/>
    <svg version="1.1" class="splash"
         x="0px" y="0px" viewBox="0 0 398.1 459.7"
         style="enable-background:new 0 0 398.1 459.7;">
    <linearGradient id="lin" gradientUnits="userSpaceOnUse" x1="95.9525" y1="-4.4878" x2="307.3137" y2="475.8786">
	   <stop offset="0" style=""/>
      <stop offset="0.5" style=""/>
      <stop offset="1" style=""/>
    </linearGradient>
      <polygon class="st st1" points="398.1,344.8 398.1,114.9 199.1,0 0,114.9 0,344.8 199.1,459.7 "/>
      <polygon class="st st2" points="398.1,344.8 398.1,114.9 199.1,0 0,114.9 0,344.8 199.1,459.7 "/>
      <polygon class="st st3" points="398.1,344.8 398.1,114.9 199.1,0 0,114.9 0,344.8 199.1,459.7 "/>
      <polygon class="st st4" points="398.1,344.8 398.1,114.9 199.1,0 0,114.9 0,344.8 199.1,459.7 "/>
      <polygon class="st st5" points="398.1,344.8 398.1,114.9 199.1,0 0,114.9 0,344.8 199.1,459.7 "/>
      <polygon class="st st6" points="398.1,344.8 398.1,114.9 199.1,0 0,114.9 0,344.8 199.1,459.7 "/>
      <polygon class="st st7" points="398.1,344.8 398.1,114.9 199.1,0 0,114.9 0,344.8 199.1,459.7 "/>
      <polygon class="st st8" points="398.1,344.8 398.1,114.9 199.1,0 0,114.9 0,344.8 199.1,459.7 "/>
      <polygon class="st st9" points="398.1,344.8 398.1,114.9 199.1,0 0,114.9 0,344.8 199.1,459.7 "/>
  </svg>
  </div>
</template>

<script>
  export default {
    name: "PolygonSplash",
    data() {
      return {
        appearClass: ''
      }
    },
    props:{
      fa:{
        default:[]
      }
    },
    methods: {
      vis(isVisible, entry) {
        isVisible ? this.appearClass = 'expand' : this.appearClass = '';
        // console.log(isVisible)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/themes.scss';

  .root {
    position: relative;
    @media(max-width: 1024px) {
      .svg-inline--fa {
        font-size: 1.8rem;
      }
      &.expand {

        .svg-inline--fa {
          font-size: 2rem;
        }

        .splash {

          polygon {
            &:nth-of-type(1) {
              transform: scale(0.15) translate(0, -160%);

            }

            &:nth-of-type(2) {
              transform: scale(0.15) translate(0, 160%);

            }

            &:nth-of-type(3) {
              transform: scale(.15) translate(-110%, 0);
            }

            &:nth-of-type(4) {

              transform: scale(.15) translate(110%, 0);

            }

            &:nth-of-type(5) {
              transform: scale(.15) translate(-55%, 80%);

            }

            &:nth-of-type(6) {
              transform: scale(.15) translate(55%, 80%);

            }

            &:nth-of-type(7) {
              transform: scale(.15) translate(-55%, -80%);

            }

            &:nth-of-type(8) {
              transform: scale(.15) translate(55%, -80%);

            }

            &:nth-of-type(9) {
              transform: scale(.15) translate(0, 0);

            }
          }
        }
      }
    }

    @media(min-width: 1024.1px) {
      &:hover {
        .svg-inline--fa {
          font-size: 2.5rem;
        }
            .st1 {
              transform:
                scale(0.15)
                translate(0, -160%);
            }
            .st2 {
              transform:
                scale(0.15)
                translate(0, 160%);
            }
            .st3 {
              transform:
                scale(.15)
                translate(-110%, 0);
            }
            .st4 {
              transform:
                scale(.15)
                translate(110%, 0);
            }
            .st5 {
              transform:
                scale(.15)
                translate(-55%, 80%);
            }
            .st6 {
              transform:
                scale(.15)
                translate(55%, 80%);
            }
            .st7 {
              transform:
                scale(.15)
                translate(-55%, -80%);
            }
            .st8 {
              transform:
                scale(.15)
                translate(55%, -80%);
            }
            .st9 {
              transform:
                scale(.15)
                translate(0, 0);
            }
        }

    }
  }

  .splash {
    width: 100%;
    height: auto;

    
    polygon {
      fill: url(#lin);
      transform: scale(.15) translate(0,0);
      transform-origin: center;
      @media(max-width: 1024px){

        -webkit-transition: transform 1s;
        -moz-transition: transform 1s;
        -ms-transition: transform 1s;
        -o-transition: transform 1s;
        transition: transform 1s;
      }
      @media(min-width: 1024.1px){
        -webkit-transition: transform .2s;
        -moz-transition: transform .2s;
        -ms-transition: transform .2s;
        -o-transition: transform .2s;
        transition: transform .2s;

      }
    }

    linearGradient {
      stop {
        @include themify($themes) {
          &:nth-of-type(1) {
            stop-color: themed(gradientStop1);
          }
          &:nth-of-type(2) {
            stop-color: themed(gradientStop2);
          }
          &:nth-of-type(3) {
            stop-color: themed(gradientStop3);
          }
        }
      }
    }
  }
  .svg-inline--fa {
    transition: all .3s;
    position: absolute;
    font-size: 1.2rem;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    margin: auto;
    color: white;


  }
</style>
