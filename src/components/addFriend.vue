<template>
    <div id="addFriend">
        <div class="topNav">
            <div class="returnBtn" v-on:click="clickReturn">
                <img src="../assets/img/happyIdiom/happyIdiom_rankingList-return.png" />
            </div>
            <div class="title">添加好友</div>
        </div>
        <div class="inputBox">
            <div class="input">
                <img src="../assets/img/happyIdiom/happyIdiom_addFriends-search.png"  class="searchicon" v-on:click="searchFriends"/>
                <input type="text" v-model="phoneNumber" name="" value="" placeholder="请输入手机号" @keyup.enter="searchFriends" />
                <img src="../assets/img/happyIdiom/happyIdiom_addFriends_close.png" class="closeicon" v-on:click="clear"/>
            </div>
            <div class="textBtn" v-on:click="searchFriends">搜索</div>
        </div>
        <div class="friendsList" ref="friendsList">
            <div class="contents">
                <ul>
                    <li v-for="item in friendList">
                        <div class="item">
                            <img v-bind:src="item.matchHeadImage" class="headImg" />
                            <div class="name">{{item.matchName}}</div>
                            <div class="addBtn" v-on:click="addFrinedsTogame(item.matchId)">添加</div>
                        </div>
                    </li>
                </ul>
            </div>
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
    name: 'addFriend',
    components:{
        mesg
    },
    data () {
        return {
            phoneNumber: '',
            friendList:[],
            difficultyLevel: 0,
            showHide: false,
            msg: ""
        }
    },
    activated() {
        this.clearData();
        this.difficultyLevel = this.$route.params.spellLevel;  // 获取pk难度
        this.getData();
        this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new Bscroll(this.$refs.friendsList, {
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
        getData() {
          api.getHistoryMatchList().then((res) => {
            let data = res.params.historyMatchList;
            this.friendList.push(...data);
          }).catch((res) => {
            this.msg = res.message;
            this.$refs.mesg.showAnimate();
          });
        },
        addFrinedsTogame(id){
          api.setInviteJoinGame(this.difficultyLevel,id).then((res) => {
             this.$router.push({
               name:'friendsPK',
               params: {
                spellLevel: this.difficultyLevel
               }
             });
          }).catch((res) => {
             this.msg = res.message;
             this.$refs.mesg.showAnimate();
          });
        },
        clickReturn(){
          this.$router.push({
            name:'friendsPK'
          });
        },
        searchFriends() {
            console.log(this.phoneNumber);
            this.friendList = [];
            api.searchGoodFriends(this.phoneNumber).then((res) => {
                 let data = res.params;
                 this.friendList.push(data);
            }).catch((res) => {
               this.msg = res.message;
               this.$refs.mesg.showAnimate();
            })
        },
        clear() {
            this.phoneNumber = '';
        },
        clearData(){
            this.phoneNumber = '';
            this.friendList =[];
            this.difficultyLevel = 0;
            this.showHide = false;
            this.msg = "";
        }
    }
}
</script>

<style scoped lang="scss">
$color : red;
@function rem($n) {
    @return $n/2/37.5;
}
#addFriend{
    position: absolute;
    top: 0;
    bottom:0;
    width: 100%;
    -webkit-overflow-scrolling:touch;
}
.topNav{
    width: 100%;
    height: rem(95rem);
    background-color: #333333;
    position: relative;
    overflow: hidden;
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
.inputBox{
    width: 100%;
    height: rem(130rem);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    background-color: #ffffff;
    .input{
        margin-left: rem(30rem);
        flex: 1;
        height: rem(70rem);
        border-radius: rem(10rem);
        border: 1px solid #BABABA;
        box-shadow: 0 0 1px 1px rgba(186, 186, 186, 0.2);
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        .searchicon{
            width: rem(33rem);
            height: rem(33rem);
            margin-left: rem(21rem);
        }
        input{
            flex:1;
            height: rem(40rem);
            line-height: rem(40rem);
            text-indent: rem(14rem);
            font-size: rem(28rem);
            color: #000000;
        }
        .closeicon{
            width: rem(40rem);
            height: rem(40rem);
            margin-right: rem(21rem);
        }
    }
    .textBtn{
        width: rem(120rem);
        height: rem(130rem);
        line-height: rem(130rem);
        text-align: center;
        color: #41BDFF;
        font-size: rem(31rem);
        font-weight: bold;
    }
}
.friendsList{
    position: absolute;
    top: rem(225rem);
    bottom: 0;
    overflow: scroll;
    -webkit-overflow-scrolling:touch;
    width: 100%;
    background-color: #F3F3F3;
    ul,li{
        width: 100%;
    }
    .item{ 
        height: rem(180rem);
        padding: 0 rem(30rem);
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        background-color: #ffffff;
        .headImg{
           width: rem(80rem);
           height: rem(80rem);
           border-radius: 50%; 
           margin-right: rem(20rem);
           /*border: 1px solid #000000;*/
        }
        .name{
            flex: 1;
            height: rem(80rem);
            line-height: rem(80rem);
            color: #333333;
            font-size: rem(30rem);
        }
        .addBtn{
            width: rem(140rem);
            height: rem(70rem);
            text-align: center;
            line-height: rem(70rem);
            background-color: #41BDFF;
            border-radius: rem(35rem);
            font-size: rem(30rem);
            color: #ffffff;
        }
    }
}
</style>