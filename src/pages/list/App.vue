<template>
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
        <div class="chat-bg" :class="{'styleborder':isShow(0)}"  @click="addClass(0)"></div>
        <div class="user-img" :class="{'styleborder':isShow(1)}"  @click="addClass(1)">
          <img :src="data.userimg" alt="">
        </div>
        <div class="user-name" :class="{'styleborder':isShow(2)}"  @click="addClass(2)">
          <span>{{data.username}}</span>
        </div>
        <div class="chat-content" :class="{'styleborder':isShow(3)}"  @click="addClass(3)">
          <p>{{data.chatContent}}</p>
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
</template>


<script>
import chatBgSet from './components/chat-bg-set'
import chatUserImg from './components/chat-user-img'
import chatUserName from './components/chat-user-name'
import chatContent from './components/chat-content'
import chatDate from './components/chat-date'

export default {
  data() {
    return {
      current: 0,
      bannerText: {
        titletxt: '1',
        carbon: '2'
      },
      type: 0,
      chatData: [
        {
          userimg: '../../../static/image/user0.jpg',
          username: '王大壮',
          date: '2018-11-1',
          chatContent: '厉害了老铁'
        },
        {
          userimg: '../../../static/image/user1.jpg',
          username: '王大壮',
          date: '2018-11-1',
          chatContent: '厉害了老铁'
        },
        {
          userimg: '../../../static/image/user2.jpg',
          username: '王大壮',
          date: '2018-11-1',
          chatContent: '厉害了老铁'
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
    'v-chatDate': chatDate
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

.chat-box {
  height: 30%;
  width: 90%;
  left: 10%;
  top: 0.5%;
  margin-top: 1.5%;
  position: relative;
}

.chat-bg-0 {
  .chat-bg {
    border-radius: 6rem;
    background: rgba($color: #ffffff, $alpha: 0.3);
  }
  .user-img {
    border-radius: 2.5vw;
  }
}
.chat-bg-1 {
  .chat-bg {
    background: rgba($color: #ffffff, $alpha: 0.3);
  }
}
.chat-bg-2 {
  .chat-bg {
    border-radius: 6rem;
    background: rgba($color: #ffffff, $alpha: 1);
  }
  .user-img {
    border-radius: 2.5vw;
  }
}
.chat-bg-3 {
  .user-img {
    border-radius: 2.5vw;
    width: 11.2%;
    height: 4vw;
    left: 10%;
  }
  .user-name {
    width: 28%;
    height: 24%;
    top: 19%;
    left: 23%;
  }
  .chat-date {
    width: 28%;
    height: 24%;
    top: 19%;
    left: 55%;
  }
  .chat-content {
    width: 60%;
    height: 32%;
    top: 50%;
    left: 23%;
  }
}

.chat-bg {
  position: absolute;
  height: 100%;
  width: 90%;
}

.user-img {
  position: absolute;
  width: 14%;
  height: 5vw;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 12%;
  overflow: hidden;
  img {
    width: 100%;
  }
}

.user-name {
  position: absolute;
  width: 20%;
  height: 24%;
  top: 15%;
  left: 21%;
  span {
    font-size: 15px;
    height: 100%;
    display: block;
    line-height: 100%;
    margin-top: 2%;
    font-family: "MicrosoftYaHei";
    color: #ffffff;
  }
}

.chat-content {
  position: absolute;
  width: 62%;
  height: 36%;
  top: 47%;
  left: 21%;
  vertical-align:middle;
  p {
    font-size: 24px;
    margin-top: 0px;
    color: #ffffff
  }
}

.chat-date {
  position: absolute;
  width: 30%;
  height: 20%;
  top: 15%;
  left: 52%;
   span {
    font-size: 15px;
    height: 100%;
    display: block;
    line-height: 100%;
    margin-top: 2%;
    font-family: "MicrosoftYaHei";
    color: #cccccc;
    text-align: right;
  }
}

.styleborder {
  border: 2px solid rgba($color: yellow, $alpha: 1) !important;
}
.el-row {
  height: 100%;
  .el-col {
    height: 100%;
  }
}
.logo {
  position: absolute;
  z-index: 99;
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
  width: 50%;
  height: 40%;
}

.chat-conenet-all {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  width: 50%;
  height: 40%;
}

.banner {
  position: absolute;
  z-index: 99;
  transform: translate(-50%, -50%);
  width: 56%;
  height: 8%;
  top: 12%;
  left: 50%;
  text-align: center;
  h2 {
    margin: 0px;
    color: white;
    font-size: 2rem;
  }
  span {
    display: block;
    margin-top: 0.2rem;
    color: white;
    font-size: 1.5rem;
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
  top: 14%;
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

