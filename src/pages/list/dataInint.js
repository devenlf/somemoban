import service from '@/utils/request'
import hexify from '@/utils/RGBAToHex'
import store from './store'

const dataInitFunction = function() {
  service({
    url: 'skin/GetChatContentSkin/333',
    method: 'POST'
  })
    .then(response => {
      console.log(response)
      const dataInit = response.data
      store.commit('changeType', dataInit.ChatsContentStyle)
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
    })
}

export default dataInitFunction
