<template>
  <div :class="theme">
    <div class="app" >
      <!--<Navbar/>-->
      <main>
        <nuxt/>
      </main>
    </div>
  </div>
</template>


<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    components: {
      Navbar
    },
    async fetch({store}) {
      if (store.getters['getTheme'].length === 0) {
        await store.dispatch('getTheme')
      }
    },
    mounted(){
      //setup theme
      var dt = new Date();
      var time = dt.getHours();
      console.log(time);

      if(time > 6 && time < 16){
        this.$store.commit('setDayTheme','day');
      }else{
        this.$store.commit('setDayTheme','day');
      }
    },
    computed: {
      theme() {
        return this.$store.getters['getTheme'];
      }
    }
  }
</script>
<style lang="scss">
  @import '@/assets/themes.scss';

  .app {
    @include themify($themes) {
      color: themed('textColor');
      background: themed('bgColor');
    }
  }
</style>
