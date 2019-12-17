<template>
  <div>
    <Landing1/>
    <Landing2/>
    <Landing3/>
    <!--<DevelopmentBlock/>-->
  </div>
</template>

<script>
  import DevelopmentBlock from '@/components/DevelopmentBlock'
  import Landing1 from '@/components/landing/Landing1'
  import Landing2 from '@/components/landing/Landing2'
  import Landing3 from '@/components/landing/Landing3'

  export default {
    components: {
      DevelopmentBlock,
      Landing1,
      Landing2,
      Landing3
    },
    data(){
      return{
        a: null,
        key:''
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
        this.$store.commit('setDayTheme','night');
      }
    },
    watch:{
      // key(val){
      //   if(val === 'fuck'){
      //     console.log("GOGOGOG")
      //   }else{
      //     if(!['fuck'].includes(val)){
      //       console.log('cleared')
      //     }else{
      //
      //     }
      //   }
      // }
    },
    computed:{
    },
    methods:{
    },

  }
</script>

<style lang="scss">
</style>
