<template>
  <div id="app" dir="rtl">
    <CustomHeader></CustomHeader>

    <router-view />
        
  </div>
</template>

<script>
import CustomHeader from './components/header/Header.vue'

export default {
  name: 'App',
  components: {
    CustomHeader
  }
}
</script>

<style>

  @font-face {
    font-family: Cairo;
    src: url('./assets/fonts/Cairo/static/Cairo-ExtraLight.ttf');
    font-weight: 200;
  }
  @font-face {
    font-family: Cairo;
    src: url('./assets/fonts/Cairo/static/Cairo-Light.ttf');
    font-weight: 300;
  }
  @font-face {
    font-family: Cairo;
    src: url('./assets/fonts/Cairo/static/Cairo-Regular.ttf');
    font-weight: 400;
  }
  @font-face {
    font-family: Cairo;
    src: url('./assets/fonts/Cairo/static/Cairo-Medium.ttf');
    font-weight: 500;
  }
  @font-face {
    font-family: Cairo;
    src: url('./assets/fonts/Cairo/static/Cairo-SemiBold.ttf');
    font-weight: 600;
  }
  @font-face {
    font-family: Cairo;
    src: url('./assets/fonts/Cairo/static/Cairo-Bold.ttf');
    font-weight: 700;
  }
  @font-face {
    font-family: Cairo;
    src: url('./assets/fonts/Cairo/static/Cairo-ExtraBold.ttf');
    font-weight: bold;
    font-weight: 800;
  }
  @font-face {
    font-family: Cairo;
    src: url('./assets/fonts/Cairo/static/Cairo-Black.ttf');
    font-weight: 900;
  }
  #app {
    font-family: 'Cairo', sans-serif;
    text-align: center;
  }
  
  * {
    font-family: 'Cairo', sans-serif !important;
    font-weight: 300 !important;
  }
</style>
