import hexToRgba from '@/utils/hexToRgba.js'
const module = {
  state: {
    color: '#ffffff',
    opacity: '0',
    colorRGBA: '',
    chatLoop: '',
    chatPass: ''
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
    setContentLoop(state, val) {
      state.chatLoop = val
    },
    setContentPass(state, val) {
      state.chatPass = val
    },
    customAllContent(state, value) {
      state.colorRGBA = value
    }
  },
  actions: { },
  getters: {
    contentColorRGBAValue: state => {
      return state.colorRGBA
    },
    setContentPassValue: state => {
      return state.chatPass
    },
    setContentLoopValue: state => {
      return state.chatLoop
    }
  }
}
export default module
