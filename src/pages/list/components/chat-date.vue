

<template>
  <div class="bgset">
    <div class="head"><span>时间设置</span></div>
    <div class="choseBg data-bg">
      <span class="title">显示时间消息</span>
      <span class="cueColor" v-if="isShowDate">显示</span>
      <span class="cueColor" v-else>隐藏</span>
      <el-switch
        v-model="isShowDate"
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
export default {
  data() {
    return {
      index: 4,
      isShowDate: true,
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
  width: 98%;
  margin: auto 10px;
  padding-top: 20px;
  // min-width: 260px;
}
.colorbox {
  width: 13% !important;
  min-width: 35px;
  min-height: 35px;
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
// .colorbox {
//   width: 40px;
//   height: 40px;
//   float: left;
//   margin-left: 4%;
//   margin-right: 1%;
//   margin-bottom: 4%;
//   border-radius: 6px;
//   border: 1px solid #d6d6d6;
// }
// .el-color-picker {
//   text-align: center;
//   font-size: 36px;
// }
// .el-color-picker__color {
//   display: none !important;
// }
// .el-color-picker__icon {
//   display: none;
// }
// .el-color-picker__trigger {
//   position: absolute;
//   top: 0px;
//   left: 0px;
// }
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

