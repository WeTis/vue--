<template>
    <div id="friendsPK">
        <div class="topNav">
            <div class="returnBtn" v-on:click="clickReturn">
                <img src="../assets/img/happyIdiom/happyIdiom_rankingList-return.png" />
            </div>
            <div class="title">好友PK</div>
            <div class="add" v-on:click="jumpToAddFriend">添加</div>
        </div>
        <div class="topPKNav">
            <div v-bind:class="{active:active == 1 }" v-on:click="tabClickNav(1)">简单</div>
            <div v-bind:class="{active:active == 2 }" v-on:click="tabClickNav(2)">普通</div>
            <div v-bind:class="{active:active == 3 }" v-on:click="tabClickNav(3)">困难</div>
        </div>
        <div class="main">
            <img class="bg" src="../assets/img/happyIdiom/happyIdiom_friendsPk_bg.png" />
            <div class="wrapper" ref="wrapper">
                
                <!-- 刷新提示信息 -->
                <div class="content">
                  <div class="boxWrappp" id="boxWrappp">
                    <div class="top-tip" v-bind:class="{pulldown:pulldownShow}">
                    <span class="refresh-hook">{{pulldownMsg}}</span>
                    </div>
                    <ul class="contentUL">
                        <li v-for="(item,index) in friendsPKList">
                            <div class="item">

                                <div class="left" v-if="userId == item.initiatorId">
                                    <div class="headImg">
                                      <img v-bind:src="item.recipientImage" />
                                      <img class="winICon" src="../assets/img/happyIdiom/happlyIdiom_PK_success.png" v-show="item.recipientId == item.winnerId"/>
                                    </div>
                                    
                                    <div class="text">{{item.recipientName}}</div>
                                    <div class="record" v-if="item.recipientFinishStatus == 1">本局最高通过{{item.recipientRoundHighLevel}}关</div>
                                    <div class="record" v-if="item.recipientFinishStatus == 0">历史最佳纪录{{item.recipientHighestRoundLevel}}关</div>
                                </div>
                                <div class="left" v-if="userId == item.recipientId">
                                    <div class="headImg">
                                      <img v-bind:src="item.initiatorImage"  />
                                      <img class="winICon" src="../assets/img/happyIdiom/happlyIdiom_PK_success.png" v-show="item.initiatorId == item.winnerId"/>
                                    </div>
                                    <div class="text">{{item.initiatorName}}向你PK</div>
                                    <div class="record" v-if="item.initiatorFinishStatus == 1">本局最高通过{{item.initiatorRoundHighLevel}}关</div>
                                    <div class="record" v-if="item.initiatorFinishStatus == 0">历史最佳纪录{{item.initiatorHighestRoundLevel}}关</div>
                                </div>
                                <div class="center">vs</div>
                                <div class="right" v-if="userId == item.initiatorId">
                                    <div class="headImg">
                                      <img v-bind:src="item.initiatorImage"/>
                                       <img class="winICon" src="../assets/img/happyIdiom/happlyIdiom_PK_success.png" v-show="item.initiatorId == item.winnerId"/>
                                    </div>
                                    
                                    <div class="btn startBtn" v-if="item.initiatorFinishStatus == 0"  v-on:click="clickStart(item.id)">开始</div>
                                    <div class="btn" v-if="item.initiatorFinishStatus == 1 && item.recipientFinishStatus == 0" >对方未开始</div>
                                    <div class="btn" v-if="item.initiatorFinishStatus == 1 && item.recipientFinishStatus == 1 && item.rewardValidStatus != 1 && item.rewardValidStatus != 3">
                                     {{judgeWinner(item.winnerId,item.recipientId)}}
                                    </div>
                                    <div class="btn envelBtn" v-if="userId == item.winnerId  && item.rewardValidStatus == 3"  v-on:click="clickenvelBtn(index,item.id)">
                                      领取红包
                                    </div>
                                    <div class="btn envelBtned" v-if="userId == item.winnerId  && item.rewardValidStatus == 1"  >
                                      已领取
                                    </div>
                                </div>
                                <div class="right" v-if="userId == item.recipientId">
                                     <div class="headImg">
                                      <img v-bind:src="item.recipientImage"/>
                                      <img class="winICon" src="../assets/img/happyIdiom/happlyIdiom_PK_success.png" v-show="item.recipientId == item.winnerId"/>
                                     </div>
                                    <div class="btn startBtn" v-if="item.recipientFinishStatus == 0" v-on:click="clickStart(item.id)">挑战</div>
                                    <div class="btn" v-if="item.initiatorFinishStatus == 0 && item.recipientFinishStatus == 1"  >对方未开始</div>
                                     <div class="btn" v-if="item.initiatorFinishStatus == 1 && item.recipientFinishStatus == 1 && item.rewardValidStatus != 1 && item.rewardValidStatus != 3" >
                                     {{judgeWinner(item.winnerId,item.initiatorId)}}
                                    </div>
                                     <div class="btn envelBtn" v-if="userId == item.winnerId  && item.rewardValidStatus == 3"  v-on:click="clickenvelBtn(index,item.id)">
                                      领取红包
                                    </div>
                                    <div class="btn envelBtned" v-if="userId == item.winnerId  && item.rewardValidStatus == 1" >
                                      已领取
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                     <!-- 底部提示信息 -->
                    <div class="bottom-tip">
                     <span class="loading-hook">{{pullupMsg}}</span>
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
    </div>
</template>

<script>
import $ from 'jquery';
import {Api} from '../api/api.js'
import Bscroll from 'better-scroll'

const api = new Api();
let timer = null;

export default {
    name: 'friendsPK',
    props: {
        msg: String
    },
    data () {
        return {
          pulldownMsg: "下拉刷新",
          pullupMsg: "加载更多",
          pulldownShow: false,
          items: 10,
          active: 1,
          userId: 0,
          friendsPKList: [],
          ordinaryList: [],
          simpleList: [],
          difficultList: [],
          enevlBoxShow: false,
          isShowAnmate: false,
          rewardNum: 0,
          indexfriendsPKList: 0,
          pkLogId: 0,
          pageNum: 1,
          pullingUpStatus: false
        }
    },
    created() {
        this.active = this.$route.params.spellLevel || 1;
        this.getDataList();
        this.loadData();
    },
    methods: {
      getDataList() {
        api.getPKList(this.active,1).then((res) => {
          let data = res.params;
          this.userId = data.userSelfId;
          this.friendsPKList.push(...data.pkList);
          this.scroll.refresh();
        }).catch(() => {

        })
      },
      setData(data) {
        
      },
      judgeWinner(winnerId,id) {
        if(winnerId == this.userId){
          return "胜出"
        }else if(winnerId == id){
          return "失败"
        }else {
          return "平局"
        }
      },
      clickReturn(){
        this.$router.push({
          name:'start'
        });
      },
      jumpToAddFriend(){
        this.$router.push({
          name:'addFriend',
          params: {
            spellLevel: this.active
          }
        });
      },
      clickStart(pkLogId) {
         this.$router.push({
          name:'mainApp',
          params: {
            spellLevel: this.active,
            pkLogId: pkLogId
          }
        });
      },
      clickenvelBtn(num,pkLogId) {
        // 点击领取红包
        this.enevlBoxShow = true;
        this.indexfriendsPKList = num;
        this.pkLogId = pkLogId;
      },
      showEnevlBox(){
        console.log(this.pkLogId);
        api.getReward(this.pkLogId).then((res) => {
          this.rewardNum = res.params.rewardAmount;
          this.friendsPKList[this.indexfriendsPKList].rewardValidStatus = 1;
          this.isShowAnmate = true;
        }).catch(() => {
            console.log("是吧")
        });

      },
      hideEnvel() {
        this.enevlBoxShow = false;
        this.isShowAnmate = false;
      },
      loadData() {
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new Bscroll(this.$refs.wrapper, {
            scrollY: true,
            click: true,
            pullDownRefresh: {
              threshold: 50,
              stop: 50
            },
            pullUpLoad: {
              threshold: -70,
            }
          })

          this.scroll.on('pullingDown', () => {
            clearTimeout(timer);
            this.pulldownMsg = "正在刷新";
            api.getPKList(this.active,1).then((res) => {
              let data = res.params;
              this.userId = data.userSelfId;
              this.friendsPKList = [];
              this.friendsPKList.push(...data.pkList);
              this.pulldownMsg = "下拉刷新";
              this.scroll.scrollBy(0, -50, 800, "easing");
              this.pageNum = 1;
              setTimeout(() => {
                this.scroll.refresh();
                this.scroll.finishPullDown();
              },300);
             
            }).catch(() => {
              this.pulldownMsg = "刷新失败";
              this.scroll.scrollBy(0, -50, 800, "easing");
              this.pulldownMsg = "下拉刷新";
            })
          });

          this.scroll.on('pullingUp', () => {
            this.pullupMsg = "正在加载";
            console.log("上拉加载");
              api.getPKList(this.active,this.pageNum+1).then((res) => {
                
                this.pullupMsg = "加载更多";
                if(res.params.pkList.length > 0){
                  this.pageNum = this.pageNum+1;
                  let data = res.params;
                  this.userId = data.userSelfId;
                  this.friendsPKList.push(...data.pkList);

                  setTimeout(() => {
                    this.scroll.refresh();
                    this.scroll.finishPullUp();
                  },300);
                  
                }else{
                  this.scroll.finishPullUp();
                }
                
                
              }).catch(() => {
              })
            
          });

        } else {
          this.scroll.refresh()
        }
      })
      },
      tabClickNav(num) {
        console.log(num);
        this.active = num;
        this.pageNum = 1;
        this.friendsPKList = [];
        this.getDataList();
      }

    }
}
</script>

<style scoped lang="scss">
$color : red;
@function rem($n) {
    @return $n/2/37.5;
}
.topNav{
    width: 100%;
    height: rem(95rem);
    background-color: #333333;
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
        font-family: "PingFang-SC-Medium";
    }
    .add{
        position:absolute;
        top: 0;
        right: 0;
        width: rem(100rem);
        height: rem(95rem);
        line-height: rem(95rem);
        font-size: rem(30rem);
        color: #ffffff;
    }
}
.topPKNav{
    position: relative;
    z-index: 1;
    background-color:#333333;
    height: rem(120rem);
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    border-bottom-left-radius: rem(20rem);
    border-bottom-right-radius: rem(20rem);
    div{
        width: rem(200rem);
        height: rem(80rem);
        border-radius: rem(10rem);
        background-color: #1F1F1F;
        line-height: rem(80rem);
        text-align: center;
        font-size: rem(30rem);
        color: #ffffff;
        letter-spacing: 2px;
        transform: skewX(-15deg);
    }
    .active{
        background-color: #FABD19;
    }
}
.main{
    position:fixed;
    top: rem(200rem);
    bottom:0;
    width: 100%;
    z-index: 0;
    .bg{
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
    }
    .wrapper{
        // margin-top: rem(20rem);
        overflow: hidden;
        width: 100%;
        position:absolute;
        top: rem(20rem);
        // padding-bottom: rem(100rem);
        bottom: - rem(100rem);
        .boxWrappp{
          position: relative;
          width: 100%;
          min-height: 100%;
          // margin-bottom: rem(100rem);
        }
        .top-tip{
            position:absolute;
            top: - rem(100rem);
            width: 100%;
            height: rem(100rem);
            line-height: rem(100rem);
            text-align: center;
            transition: all 0.5s;
            span{
                font-size: rem(30rem);
                color: #ffffff;

            }
        }
        .pulldown{
            // position:relative;
            // top: 0;
        }
        .contentUL{
          padding-bottom: rem(100rem);
        }
        .bottom-tip{
            // position:absolute;
            bottom:0;
            width: 100%;
            height: rem(100rem);
            line-height: rem(100rem);
            text-align: center;
            transition: all 0.5s;
            span{
                font-size: rem(30rem);
                color: #ffffff;
            }
        }
    }
    .content{
      min-height: 101%;
    }
    .content li{
        width: 100%;
        .item{
            display: flex;
            height: rem(300rem);
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            &>div{
             text-align: center;
           }
        }
        
        .headImg{
            display: inline-block;
            position: relative;
            width: rem(80rem);
            height: rem(80rem);
            img{
               width: 100%;
               height: 100%;
               border-radius: 50%;
            }
            .winICon{
              position:absolute;
              right: - rem(19rem);
              top: - rem(19rem);
              width: rem(38rem);
              height: rem(38rem);
            }
           
        }
        .left{
            flex:1;
          .text,.record{
            width: 100%;
            color: #ffffff;
            font-weight: bold;
            text-align: center;
          }
          .text{
            font-size: rem(30rem);
            padding:  rem(16rem) 0;
          }
          .record{
            font-size: rem(24rem);
          }

        }
        .right{
            flex:1;
            .btn{
               width: rem(180rem);
               height: rem(70rem);
               line-height: rem(70rem);
               font-size:  rem(36rem);
               text-align: center;
               color: #ffffff;
               margin:  rem(25rem) auto;
            }
            .startBtn{
                background-color:#41BDFF;
                border-radius: rem(35rem);
                font-size: rem(30rem);
            }
            .envelBtn{
                background-color: #FF4141;
                border-radius: rem(35rem);
                font-size: rem(30rem);
            }
            .envelBtned{
                background-color: #eee;
                border-radius: rem(35rem);
                font-size: rem(30rem);
            }
        }
        .center{
          color: #F6F10C;
          font-size: rem(60rem);
          font-style: italic;
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