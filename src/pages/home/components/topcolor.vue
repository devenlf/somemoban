

<template>
  <div class="bgset">
    <div class="head"><span>前景色 设置</span></div>
    <div class="choseBg">
      <span class="title">显示前景色</span>
      <span class="cueColor" v-if="isShowTopColor">显示</span>
      <span class="cueColor" v-else>隐藏</span>
      <el-switch
        @change="changeIsShow"
        v-model="isShowTopColor"
        active-color="#409EFF"
        inactive-color="#dcdfe6">
      </el-switch>
      </div>
      <div class="chooseColor">
          <template v-for="(color,index) in colorList">
            <div class="colorbox" :key="index" :style="{background:color.color}" @click="changeColor(color)">
              <img src="../../../../static/image/user0.jpg" alt="">
            </div>
          </template>
          <div class="colorbox  addColor">
            <img src="../../../../static/image/user0.jpg" alt="">
               <span class="el-icon-plus"></span>
               <el-color-picker  @change="addColor()"  v-model="colorInit"></el-color-picker>
          </div>
       
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
import store from '../store'
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
  methods: {
    changeColor(color) {
      store.commit('setColorTop', color.color)
    },
    changeOpacity(value) {
      store.commit('setOpacityTop', value)
    },
    changeIsShow() {
      store.commit('setIsShowTop', this.isShowTopColor)
    },
    addColor() {
      const newColor = {}
      newColor.color = this.colorInit
      this.colorList.push(newColor)
    },
    formatTooltip(val) {
      this.changeOpacity(val)
      return val / 100
    }
  }
}
</script>
<style lang="scss">

.bgset {
  width: 100%;
  min-width: 255px;
  height: 100%;
  background: #fafafa;
  box-shadow: -5px 0 9px 0 rgba(4, 0, 0, 0.17);
  .head {
    width: 100%;
    height: 4%;
    font-weight: bold;
    min-height: 40px;
    font-size: 15px;
    color: #028fee;
  }
}
.block-bar {
  margin-top: 8vmin;
}
.demonstration {
  float: left;
  height: 35px;
  line-height: 35px;
  margin-left: 8%;
}
.el-slider {
  width: 40%;
  float: left;
  margin-left: 8%;
}
.opcityValue {
  float: left;
  margin-top: 2%;
  margin-left: 7%;
}
.choseBg {
  min-width: 255px;
  font-weight: bold;
  width: 100%;
  height: 20px;;
  min-height: 2vmin;
  background: #ededed;
  color: #2e323e;
  padding: .8vmin 0;
  span {
    float: left;
  }
}
.cueColor {
  text-indent: 5% !important;
  font-size: 13px;
  margin-top: -.2%;
  color: #999 !important;
  letter-spacing: 1px;
  float: right !important;
  margin-right: 3vmin;
}
.el-switch {
  float: right;
}

.addColor {
  position: relative;

  span {
    position: absolute;
    z-index: 90;
    top: 0px;
    left: 0px;
    font-size: 200%;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
  }
  .el-color-picker {
    opacity: 0;
    width: 100%;
    height: 90%;
    display: block;
    position: absolute;
    z-index: 100;
    top: 0;
  }
  .el-color-picker__trigger {
    width: 100%;
    height: 100%;
    display: block;
  }
}

.chooseColor {
  width: 94%;
  padding-top: 3vmin;
  margin-left: 4%;
}
.colorbox {
  width: 12% !important;
  font-size: 2vmin;
  font-weight: bold;
  color: #ccc;
  float: left;
  margin-left: 2%;
  margin-right: 1%;
  margin-bottom: 4%;
  border-radius: 6px;
  border: 1px solid #d6d6d6;
  img {
    width: 100%;
    display: block;
    opacity: 0;
  }
}
</style>

