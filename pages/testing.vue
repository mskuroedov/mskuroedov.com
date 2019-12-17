<template>
  <div class="container-fluid">
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

  export default {
    name: "testing",
    components: {
      PolygonSplash
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

<style scoped lang="scss">

</style>
