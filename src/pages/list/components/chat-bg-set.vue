
<template>
  <div class="bgset">
    <div class="head"><span>聊天内容 设置</span></div>
    <div class="choseBg"><span>选择样式</span></div>
    <div class="block">
      <template v-for="(data,index) in imgInfo">
        <div :key="index">
          <p>{{data.type}}</p>
          <img :src="data.imgSrc" alt="">
        </div>
      </template>
  </div>
  </div>
</template>
<style lang="scss">
.bgset {
  width: 100%;
  height: 100%;
  background: #fafafa;
  box-shadow: -5px 0 9px 0 rgba(4, 0, 0, 0.17);
  overflow: hidden;
  .head {
    width: 100%;
    height: 6%;
    padding: 8% 0 0 8%;
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
  span {
    display: block;
    height: 100%;
    line-height: 230%;
    text-indent: 10%;
    font-weight: bold;
  }
}

.block {
  width: 92%;
  height: 28%;
  margin-left: 4%;
}

</style>

<script>
export default {
  data() {
    return {
      index: 0,
      imgInfo: [
        { type: '默认', imgSrc: '../../../../static/image/chatListOne.png' },
        { type: '商务', imgSrc: '../../../../static/image/chatListTwo.png' },
        { type: '活泼', imgSrc: '../../../../static/image/chatListThree.png' },
        { type: '水墨中国', imgSrc: '../../../../static/image/chatListFour.png' }

      ]
    }
  },
  created: function() {},
  methods: {}
}
</script>