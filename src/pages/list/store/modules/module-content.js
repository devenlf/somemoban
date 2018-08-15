import hexToRgba from '@/utils/hexToRgba.js'
const module = {
  state: {
    color: '#000000',
    opacity: '30',
    isShow: true,
    colorRGBA: ''
  },
  mutations: {
    setColorTop(state, newColor) {
      state.color = newColor
      state.colorRGBA = hexToRgba(newColor, state.opacity)
    },
    setOpacityTop(state, newOpacity) {
      state.colorRGBA = hexToRgba(state.color, newOpacity)
    },
    setIsShowTop(state, bool) {
      state.isShow = bool
    }
  },
  actions: { },
  getters: {
    topColorRGBAValue: state => {
      console.log(state.colorRGBA)
      return state.colorRGBA
    },
    topIsShowBg: state => {
      return state.isShow
    }
  }
}
export default module
