

<template>
  <div class="bgset">
    <div class="head"><span>聊天内容 设置</span></div>
    <div class="choseBg">
      <span class="title">聊天内容文字颜色</span>
      </div>
       <div class="chooseColor">
         <template v-for="(color,index) in colorList">
            <div class="colorbox" :key="index" :style="{background:color.color}" @click="getColor(color)">
              <img src="../../../../static/image/user0.jpg" alt="">
            </div>
          </template>
          <div class="colorbox  addColor">
            <img src="../../../../static/image/user0.jpg" alt="">
               <span class="el-icon-plus"></span>
               <el-color-picker  @change="addOrChangeColor(colorInit)"  v-model="colorInit"></el-color-picker>
          </div>
          <div style="clear:both"></div>
      </div>
        <div class="block-bar">
          <span class="demonstration">透明度</span>
          <el-slider v-model="colorOpcity"></el-slider>
          <span class="opcityValue">{{formatTooltip(colorOpcity)}}</span>
          <div style="clear:both"></div>
        </div>
        <hr class="content-hr">
    <div class="checkTxt">
      <span class="title">聊天内容循环</span>
      <el-switch
        class="checkTxtSwitch"
        v-model="chatLoop"
        @change="setContentLoop"
        active-color="#409EFF"
        inactive-color="#dcdfe6">
      </el-switch>
      <span class="cueColor" v-if="chatLoop">开启</span>
      <span class="cueColor" v-else>关闭</span>
      </div>
       <div class="checkTxt">
      <span class="title">聊天内容审核</span>
      <el-switch
        class="checkTxtSwitch"
        v-model="chatPass"
        @change="setcontentPass"
        active-color="#409EFF"
        inactive-color="#dcdfe6">
      </el-switch>
      <span class="cueColor" v-if="chatPass">开启</span>
      <span class="cueColor" v-else>关闭</span>
      </div>
  </div>
</template>
<script>
import store from '../store'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      index: 4,
      chatLoop: store.state.moduleContent.chatLoop,
      chatPass: store.state.moduleContent.chatPass,
      colorInit: '#ffffff',
      colorList: [
        { color: '#ffffff' },
        { color: '#3BA6D7' },
        { color: '#30BD76' },
        { color: '#FC8E2C' },
        { color: '#FD5F7D' },
        { color: '#ACAFB7' },
        { color: '#A9F1A4' },
        { color: '#C663FF' },
        { color: '#60D7EC' },
        { color: '#028FEE' },
        { color: '#8864FF' },
        { color: '#7683A4' },
        { color: '#FFAA94' },
        { color: '#FFE361' },
        { color: '#F54C4C' }
      ],
      value: '',
      colorOpcity: 50
    }
  },
  computed: {
    isShowText: function() {
      return this.radio === 1
    },
    ...mapGetters(['setContentPassValue', 'setContentLoopValue'])
  },
  created: function() {},
  methods: {
    getColor(data) {
      store.commit('setColorContent', data.color)
    },
    formatTooltip(val) {
      store.commit('setOpacityContent', val)
      return val / 100
    },
    addOrChangeColor(value) {
      if (value) {
        store.commit('setColorContent', value)
      }
    },
    setcontentPass() {
      store.commit('setContentPass', this.chatPass)
    },
    setContentLoop() {
      store.commit('setContentLoop', this.chatLoop)
    }
  }
}
</script>
<style lang="scss">
.content-hr{
  margin-bottom: 5%;
}
.checkTxt {
  text-indent: 8%;
  width: 100%;
  height: 40px;
  min-height: 40px;
  color: #2e323e;
  font-size: 14px;
  span {
    padding-top: 3.2%;
    float: left;
    font-size: 12px;
    font-weight: bold;
  }
  .cueColor {
  text-indent: 5% !important;
  font-size: 12px;
  color: #999;
  letter-spacing: 1px;
  margin: 1px;
  float: left !important;
}
}
.checkTxtSwitch {
  margin-left: 8%;
  margin-top: 10px;
  float: left;
}

</style>

