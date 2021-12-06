<template>
  <b-button class="viewAppsButton" :variant="variant" @click="goToApps">
    <div class="buttonText">
      {{text}} 
    </div>
    <div class="arrowContainer">        
      <b-img 
        :src="require(`@/assets/icons/left-arrow.svg`)"
        width="30"
        height="30"
        class="arrow"
      >
      </b-img>
    </div> 
  </b-button>
</template>

<script>
export default {
  name: 'ViewAppsButton',
  props: {
    text: {
      type: String,
      default: 'تصفح التطبيقات'
    },
    variant: {
      type: String,
      default: 'primary'
    }
  },
  methods: {
    goToApps() {
      this.$router.push("/apps");
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/app.scss';

  .viewAppsButton {
    font-size: 18px !important;
    font-weight: 700 !important;
    color: $gold !important;
    width: 280px;
    height: 60px;
    
    .buttonText {
      padding-top: 9px;
      display: inline-block;
    }
    :hover {
      color: $gold;
    } 
  }
  @keyframes example {
    from {
      width: 30px;
      height: 30px;
    }
    to {
      width: 35px;
      height: 35px;
    }
  }
  .arrowContainer{
    width: 50px;
    height: 50px;
    display: inline-block;
  }
  .arrow {
    animation-name: example;
    animation-duration: 0.25s;
    animation-iteration-count: infinite;
  }
  
</style>
