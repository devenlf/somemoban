<template>
  <el-row >
  <el-col :span="19"><div class="grid-content bg-left">
    <div class="bgimgby" :class="{'styleborder':isShow(0)}"  @click="addClass(0)">
      <img class="bgimg" src="../../../static/image/635869062716808792.jpg" alt="">
    </div>
    <div class="logo" :class="{'styleborder':isShow(1)}"  @click="addClass(1)">
      <img class="logoimg" src="../../../static/image/636402237338100756.png" alt="">
    </div>
    <div class="code" :class="{'styleborder':isShow(2)}"  @click="addClass(2)">
        <img class="bgimg" src="../../../static/image/code.png" alt="">
    </div>
       <div class="banner" :class="{'styleborder':isShow(3)}"  @click="addClass(3)">
      <h2>{{bannerText.titletxt}}</h2>
      <span>{{bannerText.carbon}}</span>
    </div>
    <div class="foreground" v-if="topIsShowBg" :class="{'styleborder':isShow(4)}" :style="{background:topColorValue,opacity:topOpacityValue}" @click="addClass(4)">

    </div>
 
    </div></el-col>
  <el-col :span="5"><div class="grid-content bg-right">
      <v-bgimg v-show="isShow(0)"></v-bgimg>
      <v-logo v-show="isShow(1)"></v-logo>
      <v-code v-show="isShow(2)"></v-code>
      <v-titleBanner v-show="isShow(3)" @change="changeTxt" :bannerTxt="bannerText"></v-titleBanner>
      <v-topcolor v-show="isShow(4)"></v-topcolor>
    </div></el-col>
  </el-row>
</template>


<script>
import bgimg from './components/bgimg'
import code from './components/code'
import logo from './components/logo'
import titleBanner from './components/titleBanner'
import topcolor from './components/topcolor'
import { mapGetters } from 'vuex'
// background:topColorValue,opacity:topOpacityValue
export default {
  data() {
    return {
      current: 0,
      bannerText: {
        titletxt: '2015法拉利环球国际展-上海站',
        carbon: '热烈欢迎来自五湖四海的广大车友'
      }
    }
  },
  computed: {
    ...mapGetters(['topColorValue', 'topOpacityValue', 'topIsShowBg'])
  },
  methods: {
    addClass(index) {
      this.current = index
    },
    isShow(id) {
      return this.current === id
    },
    changeTxt(data) {
      this.bannerText[data.type] = data.value
    }
  },
  components: {
    'v-bgimg': bgimg,
    'v-code': code,
    'v-logo': logo,
    'v-titleBanner': titleBanner,
    'v-topcolor': topcolor
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
.styleborder {
  border: 2px solid yellow !important;
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
  background: rgba(black, 0.3);
  top: 56%;
  left: 50%;
  width: 60%;
  height: 50%;
}
.banner {
  position: absolute;
  z-index: 99;
  transform: translate(-50%, -50%);
  width: 56%;
  min-height: 25px;
  top: 13%;
  left: 50%;
  text-align: center;
  h2 {
    margin: 0px;
    color: white;
  }
  span {
    display: block;
    margin-top: 10px;
    color: white;
    font-size: 18px;
    opacity: 0.7;
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
  z-index: 1px;
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

