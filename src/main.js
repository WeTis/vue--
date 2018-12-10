import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import start from './components/start'
import mainApp from './components/mainApp'
import gameRecord from './components/gameRecord'
import rankingList from './components/rankingList'
import friendsPK from './components/friendsPK'


Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
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
    }
  ]
})
// let spellLevel = 1;

new Vue({
  render: h => h(App),
  router,
  created(){
    this.$router.push('/start');
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
