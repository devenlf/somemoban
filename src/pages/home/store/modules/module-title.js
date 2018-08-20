const module = {
  state: {
    bannerType: 0,
    bannerIsShow: true,
    bannerRoomName: '2015法拉利环球国际展-上海站',
    bannerSubTitle: '热烈欢迎来自五湖四海的广大车友',
    BannerImg: 'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845005372851.jpg'
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
