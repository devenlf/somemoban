

<template>
  <div class="bgset">
    <div class="head"><span>二维码 设置</span></div>
    <div class="choseBg">
      <span class="title">显示二维码</span>
      <span class="cueColor" v-if="isShowCode">显示</span>
      <span class="cueColor" v-else>隐藏</span>
      <el-switch
        v-model="isShowCode"
        @change="changeLogoState"
        active-color="#409EFF"
        inactive-color="#dcdfe6">
      </el-switch>
      </div>
       <div class="up-style-code">
         <img class="current-show-code" :src="changeCodeImgValue" alt="">
        <el-upload
            class="upload-demo-code"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="fileList2"
            :before-upload="beforeAvatarUpload"
            :on-error="uploadError"
            :on-success="logoUploadSuccess"
            list-type="picture">
        <el-button size="small" type="primary">更换</el-button>
        <div slot="tip" class="el-upload__tip_code">支持格式：png，jpg，gif，logo</div>
        <div slot="tip" class="el-upload__tip_code">上传尺寸：190px*96px</div>
        <div slot="tip" class="el-upload__tip_code">图片大小：500KB以内</div>       
         </el-upload>
        </div>
  </div>
</template>
<script>
import store from '../store'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      index: 4,
      isShowCode: true,
      radio: 1,
      titletxt: '',
      carbon: '',
      fileList2: [],
      fileName: ''
    }
  },
  computed: {
    ...mapGetters(['changeCodeImgValue'])
  },
  created: function() {},
  methods: {
    changeLogoState() {
      store.commit('changeCodeIsShow', this.isShowCode)
    },
    beforeAvatarUpload(file) {
      this.fileName = file
    },
    uploadError() {
      console.log('上传失败')
    },
    logoUploadSuccess(file) {
      console.log(this.fileName)
      const codeUrl = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1855790068,611309659&fm=200&gp=0.jpg'
      store.commit('changeCodeImg', codeUrl)
    }
  }
}
</script>
<style lang="scss">
.up-style-code {
  position: relative;
  z-index: 99;
}
.current-show-code {
  position: absolute;
  height: 12vmin;
  width: 12vmin;
  min-width: 100px;
  min-height: 100px;
  left: 5%;
  display: block;
  z-index: -2;
  left: 1.7vmin
}
.upload-demo-code {
  margin-top: 10px;
  height: 12vmin;
  width: 12vmin;
  min-width: 100px;
  min-height: 100px;
  margin-left: 4%;
  background: rgba(0, 0, 0, 0.57);
  button {
    width: 50% !important;
    padding: 6% 10%;
    margin-top: 30%;
    margin-bottom: 50%;
  }
  .el-upload__tip_code {
    width: 240%;
    font-size: 13px;
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
</style>

