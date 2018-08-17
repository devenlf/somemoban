const module = {
  state: {
    logoImg: process.env.FILE_DOMAIN + '/Uploads/Files/2015/12/08/0/635851845005372851.jpg',
    logoIsShow: true
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
