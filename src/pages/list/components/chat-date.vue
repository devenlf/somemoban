

<template>
  <div class="bgset">
    <div class="head"><span>时间设置</span></div>
    <div class="choseBg data-bg">
      <span class="title">显示时间消息</span>
      <span class="cueColor" v-if="isShowDate">显示</span>
      <span class="cueColor" v-else>隐藏</span>
      <el-switch
        v-model="isShowDate"
        @change="changeDateIsShow"
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
        <hr>
        <p class="time-style">选择时间格式</p>
        <el-select v-model="value" >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
  </div>
</template>
<script>
import store from '../store'
export default {
  data() {
    return {
      index: 4,
      isShowDate: true,
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
      store.commit('setColorDate', data.color)
    },
    formatTooltip(val) {
      store.commit('setOpacityDate', val)
      return val / 100
    },
    changeDateIsShow() {
      store.commit('setIsShowDate', this.isShowDate)
    }
  }
}
</script>

<style lang="scss">

hr{
  margin-top: 5%;
}
.time-style{
  margin-top: 8%;
  margin-left: 8%;
  font-size: 13px;
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
.block-bar {
  margin-top: 2%;
}
.demonstration {
  float: left;
  font-size: 1.2vmin;
  height: 1vmin;
  margin-top: 4%;
  margin-left: 8%;
}
.el-slider {
  width: 45%;
  float: left;
  margin-left: 8%;
}
.opcityValue{
  float: left;
  margin-top: 4%;
  margin-left: 6%;
  font-size: 1.2vmin;
}
</style>

