import service from '@/utils/request'
import hexify from '@/utils/RGBAToHex'
import store from './store'

const dataInitFunction = function() {
  let dataInit = ''
  return service({
    url: 'skin/GetChatContentSkin/333',
    method: 'POST'
  })
    .then(response => {
      dataInit = response.data
      // 加载对话框样式
      store.commit('changeType', dataInit.ChatsContentStyle)
      // 加载人物头像形状
      store.commit('changeuserImgActive', dataInit.UserPhotoStyle)
      store.commit('setIsShowuserImg', dataInit.HideUserPhoto)
      // 加载用户名
      const userNameFontColor = hexify(dataInit.NickNameColor)
      store.commit('setIsShowName', dataInit.HideNickName)
      store.commit('setColorName', userNameFontColor.color)
      store.commit('setOpacityName', userNameFontColor.opacity)
      // 加载日期
      const userDateFontColor = hexify(dataInit.ChatsTimeColor)
      store.commit('setIsShowDate', dataInit.HideChatsTime)
      store.commit('setColorDate', userDateFontColor.color)
      store.commit('setOpacityDate', userDateFontColor.opacity)
      const dateType = (function() {
        return dataInit.ChatsTimeFormat === 'YYYY-MM-DD HH:mm:ss' ? 0 : 1
      }())
      store.commit('setDtaeTypeFormat', dateType)
      // 加载聊天内容
      const userContentFontColor = hexify(dataInit.ChatsFontColor)
      store.commit('setColorContent', userContentFontColor.color)
      store.commit('setOpacityContent', userContentFontColor.opacity)
      store.commit('setContentLoop', dataInit.UseReChat)
      store.commit('setContentPass', dataInit.NeedVerifyToUpWall)
      return dataInit
    })
}

export default dataInitFunction
