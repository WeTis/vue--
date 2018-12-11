<template>
  <div id="load">
    <div class="cssload-load">
    <div class="cssload-blockcont">
        <div class="cssload-block" v-for="item in 9"></div>
        <div class="count">{{count}}%</div>
    </div>
    <!-- <div class="loader">
      <div class="square"></div>
      <div class="square"></div>
      <div class="square last"></div>
      <div class="square clear"></div>
      <div class="square"></div>
      <div class="square last"></div>
      <div class="square clear"></div>
      <div class="square"></div>
      <div class="square last"></div>
      <div class="count">{{count}}%</div>
    </div> -->
    
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
    require("../assets/img/happyIdiom/happyIdiom-envel-open.png")
    // require(""),
    // require(""),
    // require(""),
    // require(""),
    // require(""),
    // require(""),
    // require(""),
    // require(""),
   ];
   
   $.each(arr,(i,src) => {
     let oImg = new Image();
     oImg.onload = () => {
      let num = (this.count + 100/arr.length)
        if(i >= arr.length-1){
          this.count = 100;
          this.$router.push('/start');
        }else{
          this.count = num.toFixed(2) * 1;
        }
     };
     oImg.onerror = () => {
        this.count += 100/arr.length;
         console.log(this.count+"失败");
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
   position: fixed;
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

}
.imgall{
  position:absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -999;
}
.cssload-block {
    position:relative;
    height:33px;
    width:33px;
    display:inline-block;
    background:rgb(255,215,0);
    transition:all 0.92s;
    -o-transition:all 0.92s;
    -ms-transition:all 0.92s;
    -webkit-transition:all 0.92s;
    -moz-transition:all 0.92s;
    animation: cssload-rot 5.75s linear infinite;
    -o-animation: cssload-rot 5.75s linear infinite;
    -ms-animation: cssload-rot 5.75s linear infinite;
    -webkit-animation: cssload-rot 5.75s linear infinite;
    -moz-animation: cssload-rot 5.75s linear infinite;
}
.cssload-block:nth-child(1) {
    animation-delay:3.45s;
    -o-animation-delay:3.45s;
    -ms-animation-delay:3.45s;
    -webkit-animation-delay:3.45s;
    -moz-animation-delay:3.45s;
}
.cssload-block:nth-child(2) {
    animation-delay:1.73s;
    -o-animation-delay:1.73s;
    -ms-animation-delay:1.73s;
    -webkit-animation-delay:1.73s;
    -moz-animation-delay:1.73s;
    animation: cssload-rot 13.8s linear infinite;
    -o-animation: cssload-rot 13.8s linear infinite;
    -ms-animation: cssload-rot 13.8s linear infinite;
    -webkit-animation: cssload-rot 13.8s linear infinite;
    -moz-animation: cssload-rot 13.8s linear infinite;
}
.cssload-block:nth-child(3) {
    animation-delay:2.3s;
    -o-animation-delay:2.3s;
    -ms-animation-delay:2.3s;
    -webkit-animation-delay:2.3s;
    -moz-animation-delay:2.3s;
}
.cssload-block:nth-child(4) {
    animation-delay:0.23s;
    -o-animation-delay:0.23s;
    -ms-animation-delay:0.23s;
    -webkit-animation-delay:0.23s;
    -moz-animation-delay:0.23s;
}
.cssload-block:nth-child(5) {
    animation-delay:4.6s;
    -o-animation-delay:4.6s;
    -ms-animation-delay:4.6s;
    -webkit-animation-delay:4.6s;
    -moz-animation-delay:4.6s;
}
.cssload-block:nth-child(6) {
    animation-delay:2.3s;
    -o-animation-delay:2.3s;
    -ms-animation-delay:2.3s;
    -webkit-animation-delay:2.3s;
    -moz-animation-delay:2.3s;
    animation: cssload-rot 8.05s linear infinite;
    -o-animation: cssload-rot 8.05s linear infinite;
    -ms-animation: cssload-rot 8.05s linear infinite;
    -webkit-animation: cssload-rot 8.05s linear infinite;
    -moz-animation: cssload-rot 8.05s linear infinite;
}
.cssload-block:nth-child(7) {
    animation-delay:0.46s;
    -o-animation-delay:0.46s;
    -ms-animation-delay:0.46s;
    -webkit-animation-delay:0.46s;
    -moz-animation-delay:0.46s;
}
.cssload-block:nth-child(8) {
    animation-delay:1.73s;
    -o-animation-delay:1.73s;
    -ms-animation-delay:1.73s;
    -webkit-animation-delay:1.73s;
    -moz-animation-delay:1.73s;
    animation: cssload-rot 6.9s linear infinite;
    -o-animation: cssload-rot 6.9s linear infinite;
    -ms-animation: cssload-rot 6.9s linear infinite;
    -webkit-animation: cssload-rot 6.9s linear infinite;
    -moz-animation: cssload-rot 6.9s linear infinite;
}
.cssload-block:nth-child(9) {
    animation-delay:28.75s;
    -o-animation-delay:28.75s;
    -ms-animation-delay:28.75s;
    -webkit-animation-delay:28.75s;
    -moz-animation-delay:28.75s;
    animation: cssload-rot 9.2s linear infinite;
    -o-animation: cssload-rot 9.2s linear infinite;
    -ms-animation: cssload-rot 9.2s linear infinite;
    -webkit-animation: cssload-rot 9.2s linear infinite;
    -moz-animation: cssload-rot 9.2s linear infinite;
}


@keyframes cssload-rot {
    0% {
        transform:none;
    }
    20% {
        transform:rotateZ(-90deg) rotateY(180deg);
    }
    40% {
        background:rgb(210,105,30);
        transform:none;
    }
    60% {
        background:rgb(255,255,255);
    }
    80% {
        background:rgb(100,149,237);
    }
    90% {
        transform:none;
        background:rgb(34,34,34);
    }
}

@-o-keyframes cssload-rot {
    0% {
        -o-transform:none;
    }
    20% {
        -o-transform:rotateZ(-90deg) rotateY(180deg);
    }
    40% {
        background:rgb(210,105,30);
        -o-transform:none;
    }
    60% {
        background:rgb(255,255,255);
    }
    80% {
        background:rgb(100,149,237);
    }
    90% {
        -o-transform:none;
        background:rgb(34,34,34);
    }
}

@-ms-keyframes cssload-rot {
    0% {
        -ms-transform:none;
    }
    20% {
        -ms-transform:rotateZ(-90deg) rotateY(180deg);
    }
    40% {
        background:rgb(210,105,30);
        -ms-transform:none;
    }
    60% {
        background:rgb(255,255,255);
    }
    80% {
        background:rgb(100,149,237);
    }
    90% {
        -ms-transform:none;
        background:rgb(34,34,34);
    }
}

@-webkit-keyframes cssload-rot {
    0% {
        -webkit-transform:none;
    }
    20% {
        -webkit-transform:rotateZ(-90deg) rotateY(180deg);
    }
    40% {
        background:rgb(210,105,30);
        -webkit-transform:none;
    }
    60% {
        background:rgb(255,255,255);
    }
    80% {
        background:rgb(100,149,237);
    }
    90% {
        -webkit-transform:none;
        background:rgb(34,34,34);
    }
}

@-moz-keyframes cssload-rot {
    0% {
        -moz-transform:none;
    }
    20% {
        -moz-transform:rotateZ(-90deg) rotateY(180deg);
    }
    40% {
        background:rgb(210,105,30);
        -moz-transform:none;
    }
    60% {
        background:rgb(255,255,255);
    }
    80% {
        background:rgb(100,149,237);
    }
    90% {
        -moz-transform:none;
        background:rgb(34,34,34);
    }
}
}

// 第二个
.loader {
  position: absolute;
  left: 50%;
  margin-left: -26.5px;
  margin-top: -26.5px;
}

.square {
  background: rgb(31,190,202);
  width: 15px;
  height: 15px;
  float: left;
  top: -10px;
  margin-right: 5px;
  margin-top: 5px;
  position: relative;
  opacity: 0;
  animation: enter 6.9s infinite;
    -o-animation: enter 6.9s infinite;
    -ms-animation: enter 6.9s infinite;
    -webkit-animation: enter 6.9s infinite;
    -moz-animation: enter 6.9s infinite;
}

.enter {
  top: 0px;
  opacity: 1;
}

.square:nth-child(1) {
  animation-delay: 2.07s;
    -o-animation-delay: 2.07s;
    -ms-animation-delay: 2.07s;
    -webkit-animation-delay: 2.07s;
    -moz-animation-delay: 2.07s;
}

.square:nth-child(2) {
  animation-delay: 2.42s;
    -o-animation-delay: 2.42s;
    -ms-animation-delay: 2.42s;
    -webkit-animation-delay: 2.42s;
    -moz-animation-delay: 2.42s;
}

.square:nth-child(3) {
  animation-delay: 2.76s;
    -o-animation-delay: 2.76s;
    -ms-animation-delay: 2.76s;
    -webkit-animation-delay: 2.76s;
    -moz-animation-delay: 2.76s;
  background: rgb(253,201,111);
}

.square:nth-child(4) {
  animation-delay: 1.04s;
    -o-animation-delay: 1.04s;
    -ms-animation-delay: 1.04s;
    -webkit-animation-delay: 1.04s;
    -moz-animation-delay: 1.04s;
  animation-delay: 1.04s;
}

.square:nth-child(5) {
  animation-delay: 1.38s;
    -o-animation-delay: 1.38s;
    -ms-animation-delay: 1.38s;
    -webkit-animation-delay: 1.38s;
    -moz-animation-delay: 1.38s;
  animation-delay: 1.38s;
}

.square:nth-child(6) {
  animation-delay: 1.73s;
    -o-animation-delay: 1.73s;
    -ms-animation-delay: 1.73s;
    -webkit-animation-delay: 1.73s;
    -moz-animation-delay: 1.73s;
  animation-delay: 1.73s;
}

.square:nth-child(8) {
  animation-delay: 0.35s;
    -o-animation-delay: 0.35s;
    -ms-animation-delay: 0.35s;
    -webkit-animation-delay: 0.35s;
    -moz-animation-delay: 0.35s;
  animation-delay: 0.35s;
}

.square:nth-child(9) {
  animation-delay: 0.69s;
    -o-animation-delay: 0.69s;
    -ms-animation-delay: 0.69s;
    -webkit-animation-delay: 0.69s;
    -moz-animation-delay: 0.69s;
  animation-delay: 0.69s;
}

.clear {
  clear: both;
}

.last {
  margin-right: 0;
}



@keyframes enter {
  0% {
    opacity: 0;
    top: -10px;
  }
  5% {
    opacity: 1;
    top: 0px;
  }
  50.9% {
    opacity: 1;
    top: 0px;
  }
  55.9% {
    opacity: 0;
    top: 10px;
  }
}

@-o-keyframes enter {
  0% {
    opacity: 0;
    top: -10px;
  }
  5% {
    opacity: 1;
    top: 0px;
  }
  50.9% {
    opacity: 1;
    top: 0px;
  }
  55.9% {
    opacity: 0;
    top: 10px;
  }
}

@-ms-keyframes enter {
  0% {
    opacity: 0;
    top: -10px;
  }
  5% {
    opacity: 1;
    top: 0px;
  }
  50.9% {
    opacity: 1;
    top: 0px;
  }
  55.9% {
    opacity: 0;
    top: 10px;
  }
}

@-webkit-keyframes enter {
  0% {
    opacity: 0;
    top: -10px;
  }
  5% {
    opacity: 1;
    top: 0px;
  }
  50.9% {
    opacity: 1;
    top: 0px;
  }
  55.9% {
    opacity: 0;
    top: 10px;
  }
}

@-moz-keyframes enter {
  0% {
    opacity: 0;
    top: -10px;
  }
  5% {
    opacity: 1;
    top: 0px;
  }
  50.9% {
    opacity: 1;
    top: 0px;
  }
  55.9% {
    opacity: 0;
    top: 10px;
  }
}
</style>
