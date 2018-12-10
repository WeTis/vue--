<template>
    <div id="friendsPK">
        <div class="topNav">
            <div class="returnBtn" v-on:click="clickReturn">
                <img src="../assets/img/happyIdiom/happyIdiom_rankingList-return.png" />
            </div>
            <div class="title">好友PK</div>
            <div class="add">添加</div>
        </div>
        <div class="topPKNav">
            <div class="active">简单</div>
            <div>普通</div>
            <div>困难</div>
        </div>
        <div class="main">
            <img class="bg" src="../assets/img/happyIdiom/happyIdiom_friendsPk_bg.png" />
            <div class="wrapper" ref="wrapper">
                <!-- 刷新提示信息 -->
                <div class="content">
                    <div class="top-tip" v-bind:class="{pulldown:pulldownShow}">
                    <span class="refresh-hook">{{pulldownMsg}}</span>
                    </div>
                <ul class="contentUL">
                    <li v-for="item in items">
                        <div class="item">
                            <div class="left">
                                <img src="" class="headImg" />
                                <div class="text">XXX向你PK</div>
                                <div class="record">暂无记录</div>
                            </div>
                            <div class="center">vs</div>
                            <div class="right">
                                <img src="" class="headImg"/>
                                <div class="btn startBtn">开始</div>
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
</template>

<script>
import Bscroll from 'better-scroll'
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
          items: 10
        }
    },
    created() {
        this.loadData()
    },
    methods: {
        clickReturn(){
          this.$router.push({
            name:'start'
          });
        },
        loadData() {
          // this.data = res.data.concat(this.data)
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new Bscroll(this.$refs.wrapper, {
                scrollY: true,
                pullDownRefresh: {
                  threshold: 50,
                  stop: 50
                }
              })
              // this.scroll.scrollTo(0, 500, 800, "easing")
              // this.scroll.on('touchEnd', (pos) => {
              //   // 下拉动作
              //   if (pos.y > 50) {
              //     this.loadData();
              //     console.log("下拉刷新");
              //     this.pulldownShow = true;
              //     setTimeout(() => {
              //       this.pulldownShow = false;
              //       this.scroll.scrollTo(-50, 0, 1, easing)
              //       this.scroll.refresh();
              //     },1000);
              //   }else if(pos.y<(this.scroll.maxScrollY - 30)){
              //     console.log("上拉加载")
              //   }
              // })
              this.scroll.on('pullingDown', () => {
                console.log("下拉");
                clearTimeout(timer);
                this.items = 15;
                this.pulldownMsg = "正在刷新";
                timer = setTimeout(() => {
                console.log("下拉完成");
                this.pulldownMsg = "下拉刷新";
                this.scroll.scrollBy(0, -50, 800, "easing");
                
                this.scroll.refresh();
                this.scroll.finishPullDown();
                }, 1000);
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
        // padding-top: rem(100rem);
        bottom: 0;
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
            width: rem(80rem);
            height: rem(80rem);
            border-radius: 50%;
            border: 1px solid #000;
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
        }
        .center{
          color: #F6F10C;
          font-size: rem(60rem);
          font-style: italic;
        }
    }
}
</style>