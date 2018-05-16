<template>
  <div>
    <div >
        
    </div>
  </div>
</template>
<script>
import stack from './stack'
export default {
  name:"Friend",
  // el: '#stack',
  data () {
    return {
      slideout:null,
      open: false,
      docked: true,
      someList: [],
      stackinit: {
        visible: 3
      }
    }
  },
  mounted () {
    let that = this
    setTimeout(function () {
      that.someList = [
        {
          html: '<img src="../../static/1.jpg" alt="01">'
        },
        {
          html: '<img src="../../static/2.jpg" alt="02">'
        },
        {
          html: '<img src="../../static/3.jpg" alt="03">'
        },
        {
          html: '<img src="../../static/4.jpg" alt="04">'
        },
        {
          html: '<img src="../../static/5.jpg" alt="05">'
        },
        {
          html: '<img src="../../static/6.jpg" alt="06">'
        },
        {
          html: '<img src="../../static/7.png" alt="07">'
        }
      ]
    }, 2000)
    this.slideout = new slideout({
        'panel': document.getElementById('main'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
    }); 
  },
  components: {
    stack
  },
  methods: {
    close(){
      this.slideout.toggle()
    },
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    },
    prev () {
      this.$refs.stack.$emit('prev')
    },
    next () {
      this.$refs.stack.$emit('next')
    },
    aa(){
      alert(1)
    }
  }
}
</script>

<style scoped>
  .fa-align-justify{
    color:#fff;
    width:20px;
    height:20px;
  }
  /* require('../../static/slideout.css'); */
   /* @import '../../static/css/slideout.css'; */
  .mu-drawer{
    z-index:1100;
  }
  .wrap{
    display:flex;
  }
  .stack-wrapper{
    margin: 0 auto;
    position: relative;
    z-index: 1000;
    width: 320px;
    height: 320px;
    padding: 0;
    list-style: none;
    pointer-events: none;
  }
  .controls{
    position: relative;
    width: 200px;
    text-align: center;
    display:flex;/*Flex布局*/
    display: -webkit-flex; /* Safari */
    justify-content:space-around;
    margin: 0 auto;
    margin-top: 50px
  }
  .controls .button {
    border: none;
    background: none;
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-size: 16px;
    width: 50px;
    height: 50px;
    z-index: 100;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    border-radius: 50%;
    background: #fff;
  }
  .button .next{
    display: inline-block;
    width: 10px;
    height:5px;
    background: rgb(129,212,125);
    line-height: 0;
    font-size:0;
    vertical-align: middle;
    transform: rotate(45deg);
    left: -5px;
    top: 2px;
    position: relative;
  }
  .button .next:after{
    content:'/';
    display:block;
    width: 20px;
    height:5px;
    background: rgb(129,212,125);
    transform: rotate(-90deg) translateY(-50%) translateX(50%);
  }
  .button .prev{
    display: inline-block;
    width: 20px;
    height:5px;
    background: rgb(230,104,104);
    line-height: 0;
    font-size:0;
    vertical-align: middle;
    transform: rotate(45deg);
  }
  .button .prev:after{
    content:'/';
    display:block;
    width: 20px;
    height:5px;
    background: rgb(230,104,104);
    transform: rotate(-90deg);
  }
  .controls .text-hidden {
    position: absolute;
    overflow: hidden;
    width: 0;
    height: 0;
    color: transparent;
    display: block;
}
.slideout-menu {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
  width: 256px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  display: none;
}

.slideout-panel {
  position: relative;
  z-index: 1;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: hidden;
}

.slideout-open .slideout-menu {
  display: block;
}
</style>
