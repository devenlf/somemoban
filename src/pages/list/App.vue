<template>
<div class="content-back">
  <el-row >
  <el-col :span="19">
    <div class="grid-content bg-left">
    <div class="bgimgby">
      <img class="bgimg" src="../../../static/image/635869062716808792.jpg" alt="">
    </div>
    <div class="logo">
      <img class="logoimg" src="../../../static/image/636402237338100756.png" alt="">
    </div>
    <div class="code" >
        <img class="bgimg" src="../../../static/image/code.png" alt="">
    </div>
       <div class="banner" >
      <h2>{{bannerText.titletxt}}</h2>
      <span>{{bannerText.carbon}}</span>
    </div>
    <div class="foreground" >
    </div>
    <div class="chat-conenet-all">
      <template v-for="(data,index) in chatData">
        <div class="chat-box" :class="setStyleType" :key="index">
        <div class="chat-bg" :class="{'styleborder':isShow(0),'square':isShow(0)}"  @click="addClass(0)"></div>
        <div class="user-img" :class="{'styleborder':isShow(1)}"  @click="addClass(1)">
          <img :src="data.userimg" alt="">
        </div>
        <div class="user-name" :class="{'styleborder':isShow(2)}"  @click="addClass(2)">
          <span>{{data.username}}</span>
        </div>
        <div class="chat-content" :class="{'styleborder':isShow(3)}"  @click="addClass(3)">
          <span>{{data.chatContent}}</span>
        </div>
        <div class="chat-date" :class="{'styleborder':isShow(4)}"  @click="addClass(4)">
          <span>{{data.date}}</span>
        </div>
        </div>
      </template>
    </div>
    </div></el-col>
  <el-col :span="5"><div class="grid-content bg-right">
      <v-chatBgSet v-show="isShow(0)"></v-chatBgSet>
      <v-chatUserImg v-show="isShow(1)"></v-chatUserImg>
      <v-chatUserName v-show="isShow(2)"></v-chatUserName>
      <v-chatContent v-show="isShow(3)"></v-chatContent>
      <v-chatDate v-show="isShow(4)"></v-chatDate>
    </div></el-col>
  </el-row>
  <V-guideLogo v-if="isGuideing" @change-current="changeData" :currentData="current"/>
</div>
</template>


<script>
import chatBgSet from './components/chat-bg-set'
import chatUserImg from './components/chat-user-img'
import chatUserName from './components/chat-user-name'
import chatContent from './components/chat-content'
import chatDate from './components/chat-date'
import guideLogo from './guide-page/guide-page'

export default {
  data() {
    return {
      current: 0,
      isGuideing: true,
      bannerText: {
        titletxt: '2015法拉利环球国际展-上海站',
        carbon: '热烈欢迎来自五湖四海的广大车友们'
      },
      type: 0,
      chatData: [
        {
          userimg: '../../../static/image/user0.jpg',
          username: '王大颗',
          date: '2017-03-27 16:25:01',
          chatContent: '我是上墙小能手'
        },
        {
          userimg: '../../../static/image/user1.jpg',
          username: 'Vicky',
          date: '2017-03-27 16:25:01',
          chatContent: '感谢主办方的盛情款待~'
        },
        {
          userimg: '../../../static/image/user2.jpg',
          username: '朱朱',
          date: '2017-03-27 16:25:01',
          chatContent: '预告预告，前方高能！'
        }
      ]
    }
  },
  created: function() {},
  methods: {
    addClass(index) {
      this.current = index
    },
    isShow(id) {
      return this.current === id
    },
    changeData(num) {
      console.log(this.current)
      if (this.current >= 4) {
        this.isGuideing = false
        return
      }
      this.current++
    }
  },
  computed: {
    setStyleType() {
      let currentStyle = ''
      switch (this.type) {
        case 0:
          currentStyle = 'chat-bg-0'
          break
        case 1:
          currentStyle = 'chat-bg-1'
          break
        case 2:
          currentStyle = 'chat-bg-2'
          break
        case 3:
          currentStyle = 'chat-bg-3'
          break
        default:
      }
      return currentStyle
    }
  },
  components: {
    'v-chatBgSet': chatBgSet,
    'v-chatUserImg': chatUserImg,
    'v-chatUserName': chatUserName,
    'v-chatContent': chatContent,
    'v-chatDate': chatDate,
    'V-guideLogo': guideLogo
  }
}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.content-back{
  height: 100vh;
  width: 100vw;
  position: relative;
}
.chat-bg-0 {
  .chat-bg {
    // border: 2px solid rgba($color: #fff600, $alpha: 0) !important;
    border-radius: 5vw;
    background: rgba($color: white, $alpha: 0.2);
    height: 90%;
    width: 100%;
  }
  .user-img {
    border-radius: 50%;
  }
  .chat-date {
    color: rgba(#ffffff, 0.7);
  }
  color: #ffffff;
}

.chat-bg-1 {
  .chat-bg {
    height: 90%;
    width: 100%;
    background: rgba($color: white, $alpha: 0.2);
  }
  .chat-date {
    color: rgba(#ffffff, 0.7);
  }
  color: #ffffff;
}

.chat-bg-2 {
  .chat-bg {
    height: 90%;
    width: 100%;
    border-radius: 5vw;
    background: rgba($color: #efefef, $alpha: 0.9);
  }
  .user-img {
    border-radius: 50%;
  }
  color: #768ca5;
}

.chat-bg-3 {
  .chat-bg {
    position: absolute;
    background: rgba($color: #efefef, $alpha: 0.9);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 60%;
    width: 78%;
    height: 80%;
    border-radius: 2vmin;
  }
  .chat-bg:before {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    right: 99.9%;
    top: 36%;
    border-top: 1.2vh solid transparent;
    border-right: 1.8vh solid rgba($color: #efefef, $alpha: 1);
    z-index: 100;
    border-bottom: 1.2vh solid transparent;
  }

  .user-name {
    left: 23%;
  }
  .chat-content {
    left: 23%;
  }
  .user-img {
    border-radius: 50%;
  }
  color: #768ca5;
}

.chat-box {
  cursor: pointer;
  height: 30%;
  width: 100%;
  top: 0.5%;
  margin-top: 1.5%;
  position: relative;
  border: 2px solid rgba($color: #fff600, $alpha: 0) !important;
}

.user-img {
  cursor: pointer;
  position: absolute;
  width: 10vmin;
  transform: translate(-50%, -50%);
  top: 47%;
  left: 8%;
  overflow: hidden;
  border: 2px solid rgba($color: #fff600, $alpha: 0) !important;
  img {
    width: 100%;
    display: block;
  }
}

.user-name {
  cursor: pointer;
  position: absolute;
  border: 2px solid rgba($color: #fff600, $alpha: 0) !important;
  width: 20%;
  top: 20%;
  left: 16%;
  span {
    font-size: 1.4vmin;
    height: 100%;
    display: block;
    line-height: 100%;
    font-family: "MicrosoftYaHei";
    font-weight: bold;
  }
}

.chat-content {
  cursor: pointer;
  position: absolute;
  width: 62%;
  top: 42%;
  left: 16%;
  border: 2px solid rgba($color: #ffffff, $alpha: 0) !important;
  span {
    font-size: 3.6vmin;
    margin-top: 0px;
    font-family: "MicrosoftYaHei";
    margin: 0px;
  }
}

.chat-date {
  cursor: pointer;
  border: 2px solid rgba($color: #fff600, $alpha: 0) !important;
  position: absolute;
  width: 30%;
  top: 20%;
  left: 62%;
  span {
    font-size: 1.4vmin;
    height: 100%;
    display: block;
    line-height: 1.4vmin;
    font-family: "MicrosoftYaHei";
    text-align: right;
  }
}

.styleborder {
  border: 2px solid rgba($color: #fff600, $alpha: 1) !important;
}
.square:before {
  border-right: 1.8vmin solid rgba($color: #fff600, $alpha: 1) !important;
}
.el-row {
  height: 100%;
  .el-col {
    height: 100%;
  }
}
.logo {
  position: absolute;
  width: 12%;
  top: 10%;
  left: 6%;
  img {
    width: 100%;
  }
}
.foreground {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  width: 60%;
  height: 40%;
}

.chat-conenet-all {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 60%;
  height: 50%;
  z-index: 1;
}

.banner {
  position: absolute;
  transform: translate(-50%, -50%);
  width: 56%;
  height: 8%;
  top: 12%;
  left: 50%;
  text-align: center;
  h2 {
    margin: 0px;
    color: white;
    font-size: 3。2vmin;
  }
  span {
    display: block;
    margin-top: 0.2rem;
    color: #999;
    font-size: 2vmin;
  }
}
.bgimgby {
  height: 90%;
  width: 94%;
  background: black;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  img {
    width: 100%;
    height: 100%;
    width: 100%;
  }
}
.code {
  position: absolute;
  width: 5%;
  left: 90%;
  top: 10%;
  border: 1px dashed white;
  img {
    display: block;
    margin: 10%;
    width: 80%;
  }
}
.bg-left {
  display: block;
  height: 100%;
  position: relative;
}
.bg-right {
  background: darkcyan;
  height: 100%;
}
</style>

