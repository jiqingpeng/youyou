<template>
    <section>
        
        <section>
          
          <div>
            <van-cell-group>
              <van-cell title="友友怎么玩？"/>
            </van-cell-group>
            <van-cell-group>
              <van-cell title="怎么让更多人喜欢我？"/>
            </van-cell-group>
            <van-cell-group>
              <van-cell title="我没有配对，或喜欢数长期不涨！"/>
            </van-cell-group>
            <van-cell-group>
              <van-cell title="聊不起来，打招呼没人理。"/>
            </van-cell-group>
            <van-cell-group>
              <van-cell title="刷不到人怎么办，只能看到异性吗？"/>
            </van-cell-group>
            <van-cell-group>
              <van-cell title="手滑错了能反悔吗？"/>
            </van-cell-group>
            <van-cell-group>
              <van-cell title="卡上的红色和灰色的图标是什么意思？"/>
            </van-cell-group>
            <van-cell-group>
              <van-cell title="怎么该资料"/>
            </van-cell-group>
          </div>
        </section>
    </section>
</template>

<script>

export default {
  name:'Member',
  data(){
    return{
      value:false
    }
  }
}
</script>
<style>
    h4{
      margin-left:10px;
      color:#ed1e24;
    }
    .van-cell__value{
      color:#ed1e24;
    }
    .list{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .mint-switch-input:checked + .mint-switch-core{
      background:#ed1e24;
      border-color:#ed1e24;
    }
</style>
