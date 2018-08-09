

<template>
  <div class="bgset">
    <div class="head"><span>时间设置</span></div>
    <div class="choseBg">
      <span class="title">显示时间消息</span>
      <span class="cueColor" v-if="isShowTopColor">显示</span>
      <span class="cueColor" v-else>隐藏</span>
      <el-switch
        v-model="isShowTopColor"
        active-color="#409EFF"
        inactive-color="#dcdfe6">
      </el-switch>
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
.chooseColor {
  width: 94%;
  margin: auto 10px;
  padding-top: 20px;
  min-width: 360px;
}
hr{
  margin-top: 5%;
}
.time-style{
  margin-top: 8%;
  margin-left: 8%;
  font-size: 13px;
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
.block-bar {
  margin-top: 2%;
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
</style>

