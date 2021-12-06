<template>
  <div class="videoContainer">
      <div class="dots">
        <b-img 
          :src="require(`@/assets/icons/dots.svg`)"
        >
        </b-img>
      </div>
      
      <div class="circleContainer">
        <b-img 
          :src="require(`@/assets/icons/circle.svg`)"
          width="367"
          height="367"
          class="circle"
        >
        </b-img>
      </div>
      
      <div class="appMarketContainer">
        <b-img 
          :src="require(`@/assets/imgs/app-market.gif`)"
          class="appMarket"
        >
        </b-img>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'GIFComponent'
  }
</script>

<style lang="scss" scoped>
  @import '@/app.scss';

  .landingPage {
    padding-top: 70px;
  }
  
  h1 {
    font-weight: 700 !important;
    font-size: 36px;
    color: $primary;
  }
  
  .text {
    font-weight: 400 !important;
    font-size: 18px;
    line-height: 34px;
    color: $black;
  }
  
  .viewAppsButtonContainer {
    margin-bottom: 40px;
  }
  
  .videoContainer{
    position: relative;
    max-width: 915px;
    margin-bottom: 200px;
    
    .dots{
      position: absolute;
      top: 5px;
      left: -40px;
      z-index: 1;
    }
    
    .circleContainer {
      position: absolute;
      z-index: 1;
      bottom: -80px;
      right: -50px;
    }
    
    .appMarket {
      margin-top: 46px !important;
      position: relative;
      max-width: 850px;
      max-height: 550px;
      width: 850px;
      border-radius: 40px;
      display: block;
      overflow: hidden;
      margin: auto;
      z-index: 100;
    }
  }
  
  .section2 {
    background-color: #E5E5E5;
    margin-bottom: 190px;
    padding-bottom: 65px;
    padding-top: 65px;
    
    .section2Header {
      font-weight: 700 !important;
      font-size: 24px;
      color: $primary;
      margin-bottom: 20px;
    }
    
    .section2Subheader {
      font-weight: 400 !important;
      font-size: 16px;
      line-height: 24px;
      color: $black;
      margin-bottom: 20px;
    }
    .advanages {
      font-weight: 600 !important;
      font-size: 14px;
      line-height: 24px;
      color: $black;
      margin-bottom: 10px;
    }
    .smallAdvanage {
      font-size: 12px;
    }
  }
</style>
