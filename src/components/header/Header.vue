<template>
  <b-navbar toggleable="lg" class="w-100">
    <div class="container">
      <b-row class="justify-center w-100">
        <b-col lg="2" cols="2">
          <b-navbar-brand href="/">
              <div class="logo">
                <img
                  class=""
                  src="https://zid.sa/wp-content/themes/zid2020/images/zid-logo.png"
                  alt="zid-logo"
                  width="100px"
                  height="40px"
                />
              </div>
            </b-navbar-brand>
        </b-col>
        <b-col lg="10" cols="10" class="pt-2 text-left">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav class="text-center">
                <b-row class="w-100" >
                  <b-col lg="2" class="py-0">
                    <router-link
                      to="/"
                      class="nav-link text-center"
                      tag="a"
                    >
                      الرئسية
                    </router-link>
                  </b-col>
                  <b-col lg="2" class="py-0">
                    <router-link
                      to="/categories"
                      class="nav-link text-center"
                      tag="a"
                    >
                      التصنيفات
                    </router-link>
                  </b-col>
                  <b-col lg="2" class="py-0">
                    <router-link
                      to="/apps"
                      class="nav-link text-center"
                      tag="a"
                    >
                      التطبيقات
                    </router-link>
                  </b-col>
                  <b-col lg="3" class="py-0">
                    <router-link
                      to="/develop"
                      class="nav-link text-center"
                      tag="a"
                    >
                      طور تطبيق
                    </router-link>
                  </b-col>
                </b-row>
              </b-navbar-nav>
            </b-collapse>
        </b-col>
      </b-row>
    </div>
  </b-navbar>
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
