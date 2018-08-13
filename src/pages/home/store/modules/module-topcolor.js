const module = {
  state: {
    color: '#ffffff',
    opacity: '0.3',
    isShow: true
  },
  mutations: {
    setColorTop(state, newColor) {
      state.color = newColor
    },
    setOpacityTop(state, newOpacity) {
      state.opacity = newOpacity
    },
    setIsShowTop(state, bool) {
      state.isShow = bool
    }
  },
  actions: { },
  getters: {
    topColorValue: state => {
      return state.color
    },
    topOpacityValue: state => {
      return state.opacity
    },
    topIsShowBg: state => {
      return state.isShow
    }
  }
}
export default module
