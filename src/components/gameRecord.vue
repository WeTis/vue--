<template>
    <div id="GameRecord">
        <div class="bgimg">
            <img src="../assets/img/happyIdiom/happyIdiom-start-bg.png"/>
        </div>
        <div class="topNav">
            <div class="returnBtn" v-on:click="clickReturn">
                <img src="../assets/img/happyIdiom/happyIdiom_rankingList-return.png" />
            </div>
            <div class="title">奖励记录</div>
        </div>
        <div class="gameRecordList" ref="wrapperG">
            <div class="contentS">
                <div class="item" v-for="item in gameRecordList">
                <div class="headImg">
                    <img src="../assets/img/happyIdiom/happyIdiom-record-j.png" />
                    <div class="type">奖励记录</div>
                </div>
                <div class="mainText">
                    <img v-bind:src="item.userHeadImage" />
                    <div class="record">
                        <div class="name">{{item.extraMessage}}</div>
                        <div class="time">{{changeTime(item.createTime)}}</div>
                    </div>
                    <div class="reward">
                        <!-- <div class="describe">pk成功</div> -->
                        <div class="amount">￥ {{item.rewardAmount}}</div>
                    </div>
                </div>
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
    name: 'GameRecord',
    components:{
        mesg
    },
    data () {
        return {
            msg: "",
            gameRecordList: []
        }
    },
    created(){
        console.log("GameRecord");
    },
    activated(){
      this.gameRecordList = [];
      console.log("贾爱爱吹牛");
      this.gameRecordListData();
      this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new Bscroll(this.$refs.wrapperG, {
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
    deactivated(){
      console.log("hsdasd")
    },
    methods: {
        clickReturn(){
          this.$router.push({
            name:'start'
          });
        },
        gameRecordListData() {
            this.msg = "正在获取数据";
            this.$refs.mesg.showAnimate();

            api.getUserRewardList().then((res) => {
              let arr = res.params.rewardLogList;
              console.log(arr);
              this.gameRecordList.push(...arr);
              this.$refs.mesg.hideAnimate();
              this.$refs.mesg.hideerrorFn();
            }).catch((err) => {

               this.$refs.mesg.hideAnimate();

               if(err == "timeOut"){
                this.$refs.mesg.ShowerrorFn();
               }else{
                this.msg = "获取失败,请返回重试";
                this.$refs.mesg.showAnimate(5000);
               }
            })
        },
        changeTime(time) {
            let date = new Date(time);
            let Y = date.getFullYear() + '.';
            let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '.';
            let D = date.getDate() + ' ';
            let h = date.getHours() + ':';
            let m = date.getMinutes() + ':';
            let s = date.getSeconds();
            return Y+M+D+h+m+s;
        },
        replaceGetParent(){
            this.gameRecordList = [];
            this.gameRecordListData();
            this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new Bscroll(this.$refs.wrapperG, {
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
        }
    }
}
</script>

<style scoped lang="scss">
$color : red;
@function rem($n) {
    @return $n/2/37.5;
}
#GameRecord{
    position:absolute;
    top: 0;
    bottom:0;
    width: 100%;
     overflow: hidden;
    // -webkit-overflow-scrolling: touch;
    .contentS{
        padding-top: rem(40rem);
    }
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
}
.gameRecordList{
    position:fixed;
    top: rem(95rem);
    bottom: 0;
    width: 100%;
    overflow: auto;
}
.item{
    width: rem(700rem);
    height: rem(282rem);
    margin: 0 auto;
    margin-top: rem(40rem);
    position:relative;
    .headImg{
        width: 100%;
        height: 100%;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
        .type{
            position:absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: rem(80rem);
            line-height: rem(80rem);
            text-align: center;
            color: #ffffff;
            font-size: rem(36rem);
            font-weight: bold;
        }
    }
    .mainText{
        position:absolute;
        height: rem(220rem);
        bottom: rem(20rem);
        width: rem(600rem);
        left: 50%;
        margin-left: - rem(300rem);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        img{
            width: rem(80rem);
            height: rem(80rem);
            border-radius: 50%;
            margin-right: rem(30rem);
        }
        .record{
            flex:auto;
            .name{
                font-size: rem(36rem);
                color: #000000;
            }
            .time{
                font-size: rem(30rem);
                color:#BABABA;
            }
        }
        .reward{
            flex: auto;
            padding-right: rem(24rem);
            div{
                font-size: rem(36rem);
                font-weight: bold;
                color: #FF6262;
                text-align: right;
            }
            .describe{
                font-style:italic;
            }
            .amount{

            }
        }

    }
}
</style>