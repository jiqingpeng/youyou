<template>
    <section>
        <section>
          <h4>向我说明</h4>
          <div>
            <van-cell-group>
              <van-cell title="位置" value="北京市" />
            </van-cell-group>
            <van-cell-group>
              <van-cell title="范围" value="30km"/>
            </van-cell-group>
            <div class="list">
              <div>
                <van-cell-group>
                  <van-cell title="自动扩大范围" label="如果用户较少自动扩大范围"/>
                </van-cell-group>
              </div>
              <div>
                <mt-switch v-model="value"></mt-switch>
              </div>
            </div>
            
            <van-cell-group>
              <van-cell title="显示性别" value="女生"/>
            </van-cell-group>
            <van-cell-group>
              <van-cell title="年龄" icon="home"/>
            </van-cell-group>
            
          </div>
        </section>
        <section>
          <h4>应用设置</h4>
          <div>
            <van-cell-group>
              <van-cell title="个人信息" icon="home" is-link label="编辑姓名等"/>
            </van-cell-group>
            <van-cell-group>
              <van-cell title="隐私与权限" icon="home" is-link label="联系人、我的相册、朋友圈"/>
            </van-cell-group>
            <van-cell-group>
              <van-cell title="消息提醒与聊天" icon="home" is-link label="通知、聊天设置"/>
            </van-cell-group>
            <van-cell-group>
              <van-cell title="数据和缓冲" icon="home" is-link label="数据和缓冲设置"/>
            </van-cell-group>
            <van-cell-group>
              <van-cell title="账号安全" icon="home" is-link label="修改手机号和密码"/>
            </van-cell-group>
            <van-cell-group>
              <van-cell title="意见反馈" icon="home" is-link label="感谢您对友友的宝贵意见"/>
            </van-cell-group>
          </div>
        </section>
    </section>
</template>

<script>

export default {
  name:"Set",
  data(){
    return{
      value:true,
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
