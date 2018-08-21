import service from '@/utils/request'
import store from './store'

const dataInitFunction = function() {
  let dataInit = ''
  return service({
    url: 'skin/GetWallSkin/333',
    method: 'POST'
  })
    .then(response => {
      dataInit = response.data
      store.commit('changeBackgroundImg', dataInit.BackgroundImage)
      store.commit('changeLogoImg', dataInit.Logo)
      store.commit('changeLogoIsShow', dataInit.HideLogo)
      store.commit('changebannerType', dataInit.BannerType)
      store.commit('changebannerIsShow', dataInit.HideBannerDiv)
      store.commit('changebannerRoomName', dataInit.RoomName)
      store.commit('changebannerSubTitle', dataInit.SubTitle)
      store.commit('changeBannerImg', dataInit.Banner)
      store.commit('changeCodeImg', dataInit.WeiXinCodeImage)
      store.commit('changeCodeIsShow', dataInit.HideQRImg)
      return dataInit
    })
}

export default dataInitFunction
