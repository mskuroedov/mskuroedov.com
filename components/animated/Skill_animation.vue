<template>
    <div class="sa">
      <p class="sa__text">{{text}}</p>
      <slot>

      </slot>
    </div>
</template>

<script>
    export default {
        name: "Skill_animation",
      props:{
          text:{
            required:true,
            type:String
          },
          // logo:{
          //   required:true,
          //   type:String
          // }
      }

    }
</script>

<style lang="scss">
.sa{
  position: relative;
  width: 100%;
  text-align: center;
  &__text{
    font-size: 7rem;
    font-weight: bold;
  }
  &__logo{
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    top:0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    transform: translateY(100%);
    transition: all .2s;
    opacity: 0;
  }
  &.--not-hover{
    .sa__text{
      opacity: .6;
    }
  }
  &:hover{
    .sa__text{
      opacity: 1;
    }
    .sa__logo{
      transform: translateY(0);
      opacity: .9;
    }

  }
}
</style>
