

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
    <div class="checkTxt">
      <span class="title">聊天内容循环</span>
      <el-switch
        class="checkTxtSwitch"
        v-model="chatLoop"
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
        active-color="#409EFF"
        inactive-color="#dcdfe6">
      </el-switch>
      <span class="cueColor" v-if="chatPass">开启</span>
      <span class="cueColor" v-else>关闭</span>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 4,
      chatLoop: true,
      chatPass: true,
      colorInit: '#ffffff',
      colorList: [
        { color: '#cccccc' },
        { color: '#8F4040' },
        { color: '#4A3434' },
        { color: '#E09D9D' },
        { color: '#B00606' },
        { color: '#D27979' }
      ],
      value: '',
      options: [{ value: 0, label: '2017-03-23 15:23:3' }, { value: 1, label: '2017年1月23日 21:23:00' }],
      colorOpcity: 50
    }
  },
  computed: {
    isShowText: function() {
      return this.radio === 1
    }
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
.content-hr{
  margin-bottom: 5%;
}
.checkTxt {
  min-width: 255px;
  margin-left: 8%;
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

