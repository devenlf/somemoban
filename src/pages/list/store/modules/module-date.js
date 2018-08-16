import hexToRgba from '@/utils/hexToRgba.js'
const module = {
  state: {
    color: '#000000',
    opacity: '30',
    isShowDate: true,
    colorRGBA: ''
  },
  mutations: {
    setColorDate(state, newColor) {
      state.color = newColor
      state.colorRGBA = hexToRgba(newColor, state.opacity)
    },
    setOpacityDate(state, newOpacity) {
      state.colorRGBA = hexToRgba(state.color, newOpacity)
    },
    setIsShowDate(state, bool) {
      state.isShowDate = bool
    }
  },
  actions: { },
  getters: {
    dateColorRGBAValue: state => {
      return state.colorRGBA
    },
    dateIsShowBg: state => {
      return (state.isShowDate ? 'visible' : 'hidden')
    }
  }
}
export default module
