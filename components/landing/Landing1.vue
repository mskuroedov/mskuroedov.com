<template>
  <div class="lb-1">
    <div class="container-fluid">
      <Chacram/>
      <div class="row">
        <div class="col-12 col-lg-8 text-block">
          <h2>Maxim Kuroedov</h2>
          <p>Front-end development.</p>
          <p>This page is introducing my works and skills in JS,CSS and HTML.</p>
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

  }
}
</style>
