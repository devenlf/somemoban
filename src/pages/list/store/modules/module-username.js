import hexToRgba from '@/utils/hexToRgba.js'
const module = {
  state: {
    color: '#000000',
    opacity: '100',
    isShowName: true,
    colorRGBA: ''
  },
  mutations: {
    setColorName(state, newColor) {
      state.color = newColor
      state.colorRGBA = hexToRgba(newColor, state.opacity)
    },
    setOpacityName(state, newOpacity) {
      state.colorRGBA = hexToRgba(state.color, newOpacity)
    },
    setIsShowName(state, bool) {
      state.isShowName = bool
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
