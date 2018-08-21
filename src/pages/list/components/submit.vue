
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
      this.data.ChatsFontColor = store.state.moduleContent.colorRGBA
      this.data.ChatsTimeFormat = store.state.moduleDate.dateFormatType
      this.data.ChatsTimeColor = store.state.moduleDate.colorRGBA
      this.data.HideChatsTime = store.state.moduleDate.isShowDate
      this.data.ChatsContentStyle = store.state.moduleUserBg.type
      this.data.HideUserPhoto = store.state.moduleUserImg.userImgIsShow
      this.data.UserPhotoStyle = store.state.moduleUserImg.isSquery
      this.data.NickNameColor = store.state.moduleUsername.colorRGBA
      this.data.HideNickName = store.state.moduleUsername.isShowName
      this.data.UseReChat = store.state.moduleContent.chatLoop
      this.data.NeedVerifyToUpWall = store.state.moduleContent.chatPass
      console.log(this.data)
    }
  }
}
</script>