<template>
  <div class="landingPage">
    <div class="container-fluid">
      <b-img 
        v-if="isUpArrowViewed"
        :src="require(`@/assets/icons/arrow-up.svg`)"
        width="30"
        height="30"
        class="arrowUp"
      >
      </b-img>
      <div class="chatContainer">
        <b-img 
          :src="require(`@/assets/icons/chat.svg`)"
          width="30"
          height="30"
          class="chat"
        >
        </b-img>
      </div>
      <b-row class="justify-content-center">
        <b-col cols="12">
          <h1>
            طور متجرك ووسع افاق تجارتك مع سوق تطبيقات زد
          </h1>
        </b-col>
        
        <b-col cols="7" class="text my-4">
          <p>
            طور متجرك ووسع افاق تجارتك مع سوق تطبيقات زد التى تساعدك فى نمو ارباحك عبر ادارةعمليات متجرك بشكل فعال واحترافى
          </p>
        </b-col>
        
        <b-col cols="12" class="viewAppsButtonContainer">
          <ViewAppsButton />
        </b-col>
        
        <b-col cols="10" class="videoContainer">
          <GIFComponent />
        </b-col>
      </b-row>
      <b-row class="section2">
        <b-col lg="5" class="text-start">
          <p class="header">
            كل ما تحتاجه لنمو متجرك فى مكان واحد
          </p>
          <p class="subheader">
            مميزات سوق تطبيقات زد تساعدك فى سهولة وسرعة الاستفادة من خدمات وحلول سوف التطبيقات لنمو متجرك ومضاعفة ارباحك
          </p>
          <div class="advanages">
            <b-img 
              :src="require(`@/assets/icons/dashboard.svg`)"
              width="51"
              height="51"
            >
            </b-img>
            سهولة ادارة وتفعيل تطبيقات من نفس لوحة تحكم متجرك
          </div>
          
          <div class="advanages">
            <b-img 
              :src="require(`@/assets/icons/support.svg`)"
              width="51"
              height="51"
            >
            </b-img>
            دعم فنى وتقنى متكامل متوفر على مدار الساعة
          </div>
          
          <div class="advanages smallAdvanage">
            <b-img 
              :src="require(`@/assets/icons/money.svg`)"
              width="51"
              height="51"
            >
            </b-img>
            اسعار تنافسية مع تجربى مجانية وباقات اشتراك متنوعة
          </div>
          
          <div>
            <ViewAppsButton />
          </div>
        </b-col>
        <b-col lg="7" cols="10" class="pl-5 pr-0 videoContainer section2VideoContainer">
          <GIFComponent :smallComponent="true" />
        </b-col>
      </b-row>
      
      <b-row class="justify-content-center section3">
        <b-col cols="12">
          <p class="header">التطبيقات المتميزة</p>
          <p class="subheader">تطبيقات تقدم حلول وخدمات مميزة نوصى بها</p>
        </b-col>
        <b-col 
          lg="3" 
          md="6" 
          cols="12" 
          v-for="number in 4" 
          :key="number"
          class="p-3"
        >
          <AppComponent />
        </b-col>
        <b-col cols="12 allApps">
          <ViewAppsButton text="جميع التطبيقات" variant="white" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  import ViewAppsButton from './ViewAppsButton.vue'
  import GIFComponent from './GIFComponent.vue'
  import AppComponent from './AppComponent.vue'
  
  export default {
    name: 'LandingPage',
    components: { ViewAppsButton, GIFComponent, AppComponent },
    data: function () {
      return {
        isUpArrowViewed: false
      }
    },
    methods: {
      handleScroll () {
        this.isUpArrowViewed = window.scrollY > 0;
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () { 
      window.removeEventListener('resize', this.onResize); 
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/app.scss';

  .landingPage {
    padding-top: 70px;
  }
  
  .arrowUp {
    position: fixed;
    left: 30px;
    bottom: 20px;
    z-index: 9999;
  }
  .chatContainer {
    position: fixed;
    right: 30px;
    bottom: 20px;
    background-color: $gold;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    padding-top: 10px;
    z-index: 9999;
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
    margin-bottom: 200px;
  }
  
  .section2 {
    background-color: #E5E5E5;
    margin-bottom: 190px;
    padding-bottom: 65px;
    
    .header {
      font-weight: 700 !important;
      font-size: 24px;
      color: $primary;
      margin-bottom: 20px;
      padding-top: 65px;
      letter-spacing: -1px;
    }
    
    .subheader {
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
    .section2VideoContainer {
      margin-top: 20px;
      margin-bottom: 0;
    }
    
    @media (max-width: 992px) {
      justify-content: center;
    }
  }
  
  .section3 {
    .header {
      font-weight: 600 !important;
      font-size: 24px;
      letter-spacing: -1px;
      margin-bottom: 0;
    }
    .subheader {
      font-weight: 400 !important;
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 40px;
    }
    .allApps {
      margin-top: 40px;
      margin-bottom: 100px;
    }
  }
</style>
