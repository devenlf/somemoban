const module = {
  state: {
    logoImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534740749366&di=a0f3504ae57fa68799e6b530a844da46&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F12%2F34%2F70%2F94u58PICwKE.jpg',
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
