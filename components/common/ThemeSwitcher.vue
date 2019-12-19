<template>
  <div class="ts" @click="switchTheme">
    <div class="ts__indicator" :class="'--'+theme" >
    </div>
    <div class="ts__descriptor" :class="'--'+theme" >
      <!--<div>{{theme}}</div>-->
      <font-awesome-icon :icon="['fas', 'sun']" v-if="theme === 'day'"/>
      <font-awesome-icon :icon="['fas', 'moon']" v-else/>
    </div>

  </div>
</template>

<script>
  export default {
    name: "ThemeSwitcher",
    computed: {
      theme() {
        return this.$store.getters['getTheme'];
      }
    },
    methods:{
      switchTheme(){
        if(this.theme === 'day'){
          this.$store.commit('setDayTheme','night');
        }else{
          this.$store.commit('setDayTheme','day');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/themes.scss';
.ts{
  position: relative;
  width: 60px;
  height: 32px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  @include themify($themes) {
    background: themed('textColor');
  }
  &__indicator{
    position: absolute;
    top: 3px;
    width: 26px;
    height: 26px;
    border-radius: 100%;
    transition: all .2s;
    @include themify($themes) {
      background: themed('bgColor');
    }

    &.--day{
      left: 3px;
    }
    &.--night{
      right: 3px;
    }

  }
  &__descriptor{
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    @include themify($themes) {
      color: themed('bgColor');
    }
    &.--day{
      position: absolute;
      right: 2px;

    }
    &.--night{
      position: absolute;
      left: 2px;
    }
  }
}
</style>
