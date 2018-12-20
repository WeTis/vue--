<template>
  <div class="mesg" v-show="showHide">
     {{msg}}
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
    }
  },
  created() {
    console.log(this.showHide)
  },
  methods: {
    showAnimate(time) {
      let times = time || 1000;
      clearTimeout(this.timer);
      this.showHide = true;
      this.timer = setTimeout(() => {
        this.showHide = false;
      },times);
    },
    hideAnimate() {
      clearTimeout(this.timer);
      this.showHide = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mesg{
    position: fixed;
    font-size: 12px;
    width:  200px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 5px;
    background-color: rgba(0,0,0,0.5);
    color: #ffffff;
    top: 50%;
    left: 50%;
    margin-top: -15px;
    margin-left: -100px;
    z-index: 9999999999;
  }
</style>
