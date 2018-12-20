<template>
  <div id="load">
    <div class="cssload-load">
    <div class="cssload-container">
      <div class="cssload-loading"><i></i><i></i><i></i><i></i></div>
    </div>
    <div class="count">{{count}}%</div>
  </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'load',
  data () {
    return {
      count: 0,
      num: 0,
    }
  },
  created() {
     
  },
  mounted() {
   let arr = [
    require("../assets/img/happyIdiom/happyIdiom-start-bg.png"),
    require("../assets/img/happyIdiom/happyIdiom-main-return.png"),
    require("../assets/img/happyIdiom/happyIdiom-start-ranking.png"),
    require("../assets/img/happyIdiom/happyIdiom-start-logo-01.png"),
    require("../assets/img/happyIdiom/happyIdiom-start-easy.png"),
    require("../assets/img/happyIdiom/happyIdiom-start-ordinary.png"),
    require("../assets/img/happyIdiom/happyIdiom-start-difficult.png"),
    require("../assets/img/happyIdiom/happyIdiom-start-pk.png"),
    require("../assets/img/happyIdiom/happyIdiom-start.png"),
    require("../assets/img/happyIdiom/happyIdiom-main-cent.png"),
    require("../assets/img/happyIdiom/happyIdiom-main-audio.png"),
    require("../assets/img/happyIdiom/happyIdiom-main-box.png"),
    require("../assets/img/happyIdiom/happyIdiom-main-tian.png"),
    require("../assets/img/happyIdiom/happyIdiom_filltext-box.png"),
    require("../assets/img/happyIdiom/happyIdiom-main-y.png"),
    require("../assets/img/happyIdiom/happyIdiom-main-err.png"),
    require("../assets/img/happyIdiom/idiom-return-close.png"),
    require("../assets/img/happyIdiom/idiom-return-y-b.png"),
    require("../assets/img/happyIdiom/idiom-return-n-b.png"),
    require("../assets/img/happyIdiom/idiom-failure.png"),
    require("../assets/img/happyIdiom/idiom-failure-daan.png"),
    require("../assets/img/happyIdiom/idiom-failure-con1.png"),
    require("../assets/img/happyIdiom/idiom-failure-end.png"),
    require("../assets/img/happyIdiom/happyIdiom_customs.png"),
    require("../assets/img/happyIdiom/happyIdiom_sucess_return.png"),
    require("../assets/img/happyIdiom/happyIdiom_view.png"),
    require("../assets/img/happyIdiom/happyIdiom_next_customs.png"),
    require("../assets/img/happyIdiom/happyIdiom-envel-close-u.png"),
    require("../assets/img/happyIdiom/happyIdiom-envel-open.png"),
    require("../assets/img/happyIdiom/happyIdiom-start-bg.png"),
    require("../assets/img/happyIdiom/happyIdiom_rankingList-return.png"),
    require("../assets/img/happyIdiom/happyIdiom-record-j.png"),
    require("../assets/img/happyIdiom/happyIdiom_rankingList-return.png"),
    require("../assets/img/happyIdiom/happyIdiom_rankingList_1.png"),
    require("../assets/img/happyIdiom/happyIdiom_rankingList_2.png"),
    require("../assets/img/happyIdiom/happyIdiom_rankingList_3.png"),
    require("../assets/img/happyIdiom/happyIdiom_rankingList_envel.png"),
    require("../assets/img/happyIdiom/happyIdiom_rankingList-return.png"),
    require("../assets/img/happyIdiom/happyIdiom-envel-close-u.png"),
    require("../assets/img/happyIdiom/happyIdiom-envel-open.png"),
    require("../assets/img/happyIdiom/idiom-return-y-b.png"),
    require("../assets/img/happyIdiom/happyIdiom_friendsPk_bg.png"),
    require("../assets/img/happyIdiom/happlyIdiom_PK_success.png")
   ];
   
   $.each(arr,(i,src) => {
     let oImg = new Image();
     oImg.onload = () => {
      let num = (this.count + 100/arr.length);

        if(this.num >= arr.length-1){
          this.count = 99;
          console.log("完成");
          setTimeout(() => {
            this.count = 100;
            this.$router.push('/start');
          },1000);
          
        }else{
          this.count = num.toFixed(2) * 1;
          this.num = this.num + 1;
        }

     };
     oImg.onerror = () => {
        let num = (this.count + 100/arr.length);
        if(this.num >= arr.length-1){
          this.count = 99;
          console.log("完成");
          setTimeout(() => {
            this.count = 100;
            this.$router.push('/start');
          },1000);
          
        }else{
          this.count = num.toFixed(2) * 1;
          this.num = this.num + 1;
        }
     }
     oImg.src = src;
   })
  },
  watch: {
      count (val,oldVal){
        if(val == 9){
          console.log("加载完毕");
        }
      }
  },
  methods:{

  }
}
</script>

<style scoped lang="scss">
#load{
   position: absolute;
   top: 0;
   bottom: 0;
   width: 100%;
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   background-color: #ffffff;
   .count{
      width: 100%;
      position: absolute;
      bottom: -50px;
      text-align: center;
      line-height: 30px;
      font-size: 18px;
      font-weight: bold;
    }
  .cssload-load {
    position:absolute;
    // left:calc(50% - 28px);
    width:100px;
    height:100px;
    top: 50%;
    margin-top: -50px;
    left: 50%;
    margin-left: -50px;

}
.imgall{
  position:absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -999;
}
.cssload-container{
  display: block;
  margin:49px auto;
  width:97px;
}

.cssload-loading i{
  width: 19px;
  height: 19px;
  display: inline-block;
  border-radius: 50%;
  background: rgb(0,179,213);
}
.cssload-loading i:first-child{
  opacity: 0;
  animation:cssload-loading-ani2 0.58s linear infinite;
    -o-animation:cssload-loading-ani2 0.58s linear infinite;
    -ms-animation:cssload-loading-ani2 0.58s linear infinite;
    -webkit-animation:cssload-loading-ani2 0.58s linear infinite;
    -moz-animation:cssload-loading-ani2 0.58s linear infinite;
  transform:translate(-19px);
    -o-transform:translate(-19px);
    -ms-transform:translate(-19px);
    -webkit-transform:translate(-19px);
    -moz-transform:translate(-19px);
}
.cssload-loading i:nth-child(2),
.cssload-loading i:nth-child(3){
  animation:cssload-loading-ani3 0.58s linear infinite;
    -o-animation:cssload-loading-ani3 0.58s linear infinite;
    -ms-animation:cssload-loading-ani3 0.58s linear infinite;
    -webkit-animation:cssload-loading-ani3 0.58s linear infinite;
    -moz-animation:cssload-loading-ani3 0.58s linear infinite;
}
.cssload-loading i:last-child{
  animation:cssload-loading-ani1 0.58s linear infinite;
    -o-animation:cssload-loading-ani1 0.58s linear infinite;
    -ms-animation:cssload-loading-ani1 0.58s linear infinite;
    -webkit-animation:cssload-loading-ani1 0.58s linear infinite;
    -moz-animation:cssload-loading-ani1 0.58s linear infinite;
}




@keyframes cssload-loading-ani1{
  100%{
    transform:translate(39px);
    opacity: 0;
  }
}

@-o-keyframes cssload-loading-ani1{
  100%{
    -o-transform:translate(39px);
    opacity: 0;
  }
}

@-ms-keyframes cssload-loading-ani1{
  100%{
    -ms-transform:translate(39px);
    opacity: 0;
  }
}

@-webkit-keyframes cssload-loading-ani1{
  100%{
    -webkit-transform:translate(39px);
    opacity: 0;
  }
}

@-moz-keyframes cssload-loading-ani1{
  100%{
    -moz-transform:translate(39px);
    opacity: 0;
  }
}

@keyframes cssload-loading-ani2{
  100%{
    transform:translate(19px);
    opacity: 1;
  }
}

@-o-keyframes cssload-loading-ani2{
  100%{
    -o-transform:translate(19px);
    opacity: 1;
  }
}

@-ms-keyframes cssload-loading-ani2{
  100%{
    -ms-transform:translate(19px);
    opacity: 1;
  }
}

@-webkit-keyframes cssload-loading-ani2{
  100%{
    -webkit-transform:translate(19px);
    opacity: 1;
  }
}

@-moz-keyframes cssload-loading-ani2{
  100%{
    -moz-transform:translate(19px);
    opacity: 1;
  }
}

@keyframes cssload-loading-ani3{
  100%{
    transform:translate(19px);
  }
}

@-o-keyframes cssload-loading-ani3{
  100%{
    -o-transform:translate(19px);
  }
}

@-ms-keyframes cssload-loading-ani3{
  100%{
    -ms-transform:translate(19px);
  }
}

@-webkit-keyframes cssload-loading-ani3{
  100%{
    -webkit-transform:translate(19px);
  }
}

@-moz-keyframes cssload-loading-ani3{
  100%{
    -moz-transform:translate(19px);
  }
}
}
</style>
