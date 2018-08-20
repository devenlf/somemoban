const module = {
  state: {
    bannerType: '',
    bannerIsShow: '',
    bannerRoomName: '',
    bannerSubTitle: '',
    BannerImg: ''
  },
  mutations: {
    changebannerType(state, val) {
      state.bannerType = val
    },
    changebannerIsShow(state, bool) {
      state.bannerIsShow = bool
    },
    changebannerRoomName(state, val) {
      state.bannerRoomName = val
    },
    changebannerSubTitle(state, val) {
      state.bannerSubTitle = val
    },
    changeBannerImg(state, url) {
      state.BannerImg = url
    }
  },
  getters: {
    changebannerTypeValue: state => {
      return !state.bannerType
    },
    changebannerIsShowValue: state => {
      return state.bannerIsShow ? 'visible' : 'hidden'
    },
    changebannerRoomNameValue: state => {
      return state.bannerRoomName
    },
    changebannerSubTitleValue: state => {
      return state.bannerSubTitle
    },
    changeBannerImgValue: state => {
      return state.BannerImg
    }
  }
}
export default module
