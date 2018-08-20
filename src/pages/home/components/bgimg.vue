
<template>
  <div class="bgset">
    <div class="head"><span>大屏背景 设置</span></div>
    <div class="choseBg"><span>选择背景</span></div>
    <div class="block">
    <el-carousel  trigger="click" :autoplay="false">
    <el-carousel-item v-for="(item,index1) in listShowAllTitleImg" :key="item.id">
      <template v-for="(data,index2) in item">
        <div :key="index2" class="dataBack" :class="{'isClickStyleImg':isChooseImg(index1,index2)}" @click="addChooseStyleIndex(index1,index2,data)" >
          <img class="contentImg" src="../../../../static/image/code.png" alt="">
          <img class="contentDataImg" :src="data"  alt="" @click="changeBackImg(data)">
        </div>
      </template>
    </el-carousel-item>
  </el-carousel>
  </div>
  <div class="upload-demo">
    <el-upload
        class="upload-demo-bg"
        :before-upload="beforeAvatarUpload"
        :on-error="uploadError"
        :on-success="logoUploadSuccess"
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
  margin: 0 1.5%;
  margin-top: 5%;
  position: relative;
  border: 1.5px solid #ffffff;
  border-radius: 5px;
  .contentImg {
    width: 90%;
    margin-left: 5%;
    margin-top: 5%;
  }
  .contentDataImg {
    position: absolute;
    z-index: 2;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
  }
}
.upload-demo-bg {
  width: 100%;
  button {
    width: 80% !important;
  }
}
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
  .head {
    width: 100%;
    height: 4%;
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
  margin-top: 1vmin;
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
.el-button {
  padding: 1.2vmin 0;
}
.isClickStyleImg {
  border: 1.5px solid #028fee;
  border-radius: 5px;
}
.choseBg {
  width: 100%;
  height: 5%;
  vertical-align: middle;
  background: #ededed;
  span {
    display: block;
    height: 100%;
    text-indent: 8%;
    color: #2e323e;
    font-size: 1.4vmin;
  }
}
.block {
  width: 92%;
  min-width: 255px;
  min-height: 180px;
  height: 23%;
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
import store from '../store'
export default {
  data() {
    return {
      index: 0,
      isUpload: false,
      currentImgBackground: 0,
      showAllTitleImg: [
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845005372851.jpg',
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845014727807.jpeg',
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845021744437.jpg',
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845028448221.jpg',
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845040297477.jpg',
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845048716889.jpg',
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845055733059.jpg',
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845099701593.png',
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845105001824.jpg',
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845118879149.jpg',
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845126362846.jpg',
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845140706204.jpg',
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845147566492.jpg',
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845153491654.jpg',
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845158792378.jpg',
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845171888937.jpg',
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845180464354.jpg',
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845194186360.jpg',
        'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845206662979.jpg',
        'https://file.31huiyi.com/Uploads/Files/2016/01/13/0/635882785534746419.png',
        'https://file.31huiyi.com/Uploads/Files/2016/01/13/0/635882785806258244.png'
      ],
      fileList2: []
    }
  },

  computed: {
    listShowAllTitleImg: function() {
      return this.createNewListImg(this.showAllTitleImg)
    }
  },
  methods: {
    changeBackImg(value) {
      store.commit('changeBackgroundImg', value)
    },
    createNewListImg(array) {
      const newArray = []
      const len = array.length
      const lineNum = len / 8 === 0 ? len / 8 : Math.floor(len / 8 + 1)
      for (let i = 0; i < lineNum; i++) {
        const temp = array.slice(i * 8, i * 8 + 8)
        newArray.push(temp)
      }
      return newArray
    },
    beforeAvatarUpload(file) {
      console.log(file)
    },
    uploadError() {
      console.log('上传失败')
    },
    logoUploadSuccess() {
      if (!this.isUpload) {
        console.log('https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845005372851.jpg')
        this.showAllTitleImg.unshift('https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845005372851.jpg')
        this.isUpload = true
      } else {
        this.showAllTitleImg[0] = 'https://file.31huiyi.com/Uploads/Files/2015/12/08/0/635851845005372851.jpg'
      }
      console.log('上传成功')
    },
    addChooseStyleIndex(index1, index2, data) {
      const index = index1 * 8 + index2
      console.log(data)
      this.currentImgBackground = index
    },
    isChooseImg(index1, index2) {
      const index = index1 * 8 + index2
      return this.currentImgBackground === index
    }
  }
}
</script>