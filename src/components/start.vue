<template>
  <div id="start">
    <div class="bgimg">
      <img src="../assets/img/happyIdiom/happyIdiom-start-bg.png"/>
    </div>
    <div class="startTop">
      <div class="return">
        <a href="./returnIdiom.html"></a>
        <img src="../assets/img/happyIdiom/happyIdiom-main-return.png" />
      </div>
      <div class="Rankinglist" v-on:click="jumpToGameRecord">
        <img src="../assets/img/happyIdiom/happyIdiom-start-ranking.png" />
      </div>
    </div>
    <div class="logo">
      <img src="../assets/img/happyIdiom/happyIdiom-start-logo-01.png" />
    </div>
    <div class="buttonList">
      <img class="btn easyBtn" src="../assets/img/happyIdiom/happyIdiom-start-easy.png" @click="jumpToMainApp(1)"/>
      <img class="btn commonBtn" src="../assets/img/happyIdiom/happyIdiom-start-ordinary.png" @click="jumpToMainApp(2)"/>
      <img class="btn difficultBtn" src="../assets/img/happyIdiom/happyIdiom-start-difficult.png" @click="jumpToMainApp(3)"/>
      <img class="btn pkBtn" src="../assets/img/happyIdiom/happyIdiom-start-pk.png" @click="jumpToFriendsPK"/>
    </div>
    <div class="bottomButton" v-on:click="jumpToRankingList">
      <img class="btnBot" src="../assets/img/happyIdiom/happyIdiom-start.png" />
    </div>
    <div class="msg" v-show="!isAndroid">声明: 本活动与苹果公司Apple Inc无关</div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  props: {
    msg: String
  },
  data () {
    return {
      isAndroid: false
    }
  },
  created() {
    this.checkPhone();
    console.log("sash")
  },
  methods: {
     jumpToMainApp(n) {
        this.$router.push({
          name:'mainApp',
          params: {
            spellLevel: n
          }
        });
     },
     jumpToGameRecord() {
        this.$router.push({
            name:'gameRecord'
          });
     },
     jumpToRankingList() {
      this.$router.push({
        name:'rankingList'
      });
     },
     jumpToFriendsPK() {
      this.$router.push({
        name:'friendsPK'
      });
     },
     checkPhone() {
        let isAndroid = true;
        let agent = (navigator.userAgent || navigator.vendor || window.opera);
        if (agent != null) {
            let agentName = agent.toLowerCase();
            if (/android/i.test(agentName)) {
                isAndroid = true;
            } else if (/iphone/i.test(agentName)) {
              isAndroid = false;
            }else if(/iPad/i.test(agentName)){
              isAndroid = false;
                
            }else{
              isAndroid = true;
            }
        }
        this.isAndroid = isAndroid;
      }
  }
}
</script>

<style scoped lang="scss">
$color : red;
@function rem($n) {
  @return $n/2/37.5;
}
#start{
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  padding-bottom: 100px;
  // margin-bottom: -100px;

}
.startTop{
  padding-top: rem(29rem);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  >div{
    margin: 0 rem(15rem);
    width: rem(106rem);
    height: rem(94rem);
  }
  img{
    display: block;
    width: rem(106rem);
    height: rem(94rem);
  }
  .return{
    position:relative;
    a{
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 999;
      top: 0;
      left: 0;
    }
  }
}


.logo{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  img{
    width: rem(614rem);
    height: rem(295rem);
    margin-left: rem(22rem);
  }
}

.buttonList{
  position:absolute;
  width: 100%;
  top: rem(426rem);
  bottom:rem(110rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: auto;
    height: rem(136rem);
    max-height: 25%;
    padding-bottom: rem(8rem);
    box-sizing: border-box;
  }
}

.bottomButton{
  position:absolute;
  width: 100%;
  bottom: rem(53rem);
  text-align: center;
  img{
    display: inline-block;
    width: rem(470rem);
    height: rem(55rem);
  }

}
.msg{
  width: 100%;
  position: fixed;
  bottom: rem(5rem);
  left: 0;
  font-size: 10px;
  color: #ffffff;
  text-align: center;
}
</style>