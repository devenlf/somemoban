

<template>
  <div class="bgset">
    <div class="head"><span>前景色 设置</span></div>
    <div class="choseBg">
      <span class="title">显示前景色</span>
      <el-switch
        v-model="isShowTopColor"
        active-color="#409EFF"
        inactive-color="#dcdfe6">
      </el-switch>
      <span class="cueColor" v-if="isShowTopColor">显示</span>
      <span class="cueColor" v-else>隐藏</span>
      </div>
      <div class="chooseColor">
          <template v-for="(color,index) in colorList">
            <div class="colorbox" :key="index" :style="{background:color.color}" @click="getColor(color)"></div>
          </template>
          <el-color-picker  @change="setColor()" class="colorbox el-icon-plus" v-model="colorInit"></el-color-picker>
          <div style="clear:both"></div>
      </div>
        <div class="block-bar">
          <span class="demonstration">透明度</span>
          <el-slider v-model="colorOpcity"></el-slider>
          <span class="opcityValue">{{formatTooltip(colorOpcity)}}</span>
          <div style="clear:both"></div>
        </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 4,
      isShowTopColor: true,
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
.el-upload {
  width: 100%;
  button {
    width: 80%;
  }
}
.bgset {
  width: 100%;
  height: 100%;
  background: #fafafa;
  box-shadow: -5px 0 9px 0 rgba(4, 0, 0, 0.17);
  overflow: hidden;
  .head {
    width: 100%;
    height: 4%;
    min-height: 40px;
    font-size: 15px;
    color: #028fee;
  }
}
.block-bar {
  margin-top: 200px;
}
.demonstration {
  float: left;
  height: 35px;
  line-height: 35px;
  margin-left: 8%;
}
.el-slider {
  width: 50%;
  float: left;
  margin-left: 8%;
}
.opcityValue{
  float: left;
  margin-top: 2%;
  margin-left: 7%
}
.choseBg {
  min-width: 255px;
  width: 100%;
  height: 40px;
  min-height: 40px;
  background: #ededed;
  color: #2e323e;
  font-size: 14px;
  span {
    padding-top: 1.2%;
    float: left;
  }
}
.cueColor {
  text-indent: 5% !important;
  font-size: 13px;
  color: #999;
  letter-spacing: 1px;
  margin: 1px;
}
.el-switch {
  margin-left: 30%;
  margin-top: 10px;
  float: left;
}
.el-color-picker {
  text-align: center;
  font-size: 36px;
}
.el-color-picker__color {
  display: none !important;
}
.el-color-picker__icon {
  display: none;
}
.el-color-picker__trigger {
  position: absolute;
  top: 0px;
  left: 0px;
}
.chooseColor {
  width: 94%;
  margin: auto 10px;
  padding-top: 20px;
  min-width: 360px;
}
.colorbox {
  width: 40px;
  height: 40px;
  float: left;
  margin-left: 4%;
  margin-right: 1%;
  margin-bottom: 4%;
  border-radius: 6px;
  border: 1px solid #d6d6d6;
}
</style>

