<template>
  <div class="appContainer d-flex">
    <div class="appImage">
      <b-img 
        :src="require(`@/assets/imgs/qomra.png`)"
      >
      </b-img>
    </div>
    <div class="appDescription">
      <div>
        <p class="title">
          قمرة
          <span class="starContainer">
            <b-img 
              :src="require(`@/assets/icons/star.svg`)"
              width="13"
              height="13"
              class="star"
            >
            </b-img>
            5
          </span>
        </p>
        
      </div>
      
      <div class="subTitle">
        تطوير:
        <span class="developerName">عمر برهوم</span>
      </div>
      
      <div>
        <p class="appText">
          نظام الولاء الامثل الذى يمكنك من رفع مبيعاتك نظام الولاء الامثل الذى يمكنك من رفع مبيعاتك
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppComponent'
  }
</script>

<style lang="scss" scoped>
  @import '@/app.scss';
  
  .appContainer {
    background-color: #F7F7F7;
    border-radius: 10px;
    padding: 29.59px 22.41px;
    text-align: start;
    
    .appImage {
      width: 45px;
      height: 46px;
    }
    .appDescription {
      padding-right: 10px;
    }
    .title {
      font-weight: 600;
      font-size: 16px;
      color: $primary;
      margin-bottom: 10px;
      
      .starContainer {
        margin-right: 30px;
        color: $secondary;
        
        .star {
          margin-top: -5px;
        }
      }
    }
    .subTitle {
      font-weight: 400;
      font-size: 10px;
      color: $black;
      margin-bottom: 20px;
    }
    .developerName {
      color: rgba(0, 0, 0, 0.56);
    }
    .appText {
      font-weight: 400;
      font-size: 10px;
      color: $black;
      margin-bottom: 0;
      line-height: 24px;
    }
  }
  
</style>
