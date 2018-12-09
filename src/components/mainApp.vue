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
        <span>10</span>
      </div>
      <div class="audioBtn radiusBtn">
        <img src="../assets/img/happyIdiom/happyIdiom-main-audio.png">
      </div>
    </div>
    <div class="content">
      <img src="../assets/img/happyIdiom/happyIdiom-main-box.png" class="contentBg" />
      <div class="items">
          <div class="item"  @click="toggleClick(item)" v-for="item in textArry" v-bind:class="{item24: textArry.length >= 24,itemActive: item.isClick}" >
            <img src="../assets/img/happyIdiom/happyIdiom-main-tian.png" class="itemBg" />
            <span class="itemText" v-show="!item.isClear">{{item.text}}</span>
          </div>
      </div>
    </div>
    <div class="time" >00:30</div>
    <div class="resultsBox" v-bind:class="{resultsBox6: idiomNum.length > 4}">
      <div class="resultsItem"  v-for="(item,index) in idiomNum">
        <img src="../assets/img/happyIdiom/happyIdiom_filltext-box.png" class="resultsBg" />
        <div class="resultsText">{{arrToString(idiomText.get(index+1))}}
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
          <img src="../assets/img/happyIdiom/idiom-return-y-b.png" v-on:click="exitGameBtn"/>
          <img src="../assets/img/happyIdiom/idiom-return-n-b.png" v-on:click="cancelExit" />
        </div>
      </div>
    </div>
    <!-- 游戏失败弹框 -->
    <div class="GameOver elasticFrameShaw">
      <div class="elasticFrame">
        <img src="../assets/img/happyIdiom/idiom-failure.png" />
        <div class="buttonBottom">
          <img src="../assets/img/happyIdiom/idiom-failure-daan.png"/>
          <img src="../assets/img/happyIdiom/idiom-failure-con1.png" />
          <img src="../assets/img/happyIdiom/idiom-failure-end.png" />
        </div>
      </div>
    </div>
    <!-- 游戏成功 -->
    <div class="GameSuccess elasticFrameShaw">
      <div class="elasticFrame">
        <img src="../assets/img/happyIdiom/happyIdiom_customs.png" />
        <div class="buttonBottom">
          <img src="../assets/img/happyIdiom/happyIdiom_sucess_return.png"/>
          <img src="../assets/img/happyIdiom/happyIdiom_view.png" />
          <img src="../assets/img/happyIdiom/happyIdiom_next_customs.png" />
        </div>
      </div>
    </div>
    <!-- 红包弹框 -->
    <div class="enevlBox">
      <img src="../assets/img/happyIdiom/happyIdiom-envel-close-u.png"  v-bind:class="{hide:isShowAnmate}" v-on:click="showEnevlBox" />
      <div class="showEnevl"  v-bind:class="{show:isShowAnmate}">
        <img src="../assets/img/happyIdiom/happyIdiom-envel-open.png" />
        <div class="buttonBottom">
          <img src="../assets/img/happyIdiom/happyIdiom_sucess_return.png" class="envel-r" />
          <img class="envel-q" src="../assets/img/happyIdiom/idiom-return-y-b.png"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'mianApp',
  props: {
    msg: String
  },
  data () {
    return {
      constant: true,
      textArry:[],
      idiomNum: [],
      fillInBoxIndex: 1,  // 填入框的位置
      idiomText: new Map(),
      idiomTrueArry: new Set(),
      clickIndex: 0,
      isShowAnmate: false,
      exit: false
    }
  },
  created(){
      this.judgeLevel();
      this.setData("职鸿独平若往身惊直叙以独殉翩铺来");
      this.setDataTrue();
      for(let i = 0; i < 4; i++){
        this.idiomText.set(i+1,[]);
      }
      console.log(this.idiomText);
      console.log(this.idiomText.size);
  },
  methods: {
    getData() {

    },
    setData(string){
      let arr = string.split("");
      for(let i = 0; i < arr.length; i++){
        this.textArry.push({
          text: arr[i],
          index: i+1,
          clickIndex:0,
          isClick: false,
          isClear: false
        });
      }
    },
    setDataTrue(){
      let arr = [
        {
        "id": 1187,
        "idiomName": "独往独来",
        "idiomSpell": "dú wǎng dú lái",
        "idiomContent": "指行动自由，没有阻碍。又指作文用字独具一格，后指单独往来。",
        "idiomDerivation": "《庄子·在宥》：“出入六合，游乎九州，独往独来，是谓独有。”",
        "idiomSamples": "破八家藩篱，而自成一～文字。（清·平步青《霞外捃屑·顾黄公春秋论》）",
        "idiomStatus": 1,
        "createTime": 1540991832000
        },
        {
        "id": 2757,
        "idiomName": "平铺直叙",
        "idiomSpell": "píng pū zhí xù",
        "idiomContent": "铺：铺陈；叙：叙述。说话或写文章不加修饰，没有起伏，重点不突出。",
        "idiomDerivation": "清·钱谦益《初学集》卷八十三：“吾读子瞻《司马温公行状》之类，平铺直序（叙），以为古今未有此体。”",
        "idiomSamples": "这篇小说尽管大都是～，但读起来却令人潸然泪下。",
        "idiomStatus": 1,
        "createTime": 1540991832000
        },
        {
        "id": 2761,
        "idiomName": "翩若惊鸿",
        "idiomSpell": "piān ruò jīng hóng",
        "idiomContent": "比喻美女的体态轻盈。",
        "idiomDerivation": "三国魏·曹植《洛神赋》：“（洛神）其形也，翩若惊鸿，婉若游龙。”",
        "idiomSamples": "正在绳子忽低忽昂的走来走去，大有娇若游龙，～之势。（清·曾朴《孽海花》第六回）",
        "idiomStatus": 1,
        "createTime": 1540991832000
        },
        {
        "id": 4663,
        "idiomName": "以身殉职",
        "idiomSpell": "yǐ shēn xùn zhí",
        "idiomContent": "殉：为实现某一目标而献出生命。为忠于本职工作而献出生命。",
        "idiomDerivation": "《孟子·尽心上》：“孟子曰：‘天下有道，以道殉身；天下无道，以身殉道；未闻以道殉乎人者也。’”",
        "idiomSamples": "（白求恩）去年春上到延安，后来到五台山工作，不幸～。（毛泽东《纪念白求恩》）",
        "idiomStatus": 1,
        "createTime": 1540991832000
        }
      ]
      this.idiomTrueArry.add("独往独来");
      this.idiomTrueArry.add("平铺直叙");
      this.idiomTrueArry.add("翩若惊鸿");
      this.idiomTrueArry.add("以身殉职");
    },
    returnStart(){
      // 弹出退出弹框
      this.exit = true;
    },
    judgeLevel() {
      console.log(this.$route.params.spellLevel);
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
          this.idiomNum.fill({isTrue: true,isFasle: false},this.fillInBoxIndex-1,this.fillInBoxIndex);
          this.fillInBoxIndex +=1; 
          this.clickFasle(1);
          this.clearBoxShaw(1);
          // this.idiomText.get(this.fillInBoxIndex).push(item.text);
          // this.idiomText.set(this.fillInBoxIndex,this.idiomText.get(this.fillInBoxIndex));
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
      console.log(arr);
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
      this.isShowAnmate = true;
    },
    exitGameBtn(){
      this.$router.push('/start');
    },
    cancelExit(){
      this.exit = false;
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
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
}
.boxM{
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
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
  display: none;
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
  display: none;
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
  display: none;
  &>img{
    position: absolute;
    width: rem(576rem);
    height: rem(719rem);
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
</style>