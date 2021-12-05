<template>
  <div class="footer">
    <div class="container">
      <b-row class="justify-center">
        <b-col cols="12">
          <b-img 
            src="https://grow.zid.sa/hs-fs/hubfs/%D8%B2%D8%AF%20%D8%B4%D8%B1%D9%8A%D9%83%D9%83%203.png?width=228&name=%D8%B2%D8%AF%20%D8%B4%D8%B1%D9%8A%D9%83%D9%83%203.png" fluid
            alt="zid-logo"
          >
          </b-img>
        </b-col>
        <b-col cols="12 pt-2">
          <ul class="list-group list-group-horizontal d-flex justify-content-center p-0" >
            <li class="list-group-item">
              <b-icon
                icon="twitter"
                variant="white" 
                width="22" 
                height="22"
              ></b-icon>
            </li>
            <li class="list-group-item">
              <b-icon 
                icon="instagram" 
                variant="white"
                width="22" 
                height="22"
              ></b-icon>
            </li>
            <li class="list-group-item">
              <b-icon 
                icon="linkedin" 
                variant="white"
                width="22" 
                height="22"
              ></b-icon>
            </li>
            <li class="list-group-item">
              <b-icon 
                icon="youtube" 
                variant="white"
                width="22" 
                height="22"
              ></b-icon>
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
    width: 70px;
    cursor: pointer;
  }
</style>
