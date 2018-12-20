<template>
  <div id="mianApp">
    <div class="bgimg ">
      <img src="../assets/img/happyIdiom/happyIdiom-start-bg.png"/>
    </div>
    <div class="boxM">
      <div class="topNav">
      <div class="return radiusBtn" v-on:click="returnStart">
        <img src="../assets/img/happyIdiom/happyIdiom-main-return.png" />
      </div>
      <div class="levelNum">
        <img src="../assets/img/happyIdiom/happyIdiom-main-cent.png"/>
        <span>{{roundLevel}}</span>
      </div>
      <div class="audioBtn radiusBtn">
        <img src="../assets/img/happyIdiom/happyIdiom-main-audio.png" v-show="!sudioClsoe" v-on:click="closeSudioFn">
        <img src="../assets/img/happyIdiom/happyIdiom-main-audioUn.png" v-show="sudioClsoe" v-on:click="openSudioFn">
      </div>
    </div>
    <div class="content">
      <img src="../assets/img/happyIdiom/happyIdiom-main-box.png" class="contentBg" />
      <div class="items">
          <div class="item"  @click="toggleClick(item)" v-for="item in textArry"  v-bind:class="{item24: textArry.length >= 24,itemActive: item.isClick}" >
            <img src="../assets/img/happyIdiom/happyIdiom-main-tian.png" class="itemBg" />
            <span class="itemText" v-show="!item.isClear">{{item.text}}</span>
          </div>
      </div>
    </div>
    <div class="time" >00:{{time}}</div>
    <div class="resultsBox" v-bind:class="{resultsBox6: idiomNum.length > 4}">
      <div class="resultsItem"  v-for="(item,index) in idiomNum">
        <img src="../assets/img/happyIdiom/happyIdiom_filltext-box.png" class="resultsBg" />
        <div class="resultsText" v-if="idiomText.get(index+1)">{{arrToString(idiomText.get(index+1))}}
          <img src="../assets/img/happyIdiom/happyIdiom-main-y.png" class="iconTrue" v-show="item.isTrue" />
          <img src="../assets/img/happyIdiom/happyIdiom-main-err.png" class="iconFlase" v-show="item.isFasle" />
        </div>
      </div>
    </div>
    </div>
    <!-- 退出弹框 -->
    <div class="exitGame elasticFrameShaw" v-show="exit">
      <div class="elasticFrame">
        <img src="../assets/img/happyIdiom/idiom-return-close.png" />
        <div class="buttonBottom">
          <img src="../assets/img/happyIdiom/idiom-return-y-b.png" v-on:click="exitGameBtnByGameSuccess"/>
          <img src="../assets/img/happyIdiom/idiom-return-n-b.png" v-on:click="cancelExit" />
        </div>
      </div>
    </div>
    <!-- 游戏失败弹框 -->
    <div class="GameOver elasticFrameShaw" v-show="gameOverShow">
      <div class="elasticFrame">
        <img src="../assets/img/happyIdiom/idiom-failure.png" />
        <div class="buttonBottom">
          <img src="../assets/img/happyIdiom/idiom-failure-daan.png" v-on:click="clickShowExplainList"/>
          <img src="../assets/img/happyIdiom/idiom-failure-con1.png" v-on:click="rePlayGame" />
          <img src="../assets/img/happyIdiom/idiom-failure-end.png" v-on:click="exitGameBtn"/>
        </div>
      </div>
    </div>
    <!-- 游戏成功 -->
    <div class="GameSuccess elasticFrameShaw" v-show="gameSuccessShow">
      <div class="elasticFrame">
        <img src="../assets/img/happyIdiom/happyIdiom_customs.png" />
        <div class="buttonBottom">
          <img src="../assets/img/happyIdiom/happyIdiom_sucess_return.png" v-on:click="exitGameBtnByGameSuccess"/>
          <img src="../assets/img/happyIdiom/happyIdiom_view.png" v-on:click="clickShowExplainList" />
          <img src="../assets/img/happyIdiom/happyIdiom_next_customs.png" v-on:click="clickIntoNext" />
        </div>
      </div>
    </div>
    <!-- 红包弹框 -->
    <div class="enevlBox" v-show="enevlBoxShow">
      <img src="../assets/img/happyIdiom/happyIdiom-envel-close-u.png"  v-bind:class="{hide:isShowAnmate}" v-on:click="showEnevlBox" />
      <div class="showEnevl"  v-bind:class="{show:isShowAnmate}">
        <img src="../assets/img/happyIdiom/happyIdiom-envel-open.png" />
        <div class="rewardNum">{{rewardNum}}元</div>
        <div class="buttonBottom">
          <img src="../assets/img/happyIdiom/happyIdiom_sucess_return.png" class="envel-r" v-on:click="exitGameBtn" />
          <img class="envel-q" src="../assets/img/happyIdiom/idiom-return-y-b.png" v-on:click="gameOverShowByenevlBox" />
        </div>
      </div>
    </div>

    <!-- 单词解释 -->
    <div class="explainList" v-bind:class="{showexplainList:explainListShow}">
       <img class="explainListBg" src="../assets/img/happyIdiom/happyIdiom-start-bg.png" />
       <div class="return radiusBtn" v-on:click="returnMian">
        <img src="../assets/img/happyIdiom/happyIdiom-main-return.png" />
       </div>
       <div class="list" ref="listS">
        <div class="contentD">
          <div v-for="item in idiomList">
           <div class="idiomName">{{item.idiomName}}</div>
           <div>{{item.idiomContent}}</div>
           <div>{{item.idiomDerivation}}</div>
         </div>
        </div>
         
       </div>
    </div>

    <!-- 音频 -->
    <div class="audioS" style="display: none;">
    <audio preload='auto' src='/assets/img/happyIdiom/audio/click.mp3'  controls='controls' id="clickAudio"></audio>
    <audio preload='auto' src='/assets/img/happyIdiom/audio/getGood.mp3'  controls='controls' id="getGoodAudio"></audio>
    <audio preload='auto' src='/assets/img/happyIdiom/audio/death.mp3'  controls='controls' id="errAudio"></audio>
    </div>

    <mesg ref="mesg" v-bind:msg="msg"></mesg>
  </div>
</template>

<script>
import mesg from './mesg';
import $ from 'jquery';
import {Api} from '../api/api.js'
import Bscroll from 'better-scroll'
const api = new Api();

export default {
  name: 'mianApp',
  components:{
        mesg
    },
  data () {
    return {
      msg: "",
      constant: true,
      textArry:[],
      idiomNum: [],
      fillInBoxIndex: 1,  // 填入框的位置
      idiomText: new Map(),
      idiomTrueArry: new Set(),
      clickIndex: 0,
      isShowAnmate: false,
      exit: false,
      idiomList: [],
      time: 40,
      timer: null, // 停止计时
      gameOverShow: false,
      gameSuccessShow: false,
      explainListShow: false,
      enevlBoxShow: false,
      rewardNum: 0, // 红包金额
      trueNum: 0,  // 正确数量
      nextData: {},  // 下一关数据
      pkLogId: 0,
      roundLevel:1,   // 关数
      sudioClsoe: false
    }
  },
  activated(){
      this.pkLogId = 0;
      this.roundLevel = 1;
      this.rewardNum = 0;
      this.nextData = {};
      
      clearInterval(this.timer);
      this.claerAllData();
      this.pkLogId = this.$route.params.pkLogId || 0;
      this.judgeLevel();  // 判断等级
      this.getData();   // 获取数据
      this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new Bscroll(this.$refs.listS, {
                click: true,
                scrollY: true,
                stopPropagation: true,
                // bounce: {
                //   top: false,
                //   bottom: false,
                //   left: false,
                //   right: false 
                // }
              })
            } else {
              this.scroll.refresh()
            }
          })
  },
  beforeRouteUpdate (to, from, next) {
    console.log("触发这个歌方法")
  },
  methods: {
    getData() {
       api.getGameData(this.$route.params.spellLevel,this.pkLogId)
       .then((res) => {
        let data = res.params
        this.setData(data.idiomCharArray);
        this.time = data.limitTime;
        this.roundLevel = data.roundLevel;
        // 设置输入框
        let len = data.idiomCount;
        for(let i = 0; i < len; i++){
         this.idiomText.set(i+1,[]);
        }
        // 设置正确答案
        this.setDataTrue(data.idiomList);
        // 解释
        this.idiomList.push(...data.idiomList);
       })
       .catch(()=>{
         this.getData();
       });
       
    },
    setData(string){
      let arr = string.split("");
      let allArr = [];
      
      for(let i = 0; i < arr.length; i++){
        allArr.push({
          text: arr[i],
          index: i+1,
          clickIndex:0,
          isClick: false,
          isClear: false
        });
        console.log("循环中");
        if(i == arr.length-1){
          console.log("循环完成");
          this.textArry.push(...allArr);
          this.countdown();
           
        }
      }
    },
    setDataTrue(arr){
      
      for(let i = 0; i < arr.length; i++){
        this.idiomTrueArry.add(arr[i].idiomName);
      }
    },
    returnStart(){
      // 弹出退出弹框
      this.exit = true;
    },
    judgeLevel() {
      let lev = this.$route.params.spellLevel;
      if(lev == 1){
        this.textNum = 16;
        this.idiomNum = Array(4).fill({isTrue: false,isFasle: false});
      }else if(lev == 2){
        this.textNum = 24;
        this.idiomNum = Array(6).fill({isTrue: false,isFasle: false});;
      }else if(lev == 3){
        this.textNum = 36;
        this.idiomNum = Array(9).fill({isTrue: false,isFasle: false});;
      }else{
        this.textNum = 16;
        this.idiomNum = Array(4).fill({isTrue: false,isFasle: false});;
      }
    },
    toggleClick(item) {
      if(item.isClear){
        // 已经清除
      }else{
        if(item.isClick){
        // 已经点击
          item.isClick = false;
          this.unFillInBox(item);
        }else{
          // 未点击
          item.isClick = true;
          // 填入显示框
          this.fillInBox(item);
        }
      }
    },
    fillInBox(item) {
      console.log("点击");
      this.clickAudio();
      this.clickIndex +=1;
      item.clickIndex = this.clickIndex;
      this.idiomText.get(this.fillInBoxIndex).push(item.text);
      this.idiomText.set(this.fillInBoxIndex,this.idiomText.get(this.fillInBoxIndex));
      console.log(this.idiomText.get(this.fillInBoxIndex));
      if(this.idiomText.get(this.fillInBoxIndex).length == 4){
        console.log(this.idiomText.get(this.fillInBoxIndex));
        // 判断是否正确
        if(this.idiomIsTure(this.idiomText.get(this.fillInBoxIndex))){
          // 正确
          console.log("yes");
          this.trueNum++;
          this.idiomNum.fill({isTrue: true,isFasle: false},this.fillInBoxIndex-1,this.fillInBoxIndex);
          this.fillInBoxIndex +=1; 
          this.clickFasle(1);
          this.clearBoxShaw(1);
          this.clickIndex = 0;

        }else{
          // 错误
          console.log("no");
          this.idiomNum.fill({isTrue: false,isFasle: true},this.fillInBoxIndex-1,this.fillInBoxIndex);
          this.clearBoxShaw(1);
          console.log(this.idiomNum,this.fillInBoxIndex-1);
        }
      }else if(this.idiomText.get(this.fillInBoxIndex).length == 5){
        // 填入(错误之后重新填入)
         this.clickIndex = 1;
         item.clickIndex = this.clickIndex;
         this.idiomNum.fill({isTrue: false,isFasle: false},this.fillInBoxIndex-1,this.fillInBoxIndex);
         this.idiomText.set(this.fillInBoxIndex,[]);
         this.idiomText.get(this.fillInBoxIndex).push(item.text);
         this.idiomText.set(this.fillInBoxIndex,this.idiomText.get(this.fillInBoxIndex));
      }
    },
    unFillInBox(item) {
       let arr = this.idiomText.get(this.fillInBoxIndex);
       let index = item.clickIndex;
        this.clickIndex = index-1;
       console.log(item.clickIndex+"定金");
       this.idiomText.get(this.fillInBoxIndex).length = item.clickIndex-1;
       this.clearBoxShaw(index);
    },
    idiomIsTure(arr){
       let idiom = arr.join("");
       console.log(idiom);
       if(this.idiomTrueArry.has(idiom)){
        return true;
       }else{
        return false;
       }
    },
    arrToString(arr){
      return arr.join('');
    },
    clearBoxShaw(index){
      let len = this.textArry.length;
       for(let i =0; i < len; i++){
         if(this.textArry[i].clickIndex >= index){
            this.textArry[i].isClick = false;
            this.textArry[i].clickIndex = 0;
         }
       }
    },
    clickFasle(index){
      let len = this.textArry.length;
       for(let i =0; i < len; i++){
         if(this.textArry[i].clickIndex >= index){
            this.textArry[i].isClick = false;
            this.textArry[i].isClear = true;
         }
       }
    },
    showEnevlBox(){
      this.getRewardNum();
    },
    exitGameBtn(){
      this.$router.push('/start');
    },
    cancelExit(){
      this.exit = false;
    },
    countdown(){
      this.timer = setInterval(() => {
        this.time = this.time -1;
        if(this.time == 0){
          clearInterval(this.timer);
        }
      },1000);
    },
    clickShowExplainList(){
      this.explainListShow = true;
      this.scroll.refresh();
    },
    returnMian() {
      this.explainListShow = false;
    },
    rePlayGame() {
      // 再来一局
      this.claerAllData();   // 重置data中的数据
      this.judgeLevel();  // 判断等级
      this.getData();   // 获取数据
    },
    clickIntoNext() {
      // 下一关
      this.claerAllData();   // 重置data中的数据
      this.judgeLevel();  // 判断等级
      this.setNextData(this.nextData)   // 获取数据
    },
    setNextData(res) {
        if(res.params.idiomList.length > 0){
          let data = res.params
          this.setData(data.idiomCharArray);
          this.time = data.limitTime;
          this.roundLevel = data.roundLevel;
          // 设置输入框
          let len = data.idiomCount;
          for(let i = 0; i < len; i++){
           this.idiomText.set(i+1,[]);
          }
          // 设置正确答案
          this.setDataTrue(data.idiomList);
          // 解释
          this.idiomList.push(...data.idiomList);
        }else{
          this.msg = "正在获取数据";
          this.$refs.mesg.showAnimate();
          setNextData(this.nextData);
        }
        
    },
    getNextData() {
      api.getNextIdiomList(this.pkLogId).then((res) => {
        this.nextData = res;
      }).catch(()=>{
        this.getNextData();
       });
    },
    claerAllData() {
      this.idiomText.clear();
      this.idiomTrueArry.clear();
      this.constant = true;
      this.textArry = [];
      this.idiomNum = [];
      this.fillInBoxIndex = 1;  // 填入框的位置
      this.clickIndex = 0;
      this.isShowAnmate = false;
      this.exit = false;
      this.idiomList = [];
      this.time = 40;
      this.timer = null; // 停止计时
      this.gameOverShow = false;
      this.gameSuccessShow = false;
      this.explainListShow = false;
      this.enevlBoxShow = false;
      this.trueNum = 0;  // 正确数量
    },
    gameOverApi() {
      api.setFinishGame(this.pkLogId).then((res) => {
         console.log(res.params.rewardStatus);
        if(res.params.rewardStatus == 1){
          // 有奖励
          this.enevlBoxShow = true;
        }else{
          // 无奖励
          this.gameOverShow = true;
        }
      }).catch(() => {
         this.gameOverShow = true;
      })
    },
    getRewardNum() {
      // 获取红包金额
      api.getReward(this.pkLogId).then((res) => {
          this.rewardNum = res.params.rewardAmount;
          this.isShowAnmate = true;
      }).catch((res) => {
         this.msg = res.message || "红包失效";
         this.$refs.mesg.showAnimate();
         this.enevlBoxShow = false;
      })
    },
    gameOverShowByenevlBox() {
      this.enevlBoxShow = false;
      this.gameOverShow = true;
    },
    exitGameBtnByGameSuccess() {
      api.setFinishGame(this.pkLogId).then((res) => {
         this.exitGameBtn();
      }).catch(() => {
         this.msg = "游戏结束失败";
         this.$refs.mesg.showAnimate();
         setTimeout(()=>{
          this.exitGameBtn();
         },300);
      });
    },
    clickAudio(){
        var clickaudio = document.getElementById('clickAudio');
        if(this.sudioClsoe){

        }else{
            clickaudio.currentTime = 0;
            clickaudio.play();
        }

    },
    getGoodAudio() {
        var clickaudio = document.getElementById('getGoodAudio');
        if(this.sudioClsoe){

        }else {
            clickaudio.currentTime = 0;
            clickaudio.play();
        }
    },
    errAudio() {
        var clickaudio = document.getElementById('errAudio');
        if(this.sudioClsoe){

        }else {
            clickaudio.currentTime = 0;
            clickaudio.play();
        }
    },
    closeSudioFn() {
      this.sudioClsoe = true;
    },
    openSudioFn(){
      this.sudioClsoe = false;
    }

  },
  watch:{
    time(val,oldVal) {
      console.log(val,oldVal);
      if(val == 0){
        this.errAudio();
        this.gameOverApi(this.pkLogId);
        this.exit = false;
      }
    },
    trueNum(val,oldVal) {
      if(val == this.idiomNum.length){
        clearInterval(this.timer);
        this.getGoodAudio();
        this.gameSuccessShow = true;
        this.getNextData();
      }
    }
  }
  
}
</script>

<style scoped lang="scss">
$color : red;
@function rem($n) {
  @return $n/2/37.5;
}
#mianApp{
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;

.boxM{
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
   -webkit-overflow-scrolling:touch;
}
.topNav{
  width: 100%;
  padding: 0 rem(20rem);
  margin-top: rem(40rem);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .radiusBtn{
    width: rem(106rem);
    height: rem(94rem);
    img{
      display: block;
      margin-top: rem(9rem);
      width: 100%;
      height: 100%;
    }
  }
  .levelNum{
    position:relative;
    flex:1;
    text-align: center;
    height: rem(124rem);
    img{
      position:absolute;
      top:0;
      left: 50%;
      width: rem(466rem);
      height: rem(124rem);
      margin-left: - rem(233rem);
      z-index: -1;
    }
    span{
      font-size: rem(40rem);
      color: #c15708;
      font-weight: bold;
    }
  }
}

.content{
  position:relative;
  width: rem(696rem);
  height: rem(696rem);
  margin: 0 auto;
  margin-top: rem(35rem);
  .contentBg{
    position:absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .items{
    position:absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 1;
    justify-content: space-around;
    align-items: center;
  }
  .item{
    position: relative;
    width: rem(148rem);
    height: rem(148rem);
    line-height: rem(148rem);
    .itemBg{
      position:absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .itemText{
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
      font-size: rem(65rem);
      color: #000000;
      font-family: "KaiTi";
    }
  }
  .item24{
    position: relative;
    width: rem(110rem);
    height: rem(110rem);
    line-height: rem(110rem);
  }
  .itemActive::before{
    display: block;
    content:"";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(230, 109, 17, 0.75);
  }
}
.time{
  margin: rem(20rem) 0;
  font-size: rem(30rem);
  text-align: center;
  color: #000;
  font-family: "PingFang-SC-Bold";
  font-weight: bold;
}
.resultsBox{
  width: rem(696rem);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-around;
  margin-bottom: rem(30rem);
  .resultsItem{
    width: rem(207rem);
    height: rem(87rem);
    line-height: rem(87rem);
    margin: rem(0.2rem) rem(40rem);
    position:relative;
    .resultsBg{
      width: 100%;
      height: 100%;
      position:absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .resultsText{
      position: relative;
       width: 100%;
      height: 100%;
      text-align: center;
      font-size: rem(30rem);
      font-family: "PingFang-SC-Bold";
      color: #C15708;
      font-weight: bold;
      img{
        position: absolute;
        display: block;
      }
      .iconTrue{
        width: rem(52rem);
        height: rem(52rem);
        bottom: 0;
        right: 0;
      }
      .iconFlase{
        width: rem(40rem);
        height: rem(40rem);
        bottom: 0;
        right: 0;
      }
    }
  }
}
.resultsBox6{
  width: rem(696rem);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-bottom: rem(30rem);
  justify-content: space-around;
  .resultsItem{
    width: rem(207rem);
    height: rem(87rem);
    line-height: rem(87rem);
    margin: rem(0.2rem) 0;
    position:relative;
  }
}

/*弹框*/
.elasticFrameShaw{
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  z-index: 999;
  .elasticFrame{
    position: relative;
    width: rem(650rem);
    height: rem(720rem);
    &>img{
      width: 100%;
      height: 100%;
    }
    .buttonBottom{
      position: absolute;
      width: 100%;
      bottom: rem(63rem);
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
      img{
        width: rem(258rem);
        height: rem(110rem);
      }
    }
  }
}
.exitGame{
  /*display: none;*/
}
.GameOver{
  .elasticFrame{
    &>img{
      width: rem(650rem);
      height: rem(615rem);
    }
    .buttonBottom{
      bottom: 0;
      img{
        width: rem(200rem);
        height: rem(90rem);
      }
    }
  }
}
.GameSuccess{
  .elasticFrame{
    &>img{
      width: rem(650rem);
      height: rem(615rem);
    }
    .buttonBottom{
      bottom: 0;
      img{
        width: rem(200rem);
        height: rem(90rem);
      }
    }
  }
}
/*红包*/
.enevlBox{
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  z-index: 999;
  &>img{
    position: absolute;
    width: rem(576rem);
    height: rem(719rem);
    top: 50%;
    margin-top: - rem(359rem);
    transform: scale(1);
    transition: all 0.5s;
  }
  .hide{
   transform: scale(0);
  }
  .show{
    transform: scale(1);
  }
  &>div{
    position: relative;
    display: block;
    width: rem(576rem);
    height: rem(719rem);
    transform: scale(0);
    transition: all 0.5s;
    transition-delay: 0.5s;
    &>img{
      width: 100%;
      height: 100%;
      display: block;
    }
    .rewardNum{
      position: absolute;
      width: 100%;
      text-align: center;
      color: #D93142;
      font-size: rem(85rem);
      top: rem(163rem);
    }
    .buttonBottom{
      position: absolute;
      width: 100%;
      bottom: rem(83rem);
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      .envel-r{
        width: rem(310rem);
        height: rem(110rem);
      }
      .envel-q{
        width: rem(197rem);
        height: rem(110rem);
      }
    }
  }
}

// 单词解释

.explainList{
  position:absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 9999;
  background-color:#ffffff;
      z-index: -99;
      opacity: 0;
  .explainListBg{
    position:absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .return{
    margin-top: rem(40rem);
    margin-left: rem(20rem);
    width: rem(106rem);
    height: rem(94rem);
    img{
      display: block;
      margin-top: rem(9rem);
      width: 100%;
      height: 100%;
    }
  }
  .list{
    position:absolute;
    width: 100%;
    top: rem(140rem);
    bottom: rem(20rem);
    overflow: auto;
    .contentD{
      width: 100%;
      >div{
      padding: rem(24rem);
      width: rem(696rem);
      box-sizing: border-box;
      margin: 0 auto;
      height: auto;
      background-color: #ffbe90;
      border-radius: rem(10rem);
      margin-bottom: rem(15rem);
      color: #c15708;
      .idiomName{
        font-size: rem(30rem);
        font-weight: bold;
        margin-bottom: rem(20rem);
      }
      >div{
        font-size: rem(24rem);
        line-height: rem(40rem);
      }
    }
    }
    
  }
}
.showexplainList{
      z-index: 9999;
      opacity: 1;
}
}
</style>