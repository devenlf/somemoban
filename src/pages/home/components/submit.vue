
<template>
    <div class="submit-box">
      <el-button class="submit-btn" type="primary" @click="submitData">保存</el-button>
      <el-button class="cancal-btn">取消</el-button>
    </div>
</template>
<style lang="scss">
.submit-box {
  position: absolute;
  width: 100%;
  height: 12%;
  min-width: 225px;
  min-height: 60px;
  border-top: 1px solid #ccc;
  bottom: 0px;
  text-align: center;
  .el-button {
    font-size: 12px;
    padding: 2% 10%;
    margin-top: 8%;
  }
}
</style>

<script>
import store from '../store'
export default {
  props: ['data'],
  data() {
    return {}
  },
  methods: {
    submitData() {
      this.data.WeiXinCodeImage = store.state.moduleCode.codeImg
      this.data.HideQRImg = store.state.moduleCode.codeIsShow
      this.data.BackgroundImage = store.state.moduleImg.backgroundImg
      this.data.Logo = store.state.moduleLogo.logoImg
      this.data.HideLogo = store.state.moduleLogo.logoIsShow
      this.data.Banner = store.state.moduleTitle.BannerImg
      this.data.HideBannerDiv = store.state.moduleTitle.bannerIsShow
      this.data.RoomName = store.state.moduleTitle.bannerRoomName
      this.data.SubTitle = store.state.moduleTitle.bannerSubTitle
      this.data.BannerType = store.state.moduleTitle.bannerType
      console.log(this.data)
    }
  }
}
</script>