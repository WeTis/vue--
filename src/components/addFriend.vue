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
            <div class="textBtn">取消</div>
        </div>
        <div class="friendsList">
            <ul>
                <li v-for="item in 10">
                    <div class="item">
                        <img src="" class="headImg" />
                        <div class="name">黄少阳</div>
                        <div class="addBtn">添加</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'addFriend',
    props: {
        msg: String
    },
    data () {
        return {
            phoneNumber: ''
        }
    },
    methods: {
        clickReturn(){
          this.$router.push({
            name:'friendsPK'
          });
        },
        searchFriends() {
            console.log(this.phoneNumber);
        },
        clear() {
            this.phoneNumber = '';
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
            height: rem(70rem);
            line-height: rem(70rem);
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
    position: fixed;
    top: rem(225rem);
    bottom: 0;
    overflow: auto;
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
           border: 1px solid #000000;
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