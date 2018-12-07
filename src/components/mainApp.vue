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
          <div class="item"  @click="toggleClick(item)" v-for="item in textArry" v-bind:class="{item24: textArry.length >= 24}" >
            <img src="../assets/img/happyIdiom/happyIdiom-main-tian.png" class="itemBg" />
            <span class="itemText">{{item.text}}</span>
          </div>
      </div>
    </div>
    <div class="time" >00:30</div>
    <div class="resultsBox" v-bind:class="{resultsBox6: idiomNum > 4}">
      <div class="resultsItem"  v-for="item in idiomNum">
        <img src="../assets/img/happyIdiom/happyIdiom_filltext-box.png" class="resultsBg" />
        <div class="resultsText">好事成双{{item}}</div>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'mianApp',
  props: {
    msg: String
  },
  data () {
    return {
      constant: true,
      textArry:[{
        text: "擦",
        index: 1,
        isClick: false,
        isClear: false
      },{
        text: "擦",
        index: 2,
        isClick: false,
        isClear: false
      },{
        text: "娃",
        index: 3,
        isClick: false,
        isClear: false
      },{
        text: "擦",
        index: 4,
        isClick: false,
        isClear: false
      },{
        text: "娃",
        index: 5,
        isClick: false,
        isClear: false
      },{
        text: "擦",
        index: 6,
        isClick: false,
        isClear: false
      },{
        text: "娃",
        index: 7,
        isClick: false,
        isClear: false
      },{
        text: "擦",
        index: 8,
        isClick: false,
        isClear: false
      },{
        text: "擦",
        index: 9,
        isClick: false,
        isClear: false
      },{
        text: "擦",
        index: 10,
        isClick: false,
        isClear: false
      },{
        text: "擦",
        index: 11,
        isClick: false,
        isClear: false
      },{
        text: "娃",
        index: 12,
        isClick: false,
        isClear: false
      },{
        text: "擦",
        index: 13,
        isClick: false,
        isClear: false
      },{
        text: "擦",
        index: 14,
        isClick: false,
        isClear: false
      },{
        text: "安",
        index: 15,
        isClick: false,
        isClear: false
      },{
        text: "擦",
        index: 16,
        isClick: false,
        isClear: false
      }],
      idiomNum: 4
    }
  },
  created(){
      this.judgeLevel();
  },
  methods: {
    returnStart(){
      this.$router.push('/start');
    },
    judgeLevel() {
      console.log(this.$route.params.spellLevel);
      let lev = this.$route.params.spellLevel;
      if(lev == 1){
        this.textNum = 16;
        this.idiomNum = 4;
      }else if(lev == 2){
        this.textNum = 24;
        this.idiomNum = 6;
      }else if(lev == 3){
        this.textNum = 36;
        this.idiomNum = 9;
      }else{
        this.textNum = 16;
        this.idiomNum = 4;
      }
    },
    toggleClick(n) {
      console.log(n);
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
    img{
      width: 100%;
      height: 100%;
      position:absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
    .resultsText{
       width: 100%;
      height: 100%;
      text-align: center;
      font-size: rem(30rem);
      font-family: "PingFang-SC-Bold";
      color: #C15708;
      font-weight: bold;
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
</style>