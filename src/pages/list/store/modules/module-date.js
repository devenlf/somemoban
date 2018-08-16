import hexToRgba from '@/utils/hexToRgba.js'
const module = {
  state: {
    color: '#000000',
    opacity: '30',
    isShowDate: true,
    colorRGBA: '',
    dateFormatType: 0
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
    },
    setDtaeTypeFormat(state, value) {
      state.dateFormatType = value
    },
    customAllDate(state, colorvalue) {
      state.colorRGBA = colorvalue
      state.isShowDate = true
      state.dateFormatType = 0
    }
  },
  actions: { },
  getters: {
    dateColorRGBAValue: state => {
      return state.colorRGBA
    },
    dateIsShowBg: state => {
      return (state.isShowDate ? 'visible' : 'hidden')
    },
    dateFormatTypeValue: state => {
      return state.dateFormatType
    }
  }
}
export default module
