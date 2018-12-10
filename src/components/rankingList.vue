<template>
  <div id="rankingList">
   <div class="topNav">
      <div class="returnBtn" v-on:click="clickReturn">
        <img src="../assets/img/happyIdiom/happyIdiom_rankingList-return.png" />
      </div>
      <div class="title">英雄排行榜</div>
    </div>
    <div class="centerbox">
      <div class="titleName">我的闯关</div>
      <div class="rankingNum"><span>23</span>名</div>
      <div class="results">
        <div class="yesterday">
          昨日成绩
          <span>56</span>
        </div>
        <div class="history">
          历史最佳
          <span>98</span>
        </div>
      </div>
    </div>
    <div class="rangkingList">
       <div class="tabBtn">
         <div class="nowBtn active">实时排行</div>
         <div class="yesterdayBtn">昨日排行</div>
       </div>
       <div class="listS">
         <div class="list" v-for="item in 10">
           <div class="left">
             <img src="../assets/img/happyIdiom/happyIdiom_rankingList_1.png" />
             <span></span>
           </div>
           <img src="" class="headImg" />
           <div class="descrptDiv">
             <span class="name">黄若然</span>
             <span class="info">已闯10关</span>
           </div>
           <div class="num">
             ￥20.0
           </div>
         </div>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rankingList',
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
#rankingList{
  background-color: #ffffff;
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
  position:fixed;
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
    top: rem(130rem);
    width: 100%;
    overflow: auto;
  }
  .list{
    position:relative;
    height: rem(120rem);
    width: rem(660rem);
    margin: 0 auto;
    margin-top: rem(40rem);
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
      border: 1px solid #000000;
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

</style>