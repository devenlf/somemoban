
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
          <img class="contentDataImg" :src="data.img"  alt="" @click="changeBackImg(data.img)">
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
        <el-button size="small" type="primary">上传自定义图片</el-button>
        <div slot="tip" class="el-upload__tip">支持格式：png，jpg，jpeg，gif</div>
        <div slot="tip" class="el-upload__tip">背景尺寸：1920px*1080px</div>
        <div slot="tip" class="el-upload__tip">背景大小：1MB以内</div>
</el-upload>
  </div>
  </div>
</template>
<style lang="scss">
.el-carousel__item {
  background: white;
  width: 100%;
}
.dataBack {
  float: left;
  width: 20%;
  margin: 0 2.5%;
  margin-top: 5%;
  position: relative;
  .contentImg {
    width: 100%;
  }
  .contentDataImg {
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
  // overflow: hidden;
  .head {
    width: 100%;
    height: 6%;
    padding-top: 8%;
    color: #028fee;
    span {
      margin-left: 8%;
      font-size: 1.6vmin;
    }
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
  width: 90%;
  margin: 2% 10%;
  text-align: left;
}
.el-upload {
  margin-bottom: 1vmin;
  margin-top: 1vmin
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
  span {
    display: block;
    height: 100%;
    text-indent: 8%;
    color: #2E323E;
    font-size: 1.4vmin
  }
}
.block {
  width: 92%;
  min-width: 255px;
  min-height: 180px;
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
// import store from '../store'
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
  methods: {
    changeBackImg(value) {
      // store.commit('setIsShowTop',va)
    }
  }
}
</script>