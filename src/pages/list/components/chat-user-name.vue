

<template>
  <div class="bgset">
    <div class="head"><span>用户名 设置</span></div>
    <div class="choseBg user-name-bg">
      <span class="title">显示用户名</span>
      <span class="cueColor" v-if="isShowUsername">显示</span>
      <span class="cueColor" v-else>隐藏</span>
      <el-switch
        v-model="isShowUsername"
        @change="userNameIsShow"
        active-color="#409EFF"
        inactive-color="#dcdfe6">
      </el-switch>
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

  </div>
</template>
<script>
import store from '../store'
export default {
  data() {
    return {
      isShowUsername: true,
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
      colorOpcity: 50
    }
  },
  computed: {},
  created: function() {},
  methods: {
    getColor(data) {
      store.commit('setColorName', data.color)
    },
    userNameIsShow() {
      store.commit('setIsShowName', this.isShowUsername)
    },
    formatTooltip(val) {
      store.commit('setOpacityName', val)
      return val / 100
    },
    addOrChangeColor(value) {
      if (value) {
        store.commit('setColorName', value)
      }
    }
  }
}
</script>
<style lang="scss">
</style>

