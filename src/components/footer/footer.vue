<template>
  <div class="w-100">
    <div class="container">
      <b-row class="justify-center w-100">
        <b-col cols="12">
          
        </b-col>
        <b-col cols="12">
          
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomHeader'
}
</script>

<style lang="scss" scoped>
  @import '@/app.scss';
  
  .header {
    background-color: $primary;
  }
  ::v-deep {
    .navbar-nav {
      width: 100%;
      padding: 0;
      
      .nav-link {
        font-size: 18px !important;
        font-weight: 600 !important;
        color: black!important;
        padding-top: 0;
        padding-bottom: 0;
      }
    }
  }
</style>
