<template>
<div class="content-back">
  <el-row >
  <el-col :span="19"><div class="grid-content bg-left">
    <div class="bgimgby" :class="{'styleborder':isShow(3)}"  @click="addClass(3)">
      <img class="bgimg" :src="changeBackgroundImgValue" alt="">
    </div>
    <div class="logo" :class="{'styleborder':isShow(0),'prepose-style':isShow(0)}"  @click="addClass(0)">
      <img :style="{'visibility':changeLogoIsShowValue}" class="logoimg" :src="changeLogoImgValue" alt="">
    </div>
    <div class="code" :class="{'styleborder':isShow(1),'prepose-style':isShow(1)}"  @click="addClass(1)">
        <img :style="{'visibility':changeCodeIsShowValue}" class="codeimg" :src="changeCodeImgValue" alt="">
    </div>
       <div class="banner" :class="{'styleborder':isShow(2),'prepose-style':isShow(2)}"  @click="addClass(2)">
         <div class="banner-content" :style="{'visibility':changebannerIsShowValue}">
                 <template v-if="changebannerTypeValue">
                    <h2>{{changebannerRoomNameValue}}</h2>
                    <span>{{changebannerSubTitleValue}}</span>
                  </template> 
                  <template v-else>
                    <img class="banner-img" :src="changeBannerImgValue" alt="">
                  </template> 
         </div>

    </div>
    <!-- <div class="foreground" v-if="topIsShowBg" :class="{'styleborder':isShow(3),'prepose-style':isShow(3)}" :style="{background:topColorRGBAValue}" @click="addClass(3)"></div> -->
 
    </div></el-col>
  <el-col :span="5"><div class="grid-content bg-right">
      <v-bgimg v-show="isShow(3)"></v-bgimg>
      <v-logo v-show="isShow(0)"></v-logo>
      <v-code v-show="isShow(1)"></v-code>
      <v-titleBanner v-show="isShow(2)"></v-titleBanner>
      <v-topcolor v-show="false"></v-topcolor>
    </div></el-col>
  </el-row>
    <V-guideLogo v-if="isGuideing" @change-current="changeData" :currentData="current"/>
</div>
</template>


<script>
import bgimg from './components/bgimg'
import code from './components/code'
import logo from './components/logo'
import titleBanner from './components/titleBanner'
import topcolor from './components/topcolor'
import guideLogo from './guide-page/guide-page'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      isGuideing: false,
      current: 0,
      titletxt: '2015法拉利环球国际展-上海站',
      carbon: '热烈欢迎来自五湖四海的广大车友'
    }
  },
  computed: {
    ...mapGetters([
      'changeBackgroundImgValue',
      'changeCodeImgValue',
      'changeCodeIsShowValue',
      'changeLogoImgValue',
      'changeLogoIsShowValue',
      'changebannerTypeValue',
      'changebannerIsShowValue',
      'changebannerRoomNameValue',
      'changebannerSubTitleValue',
      'changeBannerImgValue'
    ])
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
    },
    changeData(num) {
      if (this.current >= 3) {
        this.isGuideing = false
        return
      }
      this.current++
    }
  },
  components: {
    'v-bgimg': bgimg,
    'v-code': code,
    'v-logo': logo,
    'v-titleBanner': titleBanner,
    'v-topcolor': topcolor,
    'V-guideLogo': guideLogo
  }
}
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
}
.content-back {
  position: relative;
}
.prepose-style {
  z-index: 99;
}
.styleborder {
  border: 2px solid #fff600 !important;
}
.banner-img{
  width: 100%;
  height: 100%;
  display: block
}
.banner-content{
  height: 100%;
}
.el-row {
  height: 100vh;
  .el-col {
    height: 100vh;
  }
}
.logo {
  position: absolute;
  width: 13vmin;
  height: 7.6vmin;
  border: 1px dashed #cccccc;
  top: 10%;
  left: 6%;
  img {
    width: 100%;
    height: 100%;
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
.el-slider__button-wrapper {
  z-index: 90 !important;
}
.banner {
  position: absolute;
  border: 1px dashed white;
  transform: translate(-50%, -50%);
  width: 56%;
  height: 7vmin;
  top: 13vh;
  left: 50%;
  text-align: center;
  h2 {
    margin: 0px;
    color: white;
    font-size: 1.5vmax;
  }
  span {
    display: block;
    margin-top: 0.2vmin;
    color: white;
    font-size: 1vmax;
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
  border: 1px dashed #cccccc;
  img {
    display: block;
    margin: 10%;
    width: 80%;
  }
}
.bg-left {
  display: block;
  height: 100vh;
  position: relative;
}
.bg-right {
  background: darkcyan;
  height: 100%;
}
</style>

