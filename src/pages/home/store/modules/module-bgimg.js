const module = {
  state: {
    backgroundImg: ''
  },
  mutations: {
    setIsShowTop(state, url) {
      state.backgroundImg = url
    }
  },
  actions: { },
  getters: {
    topColorBackgroundValue: state => {
      return state.backgroundImg
    }
  }
}
export default module
