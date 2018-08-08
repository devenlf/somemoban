

<template>
  <div class="bgset">
    <div class="head"><span>banner、标题 设置</span></div>
    <div class="choseBg">
      <span class="title">显示banner</span>
      <el-switch
        v-model="isShowTopColor"
        active-color="#409EFF"
        inactive-color="#dcdfe6">
      </el-switch>
      <span class="cueColor" v-if="isShowTopColor">显示</span>
      <span class="cueColor" v-else>隐藏</span>
      </div>
      <div class="banner-type">
        <p>banner种类</p>
         <el-radio-group v-model="radio">
          <el-radio :label="1">文字标题</el-radio>
          <el-radio :label="2">图片标题</el-radio>
        </el-radio-group>
        <div v-if="isShowText">
          <el-input v-model="titletxt" placeholder="请输入标题"></el-input>
          <el-input v-model="carbon" placeholder="请输入副本"></el-input>
        </div>
        <div v-else>
          <el-input v-model="titletxt" placeholder="请输入标题"></el-input>
          <el-input v-model="carbon" placeholder="请输入副本"></el-input>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 4,
      isShowTopColor: true,
      radio: 1,
      titletxt: '',
      carbon: ''
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
.bgset {
  width: 100%;
  height: 100%;
  background: #fafafa;
  box-shadow: -5px 0 9px 0 rgba(4, 0, 0, 0.17);
  overflow: hidden;
  .head {
    width: 100%;
    height: 4%;
    min-height: 40px;
    font-size: 15px;
    color: #028fee;
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
}
.el-switch {
  margin-left: 30%;
  margin-top: 10px;
  float: left;
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

