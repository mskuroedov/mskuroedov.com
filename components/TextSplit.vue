<template>
  <div class="text-splitter" :class="step">
    <div class="text-splitter__splitter"></div>
    <span class="text-splitter__base" :data-text="text">{{text}}</span>
    <span class="text-splitter__top">{{text}}</span>
    <span class="text-splitter__bottom">{{text}}</span>
  </div>
</template>

<script>
  export default {
    name: "TextSplit",
    props: {
      text: {
        type: String,
        required: true
      }
    },
    data(){
      return{
        step:'',
      }
    },
    mounted(){
      setTimeout(()=>{
        this.step = 'step-1';
      },300)
      setTimeout(()=>{
        this.step = 'step-2';
      },1900)
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/mixins.scss';
  @import '@/assets/themes.scss';

  .text-splitter {
    position: relative;
    /*color: black;*/
    display: inline-block;
    @include themify($themes) {
      color: themed('textColor');
    }
    &.step-1{
      .text-splitter__splitter{
        width: calc(100% + 20%);
      }
      .text-splitter__base{

        @include themify($themes){
          @include textGlitch("example-one", 50, themed('textColor'), themed('bgColor'), themed('activeColor'), invert(themed('activeColor')), 300, 90);
        }
      }
    }
    &.step-2{
      .text-splitter__splitter{
        width: calc(100% + 20%);
      }
      .text-splitter__base{
        opacity: 0;
      }
      .text-splitter__top{
        opacity: 1;
      }
      .text-splitter__bottom{
        opacity: 1;
      }
    }

    &__splitter {
      position: absolute;
      top: 7%;
      bottom: 0;
      left: -10%;
      width: 0;
      height: 8%;
      margin: auto;
      transition: width 1.6s;

      @include themify($themes) {
        background: themed('activeColor');
      }
      /*animation: width 1s ease-in forwards;*/
      z-index: 3;
    }

    &__base {
    }

    &__top {
      position: absolute;
      top: 0;
      left: -1%;
      /*-webkit-clip-path: inset(55% 0 0 0);*/
      clip-path: inset(55% 0 0 0);
      opacity: 0;
    }

    &__bottom {
      position: absolute;
      top: 0;
      left: 1%;
      /*-webkit-clip-path: inset(0 0 45% 0);*/
      clip-path: inset(0 0 45% 0);
      opacity: 0;
    }
  }


</style>
