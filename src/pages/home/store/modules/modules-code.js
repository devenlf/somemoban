const module = {
  state: {
    codeImg: 'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845005372851.jpg',
    codeIsShow: true
  },
  mutations: {
    changeCodeImg(state, imgName) {
      state.codeImg = imgName
    },
    changeCodeIsShow(state, bool) {
      console.log(bool)
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
