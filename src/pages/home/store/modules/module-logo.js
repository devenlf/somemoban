const module = {
  state: {
    logoImg: '',
    logoIsShow: ''
  },
  mutations: {
    changeLogoImg(state, imgName) {
      state.logoImg = imgName
    },
    changeLogoIsShow(state, bool) {
      state.logoIsShow = bool
    }
  },
  getters: {
    changeLogoImgValue: state => {
      return state.logoImg
    },
    changeLogoIsShowValue: state => {
      return state.logoIsShow ? 'visible' : 'hidden'
    }
  }
}
export default module
