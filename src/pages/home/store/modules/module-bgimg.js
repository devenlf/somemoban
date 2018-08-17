const module = {
  state: {
    backgroundImg: process.env.FILE_DOMAIN + '/Uploads/Files/2015/12/08/0/635851845005372851.jpg'
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
