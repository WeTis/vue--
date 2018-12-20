<template>
  <div id="rankingList">
   <div class="topNav">
      <div class="returnBtn" v-on:click="clickReturn">
        <img src="../assets/img/happyIdiom/happyIdiom_rankingList-return.png" />
      </div>
      <div class="title">英雄排行榜</div>
      <div class="isEnvel" v-on:click="showoutEnevlBox" v-show="showEnvelImg">
        <img src="../assets/img/happyIdiom/happyIdiom_rankingList_envel.png" />
      </div>
    </div>
    <div class="centerbox">
      <div class="titleName">我的闯关</div>
      <div class="rankingNum"><span>{{topData.todayRank < 101 ? topData.todayRank : ""}}</span>{{topData.todayRank >= 100  ? "暂无排" : ""}}名</div>
      <div class="results">
        <div class="yesterday">
          昨日最佳
          <span>{{topData.yesterdayPassLevel}}</span> 关
        </div>
        <div class="history">
          历史最佳
          <span>{{topData.bestPassLevel}}</span> 关
        </div>
      </div>
    </div>
    <div class="rangkingList">
       <div class="tabBtn">
         <div class="nowBtn " v-bind:class="{active:active}" v-on:click="tabBtnClick(1)">实时排行</div>
         <div class="yesterdayBtn" v-bind:class="{active:!active}" v-on:click="tabBtnClick(2)">昨日排行</div>
       </div>
       <div class="listS" ref="listS">
        <div class="contentS">
          <div class="list" v-for="item in todayRankList">
           <div class="left">
             <img src="../assets/img/happyIdiom/happyIdiom_rankingList_1.png" v-show="item.rankLevel == 1"/>
             <img src="../assets/img/happyIdiom/happyIdiom_rankingList_2.png" v-show="item.rankLevel == 3"/>
             <img src="../assets/img/happyIdiom/happyIdiom_rankingList_3.png" v-show="item.rankLevel == 2"/>
             <span v-show="item.rankLevel > 3">{{item.rankLevel}}</span>
           </div>
           <img v-bind:src="item.userHeadImage" class="headImg" />
           <div class="descrptDiv">
             <span class="name">{{item.userName}}</span>
             <span class="info">已闯{{item.roundLevel}}关</span>
           </div>
           <div class="num">
             ￥{{item.rewardAmount}}
           </div>
         </div>
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
          <img class="envel-q" src="../assets/img/happyIdiom/idiom-return-y-b.png" v-on:click="hideEnvel" />
        </div>
      </div>
    </div>
    <mesg ref="mesg" v-bind:msg="msg"></mesg>
  </div>
</template>

<script>
import $ from 'jquery';
import {Api} from '../api/api.js'
import Bscroll from 'better-scroll'
import mesg from './mesg';

const api = new Api();

export default {
  name: 'rankingList',
  components:{
        mesg
    },
  data () {
    return {
      active: true,
      topData: {},
      todayRankList: [],
      historyList: [],
      nowList: [],
      enevlBoxShow: false,
      rewardNum: 0,
      isShowAnmate: false,
      showEnvelImg: false,
      msg: ""
    }
  },
  activated(){
     this.active = true;
     this.showEnvelImg = false;
     this.todayRankList = [];
     this.nowList = [];

     this.getRankingListData();
     this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new Bscroll(this.$refs.listS, {
                click: true,
                scrollY: true,
                stopPropagation: true,
                bounce: {
                  top: false,
                  bottom: false,
                  left: false,
                  right: false 
                }
              })
            } else {
              this.scroll.refresh()
            }
          })
  },
  methods: {
    clickReturn(){
      this.$router.push({
        name:'start'
      });
    },
    getRankingListData() {
      this.todayRankList = [];
      if(this.nowList.length > 0) {
         this.todayRankList.push(...this.nowList)
      }else{
        api.getUserRank().then((res) => {
        let data = res.params;
        if(data.rewardStatus == 1){
            this.showEnvelImg = true;
        };
         this.topData = {
           bestPassLevel: data.bestPassLevel,
           todayRank: data.todayRank,
           yesterdayPassLevel: data.yesterdayPassLevel
         };
         this.nowList.push(...data.todayRankList);
         this.todayRankList.push(...data.todayRankList);
        }).catch(() => {

        })
      }
      
    },
    getUserYesterdayRank() {
      this.todayRankList = [];
      if(this.historyList.length > 0){
        this.todayRankList.push(...this.historyList)
      }else{
        api.getUserYesterdayRank().then((res) => {
          let data = res.params;
        this.historyList.push(...data.yesterdayRankList);
        this.todayRankList.push(...data.yesterdayRankList);
        }).catch(() => {

        })
      }
      
    },
    tabBtnClick(num) {
      this.todayRankList = [];
      if(num == 1){
       this.active = true;
       this.getRankingListData();
      }else if(num == 2){
       this.active = false;
       this.getUserYesterdayRank();
      }
    },
    showoutEnevlBox() {
      // 显示hongb,
      this.enevlBoxShow = true;
    },
    showEnevlBox() {
      api.getReward().then((res) => {
          this.rewardNum = res.params.rewardAmount;
          this.isShowAnmate = true;
        }).catch(() => {
            console.log("是吧");
            this.msg = "红包已过期";
            this.$refs.mesg.showAnimate();
            this.enevlBoxShow = false;
        });
    },
    hideEnvel() {
        this.enevlBoxShow = false;
        this.isShowAnmate = false;
      },
  }
}
</script>

<style scoped lang="scss">
$color : red;
@function rem($n) {
  @return $n/2/37.5;
}
#rankingList{
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
}
.topNav{
  width: 100%;
  height: rem(95rem);
  background-color: #FABD19;
  position: relative;
  .returnBtn{
    position:absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: rem(80rem);
    height: rtem(95rem);
    img{
      display: block;
      width: rem(20rem);
      height: rem(34rem);
      margin: rem(30rem);
    }
  }
  .title{
    width: 100%;
    height: 100%;
    line-height: rem(95rem);
    text-align: center;
    color: #ffffff;
    font-size: rem(36rem);
    letter-spacing: 1px;
    // font-weight: bold;
    font-family: "PingFang-SC-Medium";
  }
  .isEnvel{
    position:absolute;
    top: rem(30rem);
    right: rem(47rem);
    z-index: 10;
    width: rem(42rem);
    height: rem(54rem);
    img{
      width: 100%;
      height: 100%;
    }
    &::before{
      display: block;
      content: "";
      position: absolute;
      width: rem(12rem);
      height: rem(12rem);
      border-radius: 50%;
      background-color: #E8360C;
      top: - rem(12rem);
      right: - rem(12rem);
    }
  }
}
.centerbox{
  width: 100%;
  height: rem(460rem);
  background-color:#FABD19;
  overflow: hidden;
  .titleName{
    width: 100%;
    text-align: center;
    font-size: rem(30rem);
    color: #ffffff;
    margin: rem(38rem) 0;
    margin-top: rem(20rem);
  }
  .rankingNum{
    text-align: center;
    line-height: rem(72rem);
    span{
      font-size: rem(72rem);

    }
    color: #ffffff;
    font-size: rem(30rem);
  }
  .results{
    margin: rem(40rem) 0;
    display: flex;
    // flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    div{
      font-size: rem(30rem);
      color: #ffffff;
      span{
        font-size: rem(36rem);
        color: #f52828;
        font-weight: bold;
      }
    }
  }
}
.rangkingList{
  position:absolute;
  width: rem(690rem);
  padding-top: rem(40rem);
  padding-bottom:rem(25rem);
  background-color:#ffffff;
  border-radius: rem(10rem);
  left: 50%;
  margin-left: - rem(345rem);
  top: rem(400rem);
  bottom:rem(47rem);
  box-shadow: 0 0 3px 3px rgba(0,0,0,0.07);
  .tabBtn{
    width: rem(500rem);
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    div{
      width: 50%;
      height: rem(90rem);
      border:rem(2rem) solid #FABD19;
      color: #FABD19;
      text-align: center;
      line-height: rem(90rem);
      font-size: rem(30rem);
      box-sizing: border-box;
    }
    .nowBtn{
       border-top-left-radius: rem(45rem);
      border-bottom-left-radius: rem(45rem);
    }
    .yesterdayBtn{
      border-top-right-radius: rem(45rem);
      border-bottom-right-radius: rem(45rem);
    }
    .active{
      color: #ffffff;
      background-color:#FABD19;
    }
  }
  .listS{
    position: absolute;
    bottom: 0;
    top: rem(170rem);
    width: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .list{
    position:relative;
    height: rem(120rem);
    width: rem(660rem);
    margin: 0 auto;
    margin-bottom: rem(40rem);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    &::after {
      position: absolute;
      bottom: 0;
      right: 0;
      display: block;
      content: '';
      width: 100%;
      height: 1px;
      background-color: #F5F2ED;
      -webkit-transform: scaleY(0.5);
      -ms-transform: scaleY(0.5);
      transform: scaleY(0.5);
      -webkit-transform-origin: 0 0;
      -ms-transform-origin: 0 0;
      transform-origin: 0 0;
    }
    .left{
      width: rem(40rem);
      height: 100%;
      line-height: rem(120rem);
      margin-left: rem(20rem);
      margin-right: rem(20rem);
      img{
        width: rem(40rem);
        height: rem(59rem);
        margin-top: rem(31rem);
      }
    }
    .headImg{
      width: rem(80rem);
      height: rem(80rem);
      /*border: 1px solid #000000;*/
      border-radius: 50%;
      margin-right: rem(20rem);
    }
    .descrptDiv{
      flex:auto;
      line-height: rem(120rem);
      .name{
        color: #292621;
        font-size: rem(30rem);
      }
      .info{
        color: #BABABA;
        font-size: rem(24rem);
        padding-left: rem(13rem);
      }
    }
    .num{
       flex:auto;
      line-height: rem(120rem);
      font-size: rem(30rem);
      color: #FF9900;
      padding-right: rem(20rem);
      text-align: right;
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
    top: 50%;
    margin-top: - rem(359rem);
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
</style>