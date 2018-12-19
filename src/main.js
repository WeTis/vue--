import Vue from 'vue'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
import App from './App.vue'
import load from './components/load'
import start from './components/start'
import mainApp from './components/mainApp'
import gameRecord from './components/gameRecord'
import rankingList from './components/rankingList'
import friendsPK from './components/friendsPK'
import addFriend from './components/addFriend'
import { Config } from './api/config.js'
Vue.config.productionTip = false

FastClick.attach(document.body);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/load',
      name: 'load',
      component: load
    },
    {
      path: '/start',
      name: 'start',
      component: start
    },
    {
      path: '/mainApp',
      name: 'mainApp',
      component: mainApp
    },
    {
      path: '/gameRecord',
      name: 'gameRecord',
      component: gameRecord
    },
    {
      path: '/rankingList',
      name: 'rankingList',
      component: rankingList
    },
    {
      path: '/friendsPK',
      name: 'friendsPK',
      component: friendsPK
    },
    {
      path: '/addFriend',
      name: 'addFriend',
      component: addFriend
    }
  ]
})
// let spellLevel = 1;

new Vue({
  render: h => h(App),
  router,
   data () {
    return {
    }
  },
  created(){
    Config.headers.Authorization = this.hrefParam("Authorization").split('#/')[0];
    this.$router.push('/load');
    this.compterHtmlSize();
    this.listenScreenZoom();
    
  },
  methods: {
    compterHtmlSize(){
      let scale = document.documentElement.clientWidth || document.body.clientWidth;
      let scaleH = document.documentElement.clientHeight || document.body.clientHeigth;
      
      // if(window.orientation==90||window.orientation==270){
      //   // 横屏
      //   scale = scaleH*(scaleH/scale);
      // }
      // if(scale > 700){
      //   scale = scale*(scale/scaleH);
      // }
      var scaleJ = 375/667 * scaleH;
      if(scaleJ > scale){
        scale = scale;
      }else{
        scale = scaleJ;
      }
      document.documentElement.style.fontSize = scale/10 + 'px';

    },
    listenScreenZoom(){
      window.onresize=() => {  
        if(this.onsize != window.orientation)
        {
          console.log("旋转")
          this.onsize = window.orientation;
          this.compterHtmlSize();
        }
             // this.compterHtmlSize();
      } 
    },
    hrefParam(paramName){
        var reParamValue = '';
        var href = window.location.href;
        // 获取所有参数
        var paramString = href.split('?')[1];
        // 判断参数是否存在】
        if(paramString){
            // 拆分所有参数
            var paramArr = paramString.split("&");
            // 设置参数数组对象
            var paramArrObj = [];
            // 循环参数取出对应的参数
            for(var i = 0; i < paramArr.length; i++){
                var name = decodeURI(paramArr[i].split('=')[0]);
                var value =decodeURI(paramArr[i].split('=')[1]);
                paramArrObj.push({
                    name: name,
                    value: value
                })
            }
            // 遍历数组查询对应数据
            for(var j = 0; j < paramArrObj.length; j++){
                if(paramArrObj[j].name === paramName)
                {
                    reParamValue = paramArrObj[j].value;
                    break;
                }
            }

            return reParamValue;
        }
       return false;
    }
  }
}).$mount('#app')
