const module = {
  state: {
    isSquery: true,
    userImgIsShow: ''
  },
  mutations: {
    changeuserImgActive(state, bool) {
      state.isSquery = bool
    },
    setIsShowuserImg(state, bool) {
      state.userImgIsShow = bool
    },
    customAllImg(state, bool) {
      state.isSquery = bool
      state.userImgIsShow = true
    }
  },
  getters: {
    userImgShaepe: state => {
      return state.isSquery
    },
    userImgIsShowBg: state => {
      return (state.userImgIsShow ? 'visible' : 'hidden')
    }
  }
}
export default module
