<template>
  <div class="gifContainer mx-auto">
    <b-row class="justify-content-center m-0">
      <b-img 
        :src="require(`@/assets/icons/dots.svg`)"
        :class="['dots', {'smallComponentDots': smallComponent}]"
      >
      </b-img>
      
      <b-img 
        :src="require(`@/assets/icons/circle.svg`)"
        class="circle"
      >
      </b-img>
    
      <b-img 
        :src="getGifUrl(gifName)"
        :class="['gif' , {'small': smallComponent}]"
      >
      </b-img>
    </b-row>
  </div>
</template>

<script>
  export default {
    name: 'GIFComponent',
    props: {
      smallComponent: {
        type: Boolean,
        default: false
      },
      gifName: {
        type: String,
        default: "app-market"
      }
    },
    methods: {
      getGifUrl(gif) {
        let images = require.context('../../assets/imgs/', false, /\.gif$/)
        return images('./' + gif + ".gif")
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/app.scss';
  
  .gifContainer {
    position: relative;
    max-width: 950px;

    .dots {
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 1;
    }
    
    .smallComponentDots {
      left: -40px;
    }
      
    .circle {
      position: absolute;
      z-index: 1;
      bottom: -100px;
      right: -50px;
      width: 367px;
      height: 367px;
    }
    
    .gif {
      position: relative;
      margin-top: 46px !important;
      border-radius: 40px;
      display: block;
      overflow: hidden;
      margin: auto;
      z-index: 100;
      max-height: 549.29px;
      height: 100%;
      max-width: 846.89px;
      width: 100%;
      object-fit: cover;
    }
    
    
    @media (min-width: 992px) {
      .gif {
        &.small {
          width: 700.98px;
          height: 441px;
        }
      }
    }
    
    @media (max-width: 991.98px) {
      .dots {
        left: -30px;
      }
    }
    
    @media (max-width: 575px) {
      .circle {
        bottom: -50px;
        right: -30px;
        width: 200px;
        height: 200px;
      }
      .dots {
        left: -30px;
      }
      .smallComponentDots {
        left: -30px;
      }
    }
  }
</style>
