<template>
    <div>
        <nav id="menu" class="menu" >
          <section class="menu-section">
            <div class="avatar">
                <mu-avatar slot="center" src="../../static/avatar.jpg"/>
            </div>
            <div class="avatar">
                <span>有梦想谁都了不起</span>
            </div>
            <div class="avatar">
                <span>点击查看编辑</span>
            </div>
            
          </section>
          <section class="menu-section">
            <ul class="menu-section-list">
              <li @click="go('/')">探探</li>
              <li @click="go('/NameNo')">匿名暗恋表白</li>
              <li @click="go('/GreenHand')">新手引导</li>
              <li @click="go('/Friend')">推荐给好友</li>
              <li @click="go('/Member')">激活会员</li>
              <li @click="go('/Set')">设置</li>
            </ul>
          </section>
        </nav>
        <main id="main" class="panel">
            <Theader :slideout=slideout></Theader>
            <router-view/>
        </main> 
    </div>
</template>
<script>
// import Slideout from 'slideout'
import swiper from 'swiper'
import Theader from '@/compon/Theader'
import list from './list'
import 'swiper/dist/css/swiper.css';
export default {
  name:"Home",
  data () {
    return {
     slideout:null,
    }
  },
  mounted () {
    this.slideout = new slideout({
        'panel': document.getElementById('main'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
    }); 
  },
  components: {
   list,
   Theader
  },
  methods: {
    close(){
      console.log(1)
      this.slideout.close()
    },
    go(router){
      this.slideout.close()
      this.$router.push({
      path:router ,
        // query: {
        //     shopNo: shopNo||"SHOPc22185ebe6df435ab90142d89c7e3829"
        // }
      })
       
    }
  },
  created(){
    
  },
  
}
</script>
<style scoped>
  @import '../../static/css/slideout.css';
  .panel{
    width:100%;
    min-height: 730px;
  }
  .avatar{
    display: flex;
    justify-content: center;
    color:#fff;
    margin-top:10px;
  }
 </style>
