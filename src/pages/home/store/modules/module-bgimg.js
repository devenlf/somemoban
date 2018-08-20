const module = {
  state: {
    backgroundImg: 'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845005372851.jpg'
  },
  mutations: {
    changeBackgroundImg(state, url) {
      state.backgroundImg = url
    }
  },
  getters: {
    changeBackgroundImgValue: state => {
      return state.backgroundImg
    }
  }
}
export default module
