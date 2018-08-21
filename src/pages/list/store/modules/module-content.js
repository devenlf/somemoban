import hexToRgba from '@/utils/hexToRgba.js'
const module = {
  state: {
    color: '#ffffff',
    opacity: '0',
    colorRGBA: ''
  },
  mutations: {
    setColorContent(state, newColor) {
      state.color = newColor
      state.colorRGBA = hexToRgba(newColor, state.opacity)
    },
    setOpacityContent(state, newOpacity) {
      state.opacity = newOpacity
      state.colorRGBA = hexToRgba(state.color, newOpacity)
    },
    customAllContent(state, value) {
      state.colorRGBA = value
    }
  },
  actions: { },
  getters: {
    contentColorRGBAValue: state => {
      return state.colorRGBA
    }
  }
}
export default module
