<template>
  <el-row class="logo-guide-background">
    <el-col :span="19" class="right-set-back">
      <div class="logo-back-show">
        <div class="logo-show"></div>
      </div>
    </el-col>
    <el-col  :span="5" class="left-set-back">
       <div class="logo-set"> </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.logo-guide-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  z-index: 98;
}
.right-set-back {
  display: block;
  background: rgba(black, 0.5);
  position: relative;
}
.logo-back-show {
  height: 90%;
  width: 94%;
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.logo-set {
  min-width: 255px;
  height: 100%;
  background: rgba(black, 0.5);
}
.logo-show {
  position: absolute;
  z-index: 99;
  width: 13vmin;
  height: 7.6vmin;
  top: 5.5%;
  left: 3.1%;
  border: 2px solid #fff600;
}
</style>

