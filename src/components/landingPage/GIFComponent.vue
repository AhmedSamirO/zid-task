<template>
  <div class="gifContainer">
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
      :src="require(`@/assets/imgs/app-market.gif`)"
      class="appMarket"
      :height="$props.smallComponent ? '375' : '550'"
    >
    </b-img>
  </div>
</template>

<script>
  export default {
    name: 'GIFComponent',
    props: ['smallComponent']
  }
</script>

<style lang="scss" scoped>
  @import '@/app.scss';
  
  .gifContainer {
    position: relative;

    .dots {
      position: absolute;
      top: -42px;
      left: -70px;
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
    
    .appMarket {
      position: relative;
      margin-top: 46px !important;
      width: 100%;
      border-radius: 40px;
      display: block;
      overflow: hidden;
      margin: auto;
      z-index: 100;
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
