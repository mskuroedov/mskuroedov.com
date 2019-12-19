<template>
  <div class="lb-1">
    <div class="container-fluid">
      <Chacram/>
      <div class="row text-block">
        <div class="col-8 col-lg-8">
          <h2>Maxim Kuroedov</h2>
        </div>
        <div class="col-12 col-sm-10">
          <p>Front-end development.</p>
          <p>This page is introducing my <span class="soon">works<span class="soon__text">[soon]</span></span>  and skills.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Chacram from '@/components/animated/Chacram'

  export default {
    name: "Landing1",
    components: {
      Chacram
    },
  }
</script>

<style lang="scss">
.lb-1{
  position: relative;
  overflow: hidden;
  min-height: 80vh;
  .chacram{
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(50%,0);
    width: 35vw;
  }
  .text-block{
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  h2{
    font-weight: bold;
    font-size: 5rem;
    margin-bottom: 3rem;
    letter-spacing: 5px;
  }
  p{
    font-size: 3rem;
    .soon{
      position: relative;
      text-decoration: line-through;
      &__text{
        position: absolute;
        left: 0;
        right: 0;
        font-size: .6em;
        text-align: center;
        width: 100%;
        margin: auto;
        transform: translateY(-50%);
      }
    }
  }
  @media(max-width: 767.98px){
    h2{
      font-size: 2rem;
      margin-bottom: 2rem;
    }
    p{
      font-size: 1.5rem;
    }
  }

  @media(max-width: 991.98px){
  }
  @media(max-width: 1199.98px){
    .chacram{
      top: 0;
      bottom:auto;
      width: 60vw;
    }
  }
}
</style>
