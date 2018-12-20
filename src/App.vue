<template>
  <div id="app" class="wrapperS" ref="wrapperS">
    <div class="content">
      <transition name="fade">
        <keep-alive >
        <router-view class="page"></router-view>
      </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Bscroll from 'better-scroll'

export default {
  name: 'app',
  data () {
    return {
    
    }
  },
  created() {
        this.checkPhone();
        console.log("mainApp")
    },
    methods:{
   loadData() {
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new Bscroll(this.$refs.wrapperS, {
                click: true,
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
      checkPhone() {
        let isAndroid = true;
        let agent = (navigator.userAgent || navigator.vendor || window.opera);
        if (agent != null) {
            let agentName = agent.toLowerCase();
            if (/android/i.test(agentName)) {
                isAndroid = true;
                this.loadData();
            } else if (/iphone/i.test(agentName)) {
              isAndroid = false;
              this.loadData();
            }else if(/iPad/i.test(agentName)){
              isAndroid = false;
                
            }else{
              isAndroid = true;
              this.loadData();
            }
        }
        this.isAndroid = isAndroid;
      },
    
  }
}
</script>

<style lang="scss">
html,body,h1,h2,h3,h4,h5,h6,div,dl,dt,dd,ul,ol,li,p,blockquote,pre,hr,figure,table,caption,th,td,form,fieldset,legend,input,button,textarea,menu{margin:0;padding:0;}
html,body,form,fieldset,p,div,h1,h2,h3,h4,h5,h6{-webkit-text-size-adjust:none}
html{font-size:37.5px;background-color: #ffffff;}
body{font-family:"微软雅黑",arial,sans-serif; background:#e6e6e6;}
header,footer,section,article,aside,nav,hgroup,address,figure,figcaption,menu,details{display:block;}
table{border-collapse:collapse;border-spacing:0;}
caption,th{text-align:left;font-weight:normal;}
html,body,fieldset,img,iframe,abbr{border:0;}
i,cite,em,var,address,dfn{font-style:normal;}
[hidefocus],summary{outline:0;}
li{list-style:none;}
h1,h2,h3,h4,h5,h6,small{font-size:100%;font-style: normal;font-weight: normal;}
sup,sub{font-size:83%;}
pre,code,kbd,samp{font-family:inherit;}
q:before,q:after{content:none;}
textarea{overflow:auto;resize:none;}
label,summary{cursor:default;}
a,button{cursor:pointer;}
del,ins,u,s,a,a:hover{text-decoration:none;}
body,textarea,input,button,select,keygen,legend{color:#333;outline:0;}
body *{-webkit-tap-highlight-color:rgba(0,0,0,0);tap-highlight-color:rgba(0,0,0,0);font-size: 0;}
.clearfix:after{content:".";display:block;overflow:hidden;height:0;clear:both;visibility:hidden;}
* html .clearfix{height:1%;}
input,textarea,select{outline: none; -webkit-appearance:none;border: none;}
.clearOver{overflow: hidden; text-overflow:ellipsis; white-space: nowrap;}

@function rem($n) {
  @return $n/2/37.5;
}
/*公共样式*/
.bgimg{
  position:absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  img{
    display: block;
    width: 100%;
    height: 100%;
  }
}
body{
  -webkit-overflow-scrolling:touch;
width: 100%;
overflow: hidden;
}
html{
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
}
#app{
  position: absolute;
  top: 0;
  bottom:0;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  overflow: hidden;
  .content{
    height: 100%;
    width: 100%;
  }
}
.page {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    margin: 0 auto;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .6s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
