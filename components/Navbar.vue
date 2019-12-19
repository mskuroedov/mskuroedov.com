<template>
  <nav class="">
    <!--TextSplit-->
    <nuxt-link class="navbar-brand" to="/">
      <TextSplit text="mskuroedov" :infinite="true"/>
    </nuxt-link>
    <div class="menu">
      <!--<div class="menu-burger">-->
          <!--<button>bur</button>-->
      <!--</div>-->
      <a href="#">Main</a>
      <a href="#">About</a>
      <a href="#">Contacts</a>
    </div>
    <div class="socials">
      <a href="mailto:mskuroedovjob@gmail.com" class="social-link">
        <font-awesome-icon :icon="['fas', 'envelope']"/>
      </a>
      <a href="https://t.me/mskuroedov" class="social-link">
        <font-awesome-icon :icon="['fab', 'telegram']"/>
      </a>
      <a href="https://vk.com/mskuroedov" class="social-link">
        <font-awesome-icon :icon="['fab', 'vk']"/>
      </a>
      <a href="https://www.instagram.com/mskuroedov/" class="social-link">
        <font-awesome-icon :icon="['fab', 'instagram']"/>
      </a>
    </div>
  </nav>
  <!--<nav class="navbar navbar-expand-lg navbar-light bg-light">-->
  <!--<a class="navbar-brand" href="#">Nuxt SSR</a>-->

  <!--<div class="collapse navbar-collapse">-->
  <!--<ul class="navbar-nav mr-auto">-->
  <!--<li class="nav-item" >-->
  <!--<nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">Home</nuxt-link>-->
  <!--</li>-->
  <!--<li class="nav-item">-->
  <!--<nuxt-link  active-class="active" class="nav-link" to="/about">About</nuxt-link>-->
  <!--</li>-->
  <!--<li class="nav-item">-->
  <!--<nuxt-link  active-class="active" class="nav-link" to="/users">Users</nuxt-link>-->
  <!--</li>-->
  <!--&lt;!&ndash;<li class="nav-item" v-if="!hasToken">&ndash;&gt;-->
  <!--&lt;!&ndash;<nuxt-link  active-class="active" class="nav-link" to="/login">login</nuxt-link>&ndash;&gt;-->
  <!--&lt;!&ndash;</li>&ndash;&gt;-->
  <!--&lt;!&ndash;<li class="nav-item" v-else>&ndash;&gt;-->
  <!--&lt;!&ndash;<a @click.prevent="logout"  active-class="active" class="nav-link" to="/login">logout</a>&ndash;&gt;-->
  <!--&lt;!&ndash;</li>&ndash;&gt;-->
  <!--</ul>-->
  <!--</div>-->
  <!--</nav>-->
</template>

<script>
  import TextSplit from '@/components/animated/TextSplit'

  export default {
    components: {
      TextSplit
    },
    computed: {
      hasToken() {
        return this.$store.getters.hasToken
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout');
        this.$router.push('/logout')

      }
    }
  }
</script>

<style lang="scss">
  @import '@/assets/themes.scss';

  nav {
    padding: 15px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
      @include themify($themes) {
        color: themed('textColor');
        &:hover{
          color: themed('activeColor');
          text-decoration: none;
        }
      }
    }
    .menu{
      display: flex;
      align-items: center;
      a{
        margin: 0 20px;
      }
    }
    .social-link {
      margin-left: 20px;
      /*color: white;*/
      /*&:first-of-type{*/
        /*margin-left: auto;*/
      /*}*/
    }
  }
</style>
