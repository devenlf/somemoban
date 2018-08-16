<template>
  <el-row class="logo-guide-background">
    <el-col :span="19" class="right-set-back">
      <div class="logo-back-show">
        <div class="logo-show">
          <template v-if="currentData===0">
            <div class="guide-chat-box">
                <div class="dot"></div>
                <div class="line" ></div>
                <div class="txt-box" >点击聊天气泡，在右侧菜单设置更换样式</div>
                <div class="next-btn" @click="goToNextPage">下一步</div>
            </div>
          </template>
          <template v-if="currentData===1">
            <div class="guide-chat-user">
                <div class="dot"></div>
                <div class="line" ></div>
                <div class="txt-box" >点击头像，在右侧菜单选择头像形状</div>
                <div class="next-btn" @click="goToNextPage">下一步</div>
            </div>
          </template>
           <template v-if="currentData===2">
            <div class="guide-chat-name">
                <div class="dot"></div>
                <div class="line" ></div>
                <div class="txt-box" >点击用户名，在右侧菜单设置其颜色，透明度</div>
                <div class="next-btn" @click="goToNextPage">下一步</div>
            </div>
          </template>
          <template v-if="currentData===3">
            <div class="guide-chat-content">
                <div class="dot"></div>
                <div class="line" ></div>
                <div class="txt-box" >点击聊天内容，在右侧菜单进行设置</div>
                <div class="next-btn" @click="goToNextPage">下一步</div>
            </div>
          </template>

            <template v-if="currentData===4">
            <div class="guide-chat-date">
                <div class="dot"></div>
                <div class="line" ></div>
                <div class="txt-box" >点击时间，在右侧菜单设置其颜色、透明度及格式</div>
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
  z-index: 99;
}
.right-set-back {
  display: block;
  position: relative;
}

.logo-set {
  min-width: 255px;
  height: 100%;
  background: rgba(black, 0);
}

//样式LOGO
.guide-chat-box {
  .dot {
    width: 2vmin;
    height: 2vmin;
    border-radius: 1vmin;
    background: #fff600;
    position: absolute;
    top: 73vmin;
    left: 43vmin;
  }
  .line {
    width: 20vmin;
    height: 10vmin;
    border-bottom: 0.3vmin dashed #fff600;
    border-left: 0.3vmin dashed #fff600;
    position: absolute;
    top: 75.5vmin;
    left: 43.7vmin;
  }
  .txt-box {
    width: 56vmin;
    height: 7vmin;
    background: #fff600;
    border-radius: 1vmin;
    line-height: 7vmin;
    text-align: center;
    position: absolute;
    top: 82vmin;
    left: 64vmin;
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
    top: 82.9vmin;
    left: 122vmin;
    color: #fff600;
    cursor: pointer;
    font-size: 3vmin
  }
}

//样式user
.guide-chat-user {
  .dot {
    width: 2vmin;
    height: 2vmin;
    border-radius: 1vmin;
    background: #fff600;
    position: absolute;
    top: 33vmin;
    left: 42.8vmin;
  }
  .line {
    width: 20vmin;
    height: 5vmin;
    border-top: 0.3vmin dashed #fff600;
    border-right: 0.3vmin dashed #fff600;
    position: absolute;
    top: 34vmin;
    left: 45vmin;
  }
  .txt-box {
    width: 52vmin;
    height: 7vmin;
    background: #fff600;
    border-radius: 1vmin;
    line-height: 7vmin;
    text-align: center;
    position: absolute;
    top: 39.4vmin;
    left: 53vmin;
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
    top: 40vmin;
    left: 106vmin;
    color: #fff600;
    cursor: pointer;
    font-size: 3vmin
  }
}

//样式name
.guide-chat-name {
  .dot {
    width: 2vmin;
    height: 2vmin;
    border-radius: 1vmin;
    background: #fff600;
    position: absolute;
    top: 65.4vmin;
    left: 58.3vmin;
  }
  .line {
    width: 10vmin;
    height: 10vmin;
    border-bottom: 0.3vmin dashed #fff600;
    border-left: 0.3vmin dashed #fff600;
    position: absolute;
    top: 67.6vmin;
    left: 59vmin;
  }
  .txt-box {
    width: 54vmin;
    height: 7vmin;
    background: #fff600;
    border-radius: 1vmin;
    line-height: 7vmin;
    text-align: center;
    position: absolute;
    top: 74.5vmin;
    left: 70vmin;
    color: #970e00;
    font-size: 2.3vmin
  }
  .next-btn {
    width: 10vmin;
    height: 5vmin;
    border: 0.2vmin solid #fff600;
    border-radius: 1vmin;
    line-height: 5vmin;
    text-align: center;
    position: absolute;
    top: 75.3vmin;
    left: 125vmin;
    color: #fff600;
    cursor: pointer;
    font-size: 3vmin
  }
}

//样式chat-content
.guide-chat-content {
  .dot {
    width: 2vmin;
    height: 2vmin;
    border-radius: 1vmin;
    background: #fff600;
    position: absolute;
    top: 32vmin;
    left: 62vmin;
  }
  .line {
    width: 10vmin;
    height: 7vmin;
    border-top: 0.3vmin dashed #fff600;
    border-left: 0.3vmin dashed #fff600;
    position: absolute;
    top: 24vmin;
    left: 62.9vmin;
  }
  .txt-box {
    width: 50vmin;
    background: #fff600;
    border-radius: 1vmin;
    text-align: left;
    padding: 0.5vmin 1vmin;
    position: absolute;
    top: 22vmin;
    left: 74vmin;
    color: #970e00;
    font-size: 3vmin
  }
  .next-btn {
    width: 10vmin;
    height: 4vmin;
    border: 0.2vmin solid #fff600;
    border-radius: 1vmin;
    line-height: 4vmin;
    text-align: center;
    position: absolute;
    top: 22.5vmin;
    left: 128vmin;
    color: #fff600;
    cursor: pointer;
    font-size: 2.5vmin
  }
}

//样式chat-content
.guide-chat-date {
  .dot {
    width: 1.5vmin;
    height: 1.5vmin;
    border-radius: 1vmin;
    background: #fff600;
    position: absolute;
    top: 65vmin;
    left: 97.3vmin;
  }
  .line {
    width: 10vmin;
    height: 15vmin;
    border-bottom: 0.3vmin dashed #fff600;
    border-right: 0.3vmin dashed #fff600;
    position: absolute;
    top: 66.5vmin;
    left: 87.9vmin;
  }
  .txt-box {
    width: 56vmin;
    background: #fff600;
    border-radius: 1vmin;
    text-align: left;
    padding: 0.5vmin 1vmin;
    position: absolute;
    top: 79vmin;
    left: 29vmin;
    color: #970e00;
    font-size: 2.5vmin
  }
  .next-btn {
    width: 10vmin;
    height: 4vmin;
    border: 0.2vmin solid #fff600;
    border-radius: 1vmin;
    line-height: 4vmin;
    text-align: center;
    position: absolute;
    top: 79vmin;
    left: 18vmin;
    color: #fff600;
    cursor: pointer;
    font-size: 2.5vmin
  }
}
//样式
</style>

