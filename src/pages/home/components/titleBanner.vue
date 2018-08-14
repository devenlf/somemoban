

<template>
  <div class="bgset">
    <div class="head"><span>banner、标题 设置</span></div>
    <div class="choseBg">
      <span class="title">显示banner</span>
      <span class="cueColor" v-if="isShowTopColor">显示</span>
      <span class="cueColor" v-else>隐藏</span>
      <el-switch
        v-model="isShowTopColor"
        active-color="#409EFF"
        inactive-color="#dcdfe6">
      </el-switch>
      </div>
      <div class="banner-type">
        <p>banner种类</p>
         <el-radio-group v-model="radio">
          <el-radio :label="1">文字标题</el-radio>
          <el-radio :label="2">图片标题</el-radio>
        </el-radio-group>
        <div v-if="isShowText">
          <el-input v-model="titletxt" placeholder="请输入标题" @input="changeData('titletxt',titletxt)"></el-input>
          <el-input v-model="carbon" placeholder="请输入副本" @input="changeData('carbon',carbon)"></el-input>
        </div>
        <div class="up-banner-bg" v-else>
        <el-upload
            class="upload-demo-title"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="fileList2"
            list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  props: ['bannerTxt'],
  data() {
    return {
      index: 4,
      isShowTopColor: true,
      radio: 1,
      titletxt: this.bannerTxt.titletxt,
      carbon: this.bannerTxt.carbon,
      fileList2: [

      ]
    }
  },
  computed: {
    isShowText: function() {
      return this.radio === 1
    }
  },
  created: function() {
    console.log(this.bannerTxt)
  },
  methods: {
    changeData(type, value) {
      const data = {
        type: type,
        value: value
      }
      this.$emit('change', data)
    }
  }
}
</script>
<style lang="scss">
.upload-demo-title {
  height: 80px;
  width: 80% !important;
  margin-left: 10%;
  background: rgba(0, 0, 0, 0.57);
  button {
    width: 50% !important;
    margin-top: 24px;
  }
  ul {
    margin-top: 18%;
  }
}
.bgset {
  width: 100%;
  height: 100%;
  background: #fafafa;
  box-shadow: -5px 0 9px 0 rgba(4, 0, 0, 0.17);
  // overflow: hidden;
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

