<template>
  <div id="mesg">
    <div class="mesg" v-show="showHide">
       <span>{{msg}}</span>
     </div>
     <div class="error" v-show="Showerror">
       <div class="imgbox">
         <img src="../assets/img/happyIdiom/error.png" />
         <div class="btnlist">
           <span v-on:click="exitError">退出</span>
           <span class="active" v-on:click="replaceGet">重试</span>
         </div>
       </div>
       
     </div>
  </div>
 
</template>

<script>
export default {
  name: 'mesg',
  props: {
    msg: String,
  },
  data () {
    return {
      showHide: false,
      timer: null,
      Showerror: false,
      apiNum: 0,  // 判断执行父元素的哪一个重试函数
    }
  },
  created() {
    console.log(this.showHide)
  },
  methods: {
    showAnimate(time) {
      let times = time || 20000;
      clearTimeout(this.timer);
      this.showHide = true;
      this.timer = setTimeout(() => {
        this.showHide = false;
      },times);
    },
    hideAnimate() {
      clearTimeout(this.timer);
      this.showHide = false;
    },
    ShowerrorFn(num){
      this.Showerror = true;
      this.apiNum = num || 0;
    },
    hideerrorFn(){
      this.Showerror = false;
    },
    exitError() {
      this.Showerror = false;
      this.$router.push({
          name:'start'
        });
    },
    replaceGet(fn){
      console.log("重试");
      this.Showerror = false;
      if(this.apiNum == 0){
        this.$parent.replaceGetParent();  // 当前页面重新获取数据
      }else if(this.apiNum == 1){
        // 重新获取下一关数据
        this.$parent.replacegetNextData();
        this.showAnimate(5000);
      }else if(this.apiNum == 2){
        // 重新获取结束游戏接口
      }else if(this.apiNum == 3){
        // 重新获取红包接口
        this.$parent.replacegetRewardNum();
      }
      // 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@function rem($n) {
  @return $n/2/37.5;
}

  .error{
    position:fixed;
    top: 0;
    z-index: 999;
    bottom: 0;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .imgbox{
      position: relative;
      width: rem(650rem);
      height: rem(650rem);
      .btnlist{
        position: absolute;
        bottom: rem(30rem);
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        span{
          width: rem(278rem);
          height: rem(112rem);
          border-radius: rem(15rem);
          border: rem(4rem) solid #41BDFF;
          line-height: rem(112rem);
          text-align: center;
          font-size: rem(42rem);
          color: #41BDFF;
          letter-spacing: 3px;
        }
        .active{
          color: #ffffff;
          background-color: #41BDFF;
        }
      }
    }
    img{
      width: rem(650rem);
      height: rem(650rem);
    }
    
  }
  .mesg{
    position: fixed;
    width: 100%;
    top: 0;
    bottom:0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    z-index: 9999999999;
    text-align: center;
    >span{
      display: inline-block;
      width:  auto;
      padding: 0 10px;
      max-width: 100%;
      box-sizing: border-box;
      min-height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 5px;
      background-color: rgba(0,0,0,0.5);
      color: #ffffff;
      font-size: 12px;
    }
  }
</style>
