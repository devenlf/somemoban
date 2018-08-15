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
  <!-- 子组件 -->
<template>
      <div></div>
</template>
<script>
export default {
  props: {
    currentData: Number
  },
  data() {
    return {}
  },
  created: function() {
    console.log(this.currentData)
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

.logo-set {
  min-width: 255px;
  height: 100%;
  background: rgba(black, 0.5);
}

</style>

