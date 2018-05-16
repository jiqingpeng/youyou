<template>
  <div>
    <div class="head">
        <font-awesome-icon :icon="['fas','align-justify']" @click="close"/>
        <div>{{title}}</div>
        <font-awesome-icon :icon="['fas','align-justify']"/>
    </div>
</div>
</template>
<script>

export default {
  name:"Theader",
  props: ['slideout'],
  data () {
    return {
      
    }
  },
  computed: {
    title () {
      switch (this.$route.path.split('/')[1]) {
        case '':
          return '探探'
        case 'Friend':
          return '推荐给好友'
        case 'GreenHand':
          return '新手引导'
        case 'Member':
          return '激活会员'
        case 'NameNo':
          return '匿名爱恋表白'
        case 'Set' :
          return '设置'
      }
    }
  },
  mounted () {
   console.log(this.slideout)
  },
  components: {
    
  },
  methods: {
    
    close(){
      this.slideout.toggle()
    },
  },
  created(){
    console.log(this)
    console.log(this.slideout)
  }
}
</script>

<style scoped>
  .head{
      display:flex;
      align-items:center;
      justify-content:space-between;
      background:#ed1e24;
      color:#fff;
      height:60px;
      padding:0 4%;
      font-size:20px;
  }
</style>
