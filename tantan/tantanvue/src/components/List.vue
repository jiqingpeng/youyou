<template>
  <div>
    <div >
        
        <div class="stack-wrapper">
          <stack ref="stack" :pages="someList" :stackinit="stackinit"></stack>
        </div>
        <div class="controls">
          <button @click="prev" class="button"><i class="prev"></i><span class="text-hidden">prev</span></button>
          <button @click="next" class="button"><i class="next"></i><span class="text-hidden">next</span></button>
        </div>
    </div>
  </div>
</template>
<script>
import stack from './stack'
export default {
  name:"List",
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
      that.someList = [
        {
          src: '../../static/1.jpg',
          name:'小王',
          age:18,
          set:'摩羯',
          localtion:"2km"
        },
        {
          src: '../../static/2.jpg',
          name:'小王',
          age:18,
          set:'摩羯',
          localtion:"2km"
        },
        {
          src: '../../static/3.jpg',
          name:'小王',
          age:18,
          set:'摩羯',
          localtion:"2km"
        },
        {
          src: '../../static/4.jpg',
          name:'小王',
          age:18,
          set:'摩羯',
          localtion:"2km"
        },
        {
          src: '../../static/5.jpg',
          name:'小王',
          age:18,
          set:'摩羯',
          localtion:"2km"
        },
        {
          src: '../../static/6.jpg',
          name:'小王',
          age:18,
          set:'摩羯',
          localtion:"2km"
        }
      ]
  },
  components: {
    stack
  },
  methods: {
    
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
