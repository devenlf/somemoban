<template>
  <el-row class="logo-guide-background">
    <el-col :span="19" class="right-set-back">
      <div class="logo-back-show">
        <div class="logo-show">
          <template v-if="currentData===0">
            <div class="guide-box-logo">
                <div class="dot"></div>
                <div class="line" ></div>
                <div class="txt-box" >点击logo，在右侧菜单设置更换</div>
                <div class="next-btn" @click="goToNextPage">下一步</div>
            </div>
          </template>
          <template v-if="currentData===1">
            <div class="guide-box-code">
                <div class="dot"></div>
                <div class="line" ></div>
                <div class="txt-box" >点击二维码，在右侧菜单设置更换</div>
                <div class="next-btn" @click="goToNextPage">下一步</div>
            </div>
          </template>
           <template v-if="currentData===2">
            <div class="guide-box-banner">
                <div class="dot"></div>
                <div class="line" ></div>
                <div class="txt-box" >点击会议标题，在右侧菜单设置上传</div>
                <div class="next-btn" @click="goToNextPage">下一步</div>
            </div>
          </template>
          <template v-if="currentData===3">
            <div class="guide-box-bg">
                <div class="dot"></div>
                <div class="line" ></div>
                <div class="txt-box" >点击背景，在右侧菜单设置默认图片或更换自定义图片</div>
                <div class="next-btn" @click="goToNextPage">知道了</div>
            </div>
          </template>
        </div>
      </div>
    </el-col>
    <el-col  :span="5" class="left-set-back">
       <div class="logo-set"> </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: {
    currentData: Number
  },
  data() {
    return {}
  },
  created: function() {
    console.log(this.currentData)
  },
  methods: {
    goToNextPage() {
      this.$emit('change-current')
    }
  }
}
</script>
<style lang="scss">
.logo-guide-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  z-index: 900;
}
.right-set-back {
  display: block;
  position: relative;
}
.right-set-back-show {
  background: rgba(black, 0.5);
}

.logo-set {
  min-width: 255px;
  height: 100%;
  background: rgba(black, 0);
}

//样式LOGO
.guide-box-logo {
  .dot {
    width: 2vmin;
    height: 2vmin;
    border-radius: 1vmin;
    background: #fff600;
    position: absolute;
    top: 19vmin;
    left: 16vmin;
  }
  .line {
    width: 20vmin;
    height: 10vmin;
    border-bottom: 0.3vmin dashed #fff600;
    border-left: 0.3vmin dashed #fff600;
    position: absolute;
    top: 21.5vmin;
    left: 16.7vmin;
  }
  .txt-box {
    width: 50vmin;
    height: 7vmin;
    background: #fff600;
    border-radius: 1vmin;
    line-height: 7vmin;
    text-align: center;
    position: absolute;
    top: 28vmin;
    left: 38vmin;
    color: #970e00;
    font-size: 3vmin
  }
  .next-btn {
    width: 10vmin;
    height: 5vmin;
    border: 0.2vmin solid #fff600;
    border-radius: 1vmin;
    line-height: 5vmin;
    text-align: center;
    position: absolute;
    top: 28.9vmin;
    left: 90vmin;
    color: #fff600;
    cursor: pointer;
    font-size: 3vmin
  }
}

//样式code
.guide-box-code {
  .dot {
    width: 2vmin;
    height: 2vmin;
    border-radius: 1vmin;
    background: #fff600;
    position: absolute;
    top: 20vmin;
    right: 11vmin;
  }
  .line {
    width: 20vmin;
    height: 10vmin;
    border-bottom: 0.3vmin dashed #fff600;
    border-right: 0.3vmin dashed #fff600;
    position: absolute;
    top: 22.5vmin;
    right: 11.7vmin;
  }
  .txt-box {
    width: 50vmin;
    height: 7vmin;
    background: #fff600;
    border-radius: 1vmin;
    line-height: 7vmin;
    text-align: center;
    position: absolute;
    top: 29vmin;
    right: 33vmin;
    color: #970e00;
    font-size: 3vmin
  }
  .next-btn {
    width: 10vmin;
    height: 5vmin;
    border: 0.2vmin solid #fff600;
    border-radius: 1vmin;
    line-height: 5vmin;
    text-align: center;
    position: absolute;
    top: 29.9vmin;
    right: 86vmin;
    color: #fff600;
    cursor: pointer;
    font-size: 3vmin
  }
}

//样式banner
.guide-box-banner {
  .dot {
    width: 2vmin;
    height: 2vmin;
    border-radius: 1vmin;
    background: #fff600;
    position: absolute;
    top: 18vmin;
    left: 51vmin;
  }
  .line {
    width: 20vmin;
    height: 10vmin;
    border-bottom: 0.3vmin dashed #fff600;
    border-left: 0.3vmin dashed #fff600;
    position: absolute;
    top: 21vmin;
    left: 51.9vmin;
  }
  .txt-box {
    width: 50vmin;
    height: 7vmin;
    background: #fff600;
    border-radius: 1vmin;
    line-height: 7vmin;
    text-align: center;
    position: absolute;
    top: 28vmin;
    left: 74vmin;
    color: #970e00;
    font-size: 3vmin
  }
  .next-btn {
    width: 10vmin;
    height: 5vmin;
    border: 0.2vmin solid #fff600;
    border-radius: 1vmin;
    line-height: 5vmin;
    text-align: center;
    position: absolute;
    top: 29vmin;
    left: 126vmin;
    color: #fff600;
    cursor: pointer;
    font-size: 3vmin
  }
}

//样式bgImg
.guide-box-bg {
  .dot {
    width: 2vmin;
    height: 2vmin;
    border-radius: 1vmin;
    background: #fff600;
    position: absolute;
    top: 52vmin;
    left: 41vmin;
  }
  .line {
    width: 30vmin;
    height: 10vmin;
    border-top: 0.3vmin dashed #fff600;
    border-left: 0.3vmin dashed #fff600;
    position: absolute;
    top: 41vmin;
    left: 41.9vmin;
  }
  .txt-box {
    width: 50vmin;
    background: #fff600;
    border-radius: 1vmin;
    text-align: left;
    padding: 0.5vmin 1vmin;
    position: absolute;
    top: 38vmin;
    left: 74vmin;
    color: #970e00;
    font-size: 3vmin
  }
  .next-btn {
    width: 10vmin;
    height: 5vmin;
    border: 0.2vmin solid #fff600;
    border-radius: 1vmin;
    line-height: 5vmin;
    text-align: center;
    position: absolute;
    top: 39vmin;
    left: 128vmin;
    color: #fff600;
    cursor: pointer;
    font-size: 3vmin
  }
}
</style>

