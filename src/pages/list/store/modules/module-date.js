import hexToRgba from '@/utils/hexToRgba.js'
const module = {
  state: {
    color: '#ffffff',
    opacity: '0',
    isShowDate: '',
    colorRGBA: '',
    dateFormatType: 'YYYY-MM-DD HH:mm:ss'
  },
  mutations: {
    setColorDate(state, newColor) {
      state.color = newColor
      state.colorRGBA = hexToRgba(newColor, state.opacity)
    },
    setOpacityDate(state, newOpacity) {
      state.opacity = newOpacity
      state.colorRGBA = hexToRgba(state.color, newOpacity)
    },
    setIsShowDate(state, bool) {
      state.isShowDate = bool
    },
    setDtaeTypeFormat(state, value) {
      if (value) {
        state.dateFormatType = 'YYYY年MM月DD日 HH:mm:ss'
      } else {
        state.dateFormatType = 'YYYY-MM-DD HH:mm:ss'
      }
    },
    customAllDate(state, colorvalue) {
      state.colorRGBA = colorvalue
      state.isShowDate = true
      state.dateFormatType = 0
    }
  },
  actions: {},
  getters: {
    dateColorRGBAValue: state => {
      return state.colorRGBA
    },
    dateIsShowBg: state => {
      return (!state.isShowDate ? 'visible' : 'hidden')
    },
    dateFormatTypeValue: state => {
      if (state.dateFormatType === 'YYYY-MM-DD HH:mm:ss') {
        return 0
      } else {
        return 1
      }
    }
  }
}
export default module
