

<template>
  <div class="bgset">
    <div class="head"><span>用户名 设置</span></div>
    <div class="choseBg user-name-bg">
      <span class="title">显示用户名</span>
      <span class="cueColor" v-if="isShowUsername">显示</span>
      <span class="cueColor" v-else>隐藏</span>
      <el-switch
        v-model="isShowUsername"
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
               <el-color-picker  @change="setColor()"  v-model="colorInit"></el-color-picker>
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
export default {
  data() {
    return {
      isShowUsername: true,
      colorInit: '#ffffff',
      colorList: [
        { color: '#cccccc' },
        { color: '#8F4040' },
        { color: '#4A3434' },
        { color: '#E09D9D' },
        { color: '#B00606' },
        { color: '#D27979' }
      ],
      colorOpcity: 50
    }
  },
  computed: {

  },
  created: function() {},
  methods: {
    getColor(data) {
      console.log(data)
    },
    setColor() {
      console.log(12313)
    },
    formatTooltip(val) {
      return val / 100
    }
  }
}
</script>
<style lang="scss">

</style>

