

<template>
  <div class="bgset">
    <div class="head"><span>头像设置</span></div>
    <div class="choseBg">
      <span class="title">显示用户头像</span>
      <span class="cueColor" v-if="isShowFaceImg">显示</span>
      <span class="cueColor" v-else>隐藏</span>
        <el-switch
        v-model="isShowFaceImg"
        active-color="#409EFF"
        inactive-color="#dcdfe6">
      </el-switch>
      </div>
       <p class="chooseStyle">形状</p>
       <div class="choose-style-box">
      <div class="round img-user">
        <img src="../../../../static/image/user1.jpg" alt="">
      </div>
      <div class="square img-user">
        <img src="../../../../static/image/user1.jpg" alt="">
      </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 4,
      isShowFaceImg: true
    }
  },
  computed: {
    isShowText: function() {
      return this.radio === 1
    }
  },
  created: function() {},
  methods: {}
}
</script>
<style lang="scss">
.choose-style-box {
  width: 100%;
  padding-left: 8%;
}
.chooseStyle {
  font-size: 12px;
  margin-left: 8%;
}
.upload-demo-code {
  margin-top: 10px;
  height: 120px;
  width: 120px;
  margin-left: 4%;
  background: rgba(0, 0, 0, 0.57);
  button {
    width: 50% !important;
    margin-top: 38px;
    margin-bottom: 50%;
  }
  .el-upload__tip_code {
    width: 240%;
    font-size: 13px;
  }
}
.choseBg {
  min-width: 255px;
  width: 100%;
  height: 40px;
  min-height: 40px;
  background: #ededed;
  color: #2e323e;
  font-size: 14px;
  span {
    padding-top: 1.2%;
    float: left;
  }
}
.img-user {
  width: 76px;
  height: 76px;
  overflow: hidden;
  float: left;
  margin-top: 20px;
  margin-right: 8%;
  img {
    height: 100%;
    width: 100%;
  }
}
.round {
  border-radius: 38px;
}

.bgset {
  width: 100%;
  height: 100%;
  // min-width: 318px;
  background: #fafafa;
  box-shadow: -5px 0 9px 0 rgba(4, 0, 0, 0.17);
  overflow: hidden;
  .head {
    width: 100%;
    height: 4%;
    min-height: 40px;
    font-size: 15px;
    color: #028fee;
    font-weight: bold;
  }
}
.el-input {
  width: 80%;
  margin-left: 8%;
  margin-top: 3%;
}
.el-radio {
  margin-bottom: 8%;
  margin-top: 3%;
}
.cueColor {
  text-indent: 5% !important;
  font-size: 13px;
  color: #999;
  letter-spacing: 1px;
  margin: 1px;
  float: right !important;
}
.el-switch {
  margin-top: 10px;
  float: right;
}
.el-radio-group {
  padding-left: 8%;
}
.banner-type {
  width: 100%;
  p {
    font-size: 14px;
    color: #333333;
    text-indent: 8%;
  }
}
</style>

