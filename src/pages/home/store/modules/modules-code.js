const module = {
  state: {
    codeImg: '',
    codeIsShow: ''
  },
  mutations: {
    changeCodeImg(state, imgName) {
      state.codeImg = imgName
    },
    changeCodeIsShow(state, bool) {
      state.codeIsShow = bool
    }
  },
  getters: {
    changeCodeImgValue: state => {
      return state.codeImg
    },
    changeCodeIsShowValue: state => {
      return state.codeIsShow ? 'visible' : 'hidden'
    }
  }
}
export default module
