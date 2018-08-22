

<template>
  <div class="bgset">
    <div class="head"><span>Logo 设置</span></div>
    <div class="choseBg">
      <span class="title">显示logo</span>
      <span class="cueColor" v-if="isShowLogo">显示</span>
      <span class="cueColor" v-else>隐藏</span>
      <el-switch
        v-model="isShowLogo"
        @change="changeLogoState"
        active-color="#409EFF"
        inactive-color="#dcdfe6">
      </el-switch>
      </div>
       <div class="up-style-logo">
        <img class="current-show-logo" :src="changeLogoImgValue"/>
        <el-upload
            class="upload-demo-logo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="fileList2"
            :before-upload="beforeAvatarUpload"
            :on-error="uploadError"
            :on-success="logoUploadSuccess"
            list-type="picture">
        <el-button class="changelogo" size="small" type="primary">更换logo</el-button>
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
      isShowLogo: '',
      fileName: '',
      fileList2: []
    }
  },
  created: function() {
    this.isShowLogo = this.changeLogoIsShowValue
  },
  computed: {
    ...mapGetters(['changeLogoImgValue', 'changeLogoIsShowValue'])
  },
  methods: {
    changeLogoState() {
      store.commit('changeLogoIsShow', this.isShowLogo)
    },
    beforeAvatarUpload(file) {
      this.fileName = file
    },
    uploadError() {
      console.log('上传失败')
      this.fileList2 = []
    },
    logoUploadSuccess(file) {
      console.log(this.fileName)
      const ImgUrl = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534740906811&di=7a6aa63e21b4e106a8e7f8982cf342d8&imgtype=0&src=http%3A%2F%2Fpic.35pic.com%2Fnormal%2F08%2F60%2F03%2F3347542_145636238000_2.jpg'
      store.commit('changeLogoImg', ImgUrl)
      console.log(store)
      this.fileList2 = []
    }
  }
}
</script>
<style lang="scss">
.up-style-logo {
  position: relative;
  z-index: 99;
}
.current-show-logo {
  position: absolute;
  width: 86%;
  height: 100%;
  left: 5%;
  display: block;
  z-index: -2;
}
.upload-demo-logo {
  margin-top: 10px;
  height: 10vmin;
  min-height: 80px;
  width: 90%;
  margin-left: 4%;
  background: rgba(0, 0, 0, 0.57);
  .el-upload__tip_code {
    width: 100%;
    font-size: 13px;
  }
  .el-upload {
    height: 10vmin;
    min-height: 80px;
  }
  button {
    width: 30%;
    margin-top: 8%;
  }
}
.changelogo {
  padding: 0.7vmin 0 !important;
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

