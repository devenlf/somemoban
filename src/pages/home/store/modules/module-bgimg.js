const module = {
  state: {
    backgroundImg: ''
  },
  mutations: {
    changeBackgroundImg(state, url) {
      state.backgroundImg = url
    }
  },
  getters: {
    changeBackgroundImgValue: state => {
      return state.backgroundImg
    }
  }
}
export default module
