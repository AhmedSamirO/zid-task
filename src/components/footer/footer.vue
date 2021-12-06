<template>
  <div class="footer">
    <div class="container">
      <b-row class="justify-center">
        <b-col cols="12" class="mt-2">
          <b-img 
            :src="require(`@/assets/imgs/white-zid-logo.png`)"
            width="200"
            height="80"
          >
          </b-img>
        </b-col>
        <b-col cols="12 pt-2">
          <ul class="list-group list-group-horizontal d-flex justify-content-center p-0" >
            <li class="list-group-item">
              <b-img 
                :src="require(`@/assets/icons/twitter.svg`)"
                width="22" 
                height="22"
              >
              </b-img>
            </li>
            <li class="list-group-item">
              <b-img 
                :src="require(`@/assets/icons/instagram.svg`)"
                width="22" 
                height="22"
              >
              </b-img>
            </li>
            <li class="list-group-item">
              <b-img 
                :src="require(`@/assets/icons/linkedin.svg`)"
                width="22" 
                height="22"
              >
              </b-img>
            </li>
            <li class="list-group-item">
              <b-img 
                :src="require(`@/assets/icons/youtube.svg`)"
                width="22" 
                height="22"
              >
              </b-img>
            </li>
          </ul>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomFooter'
}
</script>

<style lang="scss" scoped>
  @import '@/app.scss';

  .footer {
    background-color: $primary;
    padding-top: 20px;
    padding-bottom: 80px;
  }
  .list-group-item {
    background-color: transparent;
    border: none;
    padding-left: 0;
    padding-right: 0;
    width: 60px;
    cursor: pointer;
  }
</style>
