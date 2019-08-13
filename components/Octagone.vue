<template>
  <svg version="1.1" :class="animationStep" class="octagone"
       x="0px" y="0px" width="400px" height="1211.5px" viewBox="0 0 1049.2 1211.5"
       style="enable-background:new 0 0 1049.2 1211.5;" xml:space="preserve">

      <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="0" y1="605.7735" x2="1049.2305" y2="605.7735">
        <stop offset="0" />
        <stop offset="1" />
      </linearGradient>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    <polygon class="st" points="1044.2,905.8 1044.2,305.8 524.6,5.8 5,305.8 5,905.8 524.6,1205.8 "/>
    </svg>
</template>

<script>
  export default {
    name: "Octagone",
    data() {
      return {
        animationStep: ''
      }
    },
    mounted() {
      setTimeout(() => {
        this.animationStep = 'step-1'
      }, 400);
      setTimeout(() => {
        this.animationStep = 'step-2'

      }, 2300)
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/themes.scss';

  .octagone {
    height: 100vh;

    @media(max-width: 767px){
      height: 25vh;
    }
    linearGradient{
      stop{
        &:first-of-type{
          @include themify($themes) {
            stop-color:themed('activeColor');
          }
        }
        &:last-of-type{
          @include themify($themes) {
            stop-color:darken(themed('activeColor'),30);
          }
        }
      }
    }
    .st {
      fill: none;
      stroke: url(#SVGID_1_);
      stroke-width: 3;
      stroke-miterlimit: 3;
      transform-origin: center;
      transition-timing-function: ease-in;
      transition: 0.6s;
    }
    &.step-1{
      @for $i from 0 through 24 {
        polygon:nth-of-type(#{$i}) {
          transform:
            scale(1-$i*0.019);
          stroke-width: 3+$i*0.019;
          stroke-miterlimit: 3+$i*0.019;
        }
      }
    }
    &.step-2{
      @for $i from 0 through 24 {
        polygon:nth-of-type(#{$i}) {
          transform:
            scale(1-$i*0.04)
            rotate(-$i*4.5deg);
          stroke-width: 3+$i*0.2;
          stroke-miterlimit: 3+$i*0.2;

        }
      }
    }
  }

  div{
    /*scale(0.96) rotate(-4deg) translateX(0)*/
    /*rotate(-$i*5deg);*/
  }
</style>
