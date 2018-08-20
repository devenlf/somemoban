import hexToRgba from '@/utils/hexToRgba.js'
const module = {
  state: {
    color: '',
    opacity: '',
    isShowName: '',
    colorRGBA: ''
  },
  mutations: {
    setColorName(state, newColor) {
      state.color = newColor
      state.colorRGBA = hexToRgba(newColor, state.opacity)
    },
    setOpacityName(state, newOpacity) {
      state.opacity = newOpacity
      state.colorRGBA = hexToRgba(state.color, newOpacity)
    },
    setIsShowName(state, bool) {
      state.isShowName = bool
    },
    customAllName(state, colorvalue) {
      state.colorRGBA = colorvalue
      state.isShowName = true
    }
  },
  actions: { },
  getters: {
    nameColorRGBAValue: state => {
      return state.colorRGBA
    },
    nameIsShowBg: state => {
      return (state.isShowName ? 'visible' : 'hidden')
    }
  }
}
export default module
