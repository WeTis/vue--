<template>
  <div id="start">
    <div class="bgimg">
      <img src="../assets/img/happyIdiom/happyIdiom-start-bg.png"/>
    </div>
    <div class="startTop">
      <div class="return">
        <a href="#"></a>
        <img src="../assets/img/happyIdiom/happyIdiom-main-return.png" />
      </div>
      <div class="Rankinglist">
        <img src="../assets/img/happyIdiom/happyIdiom-start-ranking.png" />
      </div>
    </div>
    <div class="logo">
      <img src="../assets/img/happyIdiom/happyIdiom-start-logo-01.png" />
    </div>
    <div class="buttonList">
      <img class="btn easyBtn" src="../assets/img/happyIdiom/happyIdiom-start-easy.png" @click="jumpToMainApp(1)"/>
      <img class="btn commonBtn" src="../assets/img/happyIdiom/happyIdiom-start-ordinary.png" @click="jumpToMainApp(2)"/>
      <img class="btn difficultBtn" src="../assets/img/happyIdiom/happyIdiom-start-difficult.png" @click="jumpToMainApp(3)"/>
      <img class="btn pkBtn" src="../assets/img/happyIdiom/happyIdiom-start-pk.png" />
    </div>
    <div class="bottomButton">
      <img class="btnBot" src="../assets/img/happyIdiom/happyIdiom-start.png" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'Start',
  props: {
    msg: String
  },
  data () {
    return {

    }
  },
  methods: {
     jumpToMainApp(n) {
        this.$router.push({
          name:'mainApp',
          params: {
            spellLevel: n
          }
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
#start{
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
}
.startTop{
  padding-top: rem(29rem);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  >div{
    margin: 0 rem(15rem);
    width: rem(106rem);
    height: rem(94rem);
  }
  img{
    display: block;
    width: rem(106rem);
    height: rem(94rem);
  }
}


.logo{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  img{
    width: rem(614rem);
    height: rem(295rem);
    margin-left: rem(22rem);
  }
}

.buttonList{
  position:absolute;
  width: 100%;
  top: rem(426rem);
  bottom:rem(90rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img{
    width: auto;
    height: rem(136rem);
    max-height: 25%;
    padding-bottom: rem(8rem);
    box-sizing: border-box;
  }
}

.bottomButton{
  position:absolute;
  width: 100%;
  bottom: rem(23rem);
  text-align: center;
  img{
    display: inline-block;
    width: rem(470rem);
    height: rem(55rem);
  }

}
</style>