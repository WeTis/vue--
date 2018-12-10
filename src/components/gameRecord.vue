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
        <div class="gameRecordList">
            <div class="item" v-for="item in 10">
                <div class="headImg">
                    <img src="../assets/img/happyIdiom/happyIdiom-record-j.png" />
                    <div class="type">简单模式</div>
                </div>
                <div class="mainText">
                    <img src="" />
                    <div class="record">
                        <div class="name">打破个人记录</div>
                        <div class="time">2018.02.16</div>
                    </div>
                    <div class="reward">
                        <div class="describe">pk成功</div>
                        <div class="amount">￥ 0.9</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GameRecord',
    props: {
        msg: String
    },
    data () {
        return {

        }
    },
    methods: {
        clickReturn(){
          this.$router.push({
            name:'start'
          });
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
            border: 1px solid #000;
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