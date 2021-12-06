<template>
  <b-row class="appContainer m-0">
    <b-col cols="3" class="p-0">
      <b-img 
        :src="require(`@/assets/imgs/qomra.png`)"
      >
      </b-img>
    </b-col>
    <b-col cols="9" class="p-0">
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
        <p class="appText">نظام الولاء الامثل الذى يمكنك من رفع مبيعاتك</p>
        <p class="appText">نظام الولاء الامثل الذى يمكنك من رفع مبيعاتك</p>
      </div>
    </b-col>
  </b-row>
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
    padding: 10px;
    text-align: start;
    
    .title {
      font-weight: 600;
      font-size: 16px;
      color: $primary;
      margin-bottom: 0;
      
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
      font-size: 10px;
      color: rgba(0, 0, 0, 0.56);
    }
    .appText {
      font-weight: 400;
      font-size: 10px;
      color: $black;
      margin-bottom: 20px;
      margin-bottom: 0;
      line-height: 24px;
    }
  }
  
</style>
