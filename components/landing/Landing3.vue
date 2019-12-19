<template>
  <div class="lb-3">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h3 class="lb-3__title">My contacts</h3>
        </div>
        <div class="col-12">
          <div class="links row justify-content-center">
            <div class="col-12">
              <!--<p>You may contact me if you want! 😁⏬</p>-->
            </div>
            <div class="col-6 col-md-3 col-lg-3 col-xl-2">
              <nuxt-link to="mailto:mskuroedovjob@gmail.com" target="_blank" class="poly">
                <PolygonSplash :fa="['fas', 'envelope']"/>
              </nuxt-link>
            </div>
            <div class="col-6 col-md-3 col-lg-3 col-xl-2">
              <a href="https://t.me/mskuroedov" target="_blank" class="poly">
                <PolygonSplash :fa="['fab', 'telegram']"/>
              </a>
            </div>
            <div class="col-6 col-md-3 col-lg-3 col-xl-2">
              <a href="https://vk.com/mskuroedov" target="_blank" class="poly">
                <PolygonSplash :fa="['fab', 'vk']"/>
              </a>
            </div>
            <div class="col-6 col-md-3 col-lg-3 col-xl-2">
              <a href="https://www.instagram.com/mskuroedov/" target="_blank" class="poly">
                <PolygonSplash :fa="['fab', 'instagram']"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import PolygonSplash from '@/components/animated/PolygonSplash'
    export default {
        name: "Landing3",
      components:{
        PolygonSplash
      }
    }
</script>

<style scoped lang="scss">
  .lb-3{
    &__title {
      text-align: center;
      font-size: 5rem;
      font-weight: bold;
      letter-spacing: 16px;
      margin-bottom: 5rem;
    }
    .links {
      margin-top: 2rem;
      animation: sliderFromLeft 2s linear;

      p {
        margin-bottom: -1.5rem;
        font-weight: bold;
        font-size: 2rem;
      }

      @media(max-width: 767px) {
        p {
          font-size: 1.8rem;
          margin-bottom: 2.5rem;
        }
      }
      @media(max-width: 374px) {
        p {
          font-size: 1.8rem;
          margin-bottom: 2rem;
        }
      }
    }


    @media(max-width: 767.98px){
      .lb-3__title{
        font-size: 2.4rem;
        margin-bottom: 2rem;
        letter-spacing: 3px;
      }
      .sa{
        margin: 2rem 0;
      }
    }
  }
</style>
