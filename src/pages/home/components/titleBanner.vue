

<template>
  <div class="bgset">
    <div class="head"><span>banner、标题 设置</span></div>
    <div class="choseBg">
      <span class="title">显示banner</span>
      <span class="cueColor" v-if="isShowTitle">显示</span>
      <span class="cueColor" v-else>隐藏</span>
      <el-switch
        v-model="isShowTitle"
        @change="changeTitleShow"
        active-color="#409EFF"
        inactive-color="#dcdfe6">
      </el-switch>
      </div>
      <div class="banner-type">
        <p>banner种类</p>
         <el-radio-group v-model="radio" @change="changeType">
          <el-radio :label="0">文字标题</el-radio>
          <el-radio :label="1">图片标题</el-radio>
        </el-radio-group>
        <div v-if="isShowText">
          <el-input v-model="titletxt" placeholder="请输入标题" @input="changeDataRoomName"></el-input>
          <el-input v-model="carbon" placeholder="请输入副本" @input="changeDataSubTitle"></el-input>
        </div>
        <div class="up-banner-bg" v-else>
        <img class="bannerImg" :src="changeBannerImgValue" alt="">
        <el-upload
            class="upload-demo-title"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="fileList2"
            :before-upload="beforeAvatarUpload"
            :on-error="uploadError"
            :on-success="logoUploadSuccess"
            list-type="picture">
        <el-button class="titleImgUp" size="small" type="primary">点击上传</el-button>
        </el-upload>
        </div>
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
      isShowTitle: this.changebannerIsShowValue,
      radio: 0,
      fileName: '',
      titletxt: '',
      carbon: '',
      fileList2: [

      ]
    }
  },
  computed: {
    isShowText: function() {
      return this.radio === 0
    },
    ...mapGetters(['changeBannerImgValue', 'changebannerIsShowValue'])
  },
  created: function() {
    console.log(this.bannerTxt)
  },
  methods: {
    beforeAvatarUpload(file) {
      this.fileName = file
    },
    uploadError() {
      console.log('上传失败')
      this.fileList2 = []
    },
    logoUploadSuccess(file) {
      console.log(this.fileName)
      const titleUrl = 'http://images.hisupplier.com/var/userImages/201511/03/084707370756_s.jpg'
      store.commit('changeBannerImg', titleUrl)
      this.fileList2 = []
    },
    changeType() {
      store.commit('changebannerType', this.radio)
    },
    changeDataRoomName() {
      store.commit('changebannerRoomName', this.titletxt)
    },
    changeDataSubTitle() {
      store.commit('changebannerSubTitle', this.carbon)
    },
    changeTitleShow() {
      store.commit('changebannerIsShow', this.isShowTitle)
    }
  }
}
</script>
<style lang="scss">
.up-banner-bg{
  position: relative;
}
.upload-demo-title {
  height: 80px;
  width: 80% !important;
  margin-left: 10%;
  position: absolute;
  z-index: 2;
  background: rgba(0, 0, 0, 0.57);
  button {
    width: 50% !important;
    margin-top: 24px;
  }
  ul {
    margin-top: 18%;
  }
}
.bannerImg{
  height: 80px;
  width: 80% !important;
  position: absolute;
  z-index: 0;
  top: 0px;
  left: 10%;
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
.titleImgUp{
  margin-top: 15px !important
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

