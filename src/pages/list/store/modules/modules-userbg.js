const module = {
  state: {
    type: 0
  },
  mutations: {
    changeType(state, val) {
      state.type = val
    }
  },
  getters: {
    userBgTypeChange: state => {
      let currentStyle = ''
      switch (state.type) {
        case 0:
          currentStyle = 'chat-bg-0'
          break
        case 1:
          currentStyle = 'chat-bg-1'
          break
        case 2:
          currentStyle = 'chat-bg-2'
          break
        case 3:
          currentStyle = 'chat-bg-3'
          break
        default:
      }
      return currentStyle
    }
  }
}
export default module

