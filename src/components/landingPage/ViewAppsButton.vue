<template>
  <b-button class="viewAppsButton" :variant="variant" @click="goToApps">
    {{text}} 
    <div class="arrowContainer">        
      <b-img 
        :src="require(`@/assets/icons/left-arrow.svg`)"
        width="25"
        height="25"
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
    width: 300px;
    height: 60px;
    padding-top: 15px !important;
    
    :hover {
      color: $gold;
    } 
  }
  @keyframes example {
    from {
      width: 25px;
      height: 25px;
    }
    to {
      width: 30px;
      height: 30px;
    }
  }
  .arrowContainer{
    width: 40px;
    height: 40px;
    display: inline-block;
  }
  .arrow {
    animation-name: example;
    animation-duration: 0.25s;
    animation-iteration-count: infinite;
  }
  
</style>
