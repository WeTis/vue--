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
    this.$router.push('/load');
    this.compterHtmlSize();
    this.listenScreenZoom();
    
  },
  methods: {
    compterHtmlSize(){
      let scale = document.documentElement.clientWidth || document.body.clientWidth;
      let scaleH = document.documentElement.clientHeight || document.body.clientHeigth;
      
      if(window.orientation==90||window.orientation==270){
        // 横屏
        scale = scaleH*(scaleH/scale);
      }
      if(scale > 700){
        scale = scale*(scale/scaleH);
      }
      document.documentElement.style.fontSize = scale/10 + 'px';

    },
    listenScreenZoom(){
      window.onresize=() => {  
         this.compterHtmlSize();
      }  
    }
  }
}).$mount('#app')
