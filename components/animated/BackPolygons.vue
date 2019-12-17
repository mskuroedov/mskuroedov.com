<template>
  <div class="bg-polygons">
    <div v-for="i in 80"
         :ref="'a'+i" class="bg-polygons__item">
      <!--<template v-if="centerOfViewPort > getPercentageInCenter('a'+i)">-->
      <!--{{Math.ceil(getPercentageInCenter('a'+i)/centerOfViewPort*100)}} <br>-->
      <!--</template>-->
      <!--<template v-else>-->
      <!--{{Math.ceil(centerOfViewPort/getPercentageInCenter('a'+i)*100)}} <br>-->
      <!--</template>-->
      <!--<span class="bg-polygons__item" :style="{width:getPercent('a'+i)+'%',height:getPercent('a'+i)+'%'}"></span>-->
      <!-- Generator: Adobe Illustrator 22.0.0, SVG Export Plug-In  -->
      <!--<svg version="1.1"-->
           <!--xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"-->
           <!--x="0px" y="0px" width="11px" height="12.7px" viewBox="0 0 11 12.7" style="enable-background:new 0 0 11 12.7;"-->
           <!--xml:space="preserve" :style="{width:`${getPercent('a'+i)}%`,height:`${getPercent('a'+i)}%`}">-->
<!--<style type="text/css">-->
	<!--.st0{fill:none;stroke:#FF0000;stroke-miterlimit:10;}-->
<!--</style>-->
        <!--<defs>-->
<!--</defs>-->
        <!--<polygon class="st0" points="10.5,9.2 10.5,3.5 5.5,0.6 0.5,3.5 0.5,9.2 5.5,12.1 "/>-->
        <!--<line class="st0" x1="5.5" y1="5.8" x2="5.5" y2="11.9"/>-->
        <!--<path class="st0" d="M10.5,9.3"/>-->
        <!--<line class="st0" x1="0.5" y1="3.4" x2="5.7" y2="6.4"/>-->
        <!--<path class="st0" d="M0.1,9.3"/>-->
        <!--<line class="st0" x1="10.2" y1="3.8" x2="5.3" y2="6.5"/>-->
<!--</svg>-->

      <!--<svg x="0px" y="0px" width="11px" height="12.4px" viewBox="0 0 11 12.4" style="enable-background:new 0 0 11 12.4;"-->
           <!--xml:space="preserve" :style="{transform:`scale(${getPercent('a'+i)})`}">-->
          <!--<path style="fill: #FF0000;stroke: #FF0000;stroke-miterlimit: 10;" class="st0" d="M10.5,8.8V3.6c0-0.2-0.1-0.3-0.2-0.4L5.7,0.6c-0.1-0.1-0.3-0.1-0.4,0L0.7,3.2C0.6,3.3,0.5,3.4,0.5,3.6v5.3c0,0.2,0.1,0.3,0.2,0.4l4.6,2.6c0.1,0.1,0.3,0.1,0.4,0l4.6-2.6C10.4,9.1,10.5,9,10.5,8.8z"/>-->
      <!--</svg>-->
      <svg x="0px" y="0px" width="11px" height="12.4px" viewBox="0 0 11 12.4" style="enable-background:new 0 0 11 12.4;"
           xml:space="preserve" :style="{width:`${getPercent('a'+i)}%`,height:`${getPercent('a'+i)}%`}">
          <path style="fill: none;stroke: #FF0000;stroke-miterlimit: 10;" class="st0" d="M10.5,8.8V3.6c0-0.2-0.1-0.3-0.2-0.4L5.7,0.6c-0.1-0.1-0.3-0.1-0.4,0L0.7,3.2C0.6,3.3,0.5,3.4,0.5,3.6v5.3c0,0.2,0.1,0.3,0.2,0.4l4.6,2.6c0.1,0.1,0.3,0.1,0.4,0l4.6-2.6C10.4,9.1,10.5,9,10.5,8.8z"/>
      </svg>
      <!--{{getPercent('a'+i)}} <br>-->
      <!--{{getOffsetTopOfEl('a'+i)}}-->
      <!--{{centerOfViewPort}}-->

    </div>
  </div>

</template>

<script>
  export default {
    name: "BackPolygons",
    data() {
      return {
        centerOfViewPort: null,
        topOfViewPort: null,
        bottomOfViewPort: null,
        halfOfViewport: null
      }
    },
    methods: {
      setCenterOfViewport() {
        this.centerOfViewPort = document.documentElement.scrollTop + document.documentElement.clientHeight / 2;
        // this.topOfViewPort = document.documentElement.scrollTop;
        // this.bottomOfViewPort = document.documentElement.scrollTop + document.documentElement.clientHeight;
      },
      getOffsetTopOfEl(ref) {
        if (this.$refs[ref]) return this.$refs[ref][0].offsetTop;
      },
      getPercent(ref) {
        let elOffTop = this.$refs[ref] ? this.$refs[ref][0].offsetTop : 0;
        if (elOffTop > this.centerOfViewPort) {
          // return Math.ceil(Math.sin(this.centerOfViewPort / elOffTop) * 100);
          return Math.ceil(Math.sin(-Math.PI / 3 - Math.PI * (this.centerOfViewPort / elOffTop)) * 100)
        } else {
          return Math.ceil(Math.sin(-Math.PI / 2 + Math.PI * (elOffTop / this.centerOfViewPort)) * 100)
          // return Math.ceil(Math.sin(elOffTop / this.centerOfViewPort) * 100);
        }
      }
    },
    mounted() {
      window.document.body.onscroll = this.setCenterOfViewport;
      // document.addEventListener('scroll', );
      this.halfOfViewport = document.documentElement.clientHeight / 2;
    },

  }
</script>

<style scoped lang="scss">
  .bg-polygons {
    display: flex;
    /*align-items: center;*/
    /*justify-content: space-between;*/
    flex-wrap: wrap;
    &__item {
      width: 10%;
      display: flex;align-items: center;justify-content: center;
      height: 150px;
      svg{
        transition: all .3s;
      }
      &:nth-of-type(even){
        //transform: translate(-50%,-50%);
      }
    }
  }
</style>
