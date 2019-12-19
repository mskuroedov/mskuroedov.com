<template>
  <div >

    <Landing1/>
    <Landing2/>
    <Landing3/>
    <div>Store theme {{theme()}}</div>
    <div>Store daytime {{time()}}</div>
    <div>
      <!--<font-awesome-icon :icon="['fab', 'envelope']"/>-->
      <!--<font-awesome-icon :icon="['fab', 'vk']"/>-->
      <!--<font-awesome-icon :icon="['fas', 'coffee']"/>-->
    </div>
    <div class="container">
      <div class="col-4">
          <PolygonSplash :fa="['fab', 'vk']"/>
      </div>
    </div>
  </div>
</template>

<script>
  import PolygonSplash from '@/components/animated/PolygonSplash'
  import Landing1 from '@/components/landing/Landing1'
  import Landing2 from '@/components/landing/Landing2'
  import Landing3 from '@/components/landing/Landing3'

  export default {
    name: "testing",
    components: {
      PolygonSplash,
      Landing1,
      Landing2,
      Landing3
    },
    data() {
      return {
        time() {
          let dt = new Date();

          return dt.getHours();
        },
        theme() {
          return this.$store.getters['getTheme'];
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
