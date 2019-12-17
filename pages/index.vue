<template>
  <div>
    <div class="welcome-block">
      <Octagone/>
      <div class="container-fluid">
        <h2><span class="sorry">Sorry,</span><br> this site is currently under
          <TextSplit text="development"/>
        </h2>
        <div class="links row">
          <div class="col-12">
            <p>You may contact me if you want! 😁⏬</p>
          </div>
          <div class="col-6 col-md-3 col-lg-2">
            <nuxt-link to="mailto:mskuroedovjob@gmail.com" target="_blank" class="poly">
              <PolygonSplash :fa="['fas', 'envelope']"/>
            </nuxt-link>
          </div>
          <div class="col-6 col-md-3 col-lg-2">
            <a href="https://t.me/mskuroedov" target="_blank" class="poly">
              <PolygonSplash :fa="['fab', 'telegram']"/>
            </a>
          </div>
          <div class="col-6 col-md-3 col-lg-2">
            <a href="https://vk.com/mskuroedov" target="_blank" class="poly">
              <PolygonSplash :fa="['fab', 'vk']"/>
            </a>
          </div>
          <div class="col-6 col-md-3 col-lg-2">
            <a href="https://www.instagram.com/mskuroedov/" target="_blank" class="poly">
              <PolygonSplash :fa="['fab', 'instagram']"/>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <Chacram/>
    </div>

  </div>
</template>

<script>
  import Octagone from '@/components/animated/Octagone'
  import BackPolygons from '@/components/animated/BackPolygons'
  import PolygonSplash from '@/components/animated/PolygonSplash'
  import TextSplit from '@/components/animated/TextSplit'
  import Chacram from '@/components/animated/Chacram'

  export default {
    components: {
      Octagone,
      TextSplit,
      BackPolygons,
      PolygonSplash,
      Chacram
    },
    data(){
      return{
        a: null,
        key:''
      }
    },
    mounted(){
      // document.addEventListener('keyup',this.secretEnter);
      //first init of vuex
      // console.log('nuxtServerInit');
      // var dt = new Date();
      // var time = dt.getHours();
      // console.log(time);
      //
      // if(time > 6 && time < 19){
      //   this.store.commit('setDayTheme','day');
      // }else{
      //   this.store.commit('setDayTheme','night');
      // }
    },
    watch:{
      key(val){
        if(val === 'fuck'){
          console.log("GOGOGOG")
        }else{
          if(!['fuck'].includes(val)){
            console.log('cleared')
          }else{

          }
        }
      }
    },
    computed:{
    },
    methods:{
      secretEnter(e){
        let letter = e.key;
        this.key += letter;
      }
    },

  }
</script>

<style lang="scss">
  @import '@/assets/themes.scss';

  .welcome-block {
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    padding-top: 10rem;

    @include themify($themes) {
      background: themed('bgColor');
      color: themed('textColor');
    }

    @media(max-width: 767px) {
      padding-top: 8rem;
      height:auto;
    }
    @media(min-width: 768px) and (max-width: 1024px) {
      padding-top: 23rem
    }


    h2 {
      font-size: 2.9rem;
      font-weight: bold;
      line-height: 1.8;

      .sorry {
        font-size: 9rem;
      }

      .text-splitter {
        margin-left: 2rem;
      }

      @media(max-width: 767px) {
        line-height: 1.2;
        font-size: 2.5rem;
        .sorry {
          font-size: 6rem;

        }
      }
      @media(max-width: 374px) {
        font-size: 2.1rem;
        line-height: 1.4;
        .sorry {
          font-size: 5rem;
        }
      }

      @media(min-width: 768px) and (max-width: 1024px) {
        font-size: 3.1rem;
      }
    }

    .octagone {
      margin: 0 auto;
      position: absolute;
      right: 0;
      top: 0;
      transform: translateY(-50%) translateX(50%) scale(2.5);
      /*@media(max-width: 767px) {*/
        /*transform: translateY(50%) translateX(50%) scale(2.5);*/
        /*top: auto;*/
        /*bottom: 0;*/
      /*}*/
    }

    .links{
      margin-top: 2rem;
      animation:sliderFromLeft 2s linear;
      p{
        margin-bottom: -1.5rem;
        font-weight: bold;
        font-size: 2rem;
      }
      @media(max-width:767px){
        p{
          font-size: 1.8rem;
          margin-bottom: 2.5rem;
        }
      }
      @media(max-width:374px){
        p{
          font-size: 1.8rem;
          margin-bottom: 2rem;
        }
      }
    }
  }
@keyframes slideFromLeft {
  0%{
    transform:translateX(-200%);
  }
  100%{
    transform:translateX(0);

  }
}
</style>
