
<template>
  <div class="bgset">
    <div class="head"><span>聊天内容 设置</span></div>
    <div class="choseBg"><span>选择样式</span></div>
    <div class="block">
      <template v-for="(data,index) in imgInfo">
        <div :key="index">
          <p class="style-title">{{data.type}}</p>
          <img @click="getType(index)" :src="data.imgSrc" alt="">
        </div>
      </template>
  </div>
  </div>
</template>
<style lang="scss">
.bgset {
  width: 100%;
  height: 100%;
  min-width: 255px;
  background: #fafafa;
  box-shadow: -5px 0 9px 0 rgba(4, 0, 0, 0.17);
  // overflow: auto;
  .head {
    width: 100%;
    height: 4%;
    padding-top: 8%;
    font-size: 15px;
    color: #028fee;
  }
}

.choseBg {
  width: 100%;
  height: 5%;
  background: #ededed;
  color: #2e323e;
  font-size: 14px;
  vertical-align: middle;
  span {
    display: block;
    height: 100%;
    line-height: 230%;
    text-indent: 8%;
    font-weight: bold;
  }
  .cueColor {
    text-indent: 5% !important;
    font-size: 13px;
    color: #999;
    letter-spacing: 1px;
    margin-right: 3%;
    float: right !important;
  }
}

.block {
  width: 92%;
  height: 28%;
  margin-left: 4%;
}

.style-title {
  font-size: 1.2vmin;
}
</style>

<script>
import store from '../store'
export default {
  data() {
    return {
      index: 2,
      imgInfo: [
        { type: '默认', imgSrc: '../../../../static/image/chatListOne.png' },
        { type: '商务', imgSrc: '../../../../static/image/chatListTwo.png' },
        { type: '活泼', imgSrc: '../../../../static/image/chatListThree.png' },
        { type: '水墨中国', imgSrc: '../../../../static/image/chatListFour.png' }
      ]
    }
  },
  created: function() {},
  methods: {
    allComponent() {
      store.commit('setIsShowDate', false)
      store.commit('setIsShowuserImg', false)
      store.commit('setIsShowName', false)
    },
    getType(id) {
      switch (id) {
        case 0:
          store.commit('customAllContent', 'rgba(255, 255, 255, 1)')
          store.commit('customAllDate', 'rgba(255, 255, 255, 0.5)')
          store.commit('customAllName', 'rgba(255, 255, 255, 0.5)')
          this.allComponent()
          store.commit('customAllImg', false)
          break
        case 1:
          store.commit('customAllContent', 'rgba(255, 255, 255, 1)')
          store.commit('customAllDate', 'rgba(255, 255, 255, 0.5)')
          store.commit('customAllName', 'rgba(255, 255, 255, 0.5)')
          this.allComponent()
          store.commit('customAllImg', false)
          break
        case 2:
          store.commit('customAllContent', 'rgba(104, 129, 156, 1)')
          store.commit('customAllDate', 'rgba(104, 129, 156, 0.6)')
          store.commit('customAllName', 'rgba(104, 129, 156, 0.6)')
          this.allComponent()
          store.commit('customAllImg', true)
          break
        case 3:
          store.commit('customAllContent', 'rgba(172, 104, 106, 1)')
          store.commit('customAllDate', 'rgba(172, 104, 106, 0.6)')
          store.commit('customAllName', 'rgba(172, 104, 106, 0.6)')
          this.allComponent()
          store.commit('customAllImg', false)
          break
        default:
      }
      store.commit('changeType', id)
    }
  }
}
</script>