

<template>
  <div class="bgset">
    <div class="head"><span>Logo 设置</span></div>
    <div class="choseBg">
      <span class="title">显示logo</span>
      <el-switch
        v-model="isShowTopColor"
        active-color="#409EFF"
        inactive-color="#dcdfe6">
      </el-switch>
      <span class="cueColor" v-if="isShowTopColor">显示</span>
      <span class="cueColor" v-else>隐藏</span>
      </div>
       <div class="up-banner-bg">
        <el-upload
            class="upload-demo-logo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="fileList2"
            list-type="picture">
        <el-button size="small" type="primary">更改</el-button>
        <div slot="tip" class="el-upload__tip_code">支持格式：png，jpg，gif，logo</div>
        <div slot="tip" class="el-upload__tip_code">上传尺寸：190px*96px</div>
        <div slot="tip" class="el-upload__tip_code">图片大小：500KB以内</div>       
         </el-upload>
        </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      index: 4,
      isShowTopColor: true,
      radio: 1,
      titletxt: '',
      carbon: '',
      fileList2: [
        {
          name: 'food.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        },
        {
          name: 'food2.jpeg',
          url:
            'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }
      ]
    }
  },
  computed: {
    isShowText: function() {
      return this.radio === 1
    }
  },
  created: function() {},
  methods: {}
}
</script>
<style lang="scss">
.upload-demo-logo {
  margin-top: 10px;
  height: 120px;
  width: 90%;
  margin-left: 4%;
  background: rgba(0, 0, 0, 0.57);
  button {
    width: 50% !important;
    margin-top: 38px;
    margin-bottom: 50%;
  }
  .el-upload__tip_code {
    width: 100%;
    font-size: 13px;
  }
  .el-upload{
    height: 120px;
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
.el-input {
  width: 80%;
  margin-left: 8%;
  margin-top: 3%;
}
.el-radio {
  margin-bottom: 8%;
  margin-top: 3%;
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
.el-radio-group {
  padding-left: 8%;
}
.banner-type {
  width: 100%;
  p {
    font-size: 14px;
    color: #333333;
    text-indent: 8%;
  }
}
</style>

