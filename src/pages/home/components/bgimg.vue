
<template>
  <div class="bgset">
    <div class="head"><span>大屏背景 设置</span></div>
    <div class="choseBg"><span>选择背景</span></div>
    <div class="block">
    <el-carousel  trigger="click" :autoplay="false">
    <el-carousel-item v-for="item in showAllTitleImg" :key="item.id">
      <template v-for="(data,index) in item">
        <div :key="index" class="dataBack">
          <img class="contentImg" src="../../../../static/image/code.png" alt="">
          <img class="contentDataImg" :src="data.img"  alt="">
        </div>
      </template>
    </el-carousel-item>
  </el-carousel>
  </div>
  <div class="upload-demo">
    <el-upload
        class="upload-demo-bg"
        action="https://jsonplaceholder.typicode.com/posts/"
        :file-list="fileList2"
        list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
  </div>
  </div>
</template>
<style lang="scss">
.el-carousel__item {
  width: 100%;
}
.dataBack {
  float: left;
  width: 20%;
  margin:0 2.5%;
  margin-top: 5%;
  position: relative;
  .contentImg {
    width: 100%;
  }
  .contentDataImg{
    position: absolute;
    top: 0px;
    width: 100%;
  }
}
.upload-demo-bg {
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
    height: 6%;
    padding: 8% 0 0 8%;
    font-size: 15px;
    color: #028fee;
  }
}
.el-carousel__arrow {
  width: 0px;
  height: 0px;
  display: none !important;
}
.is-active {
  .el-carousel__button {
    background: #028fee;
  }
}
.el-upload__tip {
  width: 92%;
  margin: 4% auto;
  text-align: center;
}
.el-carousel__button {
  width: 14px;
  height: 14px;
  background: #e1e1e1;
  border-radius: 7px;
}
.el-upload-list {
  width: 92%;
  margin: 4%;
}
.choseBg {
  width: 100%;
  height: 5%;
  background: #ededed;
  color: #2e323e;
  font-size: 14px;
  span {
    display: block;
    height: 100%;
    line-height: 230%;
    text-indent: 10%;
  }
}
.block {
  width: 92%;
  min-width: 255px;
  height: 25%;
  margin-left: 4%;
}
.el-carousel {
  height: 100%;
  width: 100%;
}
.el-carousel__container {
  height: 100%;
  width: 100%;
}
</style>

<script>
export default {
  data() {
    return {
      index: 0,
      showAllTitleImg: [
        [
          {
            img:
              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          },
          {
            img:
              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          },
          {
            img:
              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          },
          {
            img:
              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          },
          {
            img:
              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          },
          {
            img:
              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }
        ],
        [
          {
            img:
              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          },
          {
            img:
              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          },
          {
            img:
              'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
          }
        ]
      ],
      fileList2: []
    }
  },
  created: function() {},
  methods: {}
}
</script>