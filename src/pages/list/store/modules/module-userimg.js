const module = {
  state: {
    isSquery: true,
    userImgIsShow: true
  },
  mutations: {
    changeuserImgActive(state, bool) {
      state.isSquery = bool
    },
    setIsShowuserImg(state, bool) {
      state.userImgIsShow = bool
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
