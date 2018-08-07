<template>
  <el-row >
  <el-col :span="20"><div class="grid-content bg-left">
    <div class="bgimgby">
      <img src="../../../static/image/635869062716808792.jpg" alt="">
    </div>
    </div></el-col>
  <el-col :span="4"><div class="grid-content bg-right">
      <v-bgimg/>
    </div></el-col>
  </el-row>
</template>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.el-row {
  height: 100%;
  .el-col {
    height: 100%;
  }
}
.bgimgby {
  height: 90%;
  width: 94%;
  background: black;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  img {
    width: 100%;
    height: 100%;
    width: 100%
  }
}
.bg-left {
  display: block;
  height: 100%;
  background: red;
  position: relative;
}
.bg-right {
  background: darkcyan;
  height: 100%;
}
</style>

<script>
import bgimg from '@/components/bgimg'
import code from '@/components/code'
import logo from '@/components/logo'
import titleBanner from '@/components/titleBanner'
import topcolor from '@/components/topcolor'

export default {
  data() {
    return {
      msg: 'xiaomin'
    }
  },
  created: function() {},
  components: {
    'v-bgimg': bgimg,
    'v-code': code,
    'v-logo': logo,
    'v-titleBanner': titleBanner,
    'v-topcolor': topcolor
  }
}
</script>