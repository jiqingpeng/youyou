<template>
<mobile-tear-sheet>
  <mu-list>
    <mu-list-item title="会员身份标识" describeText="昵称升级红色，专属身份标识">
      <mu-avatar icon="folder" slot="leftAvatar"/>
    </mu-list-item>
    <mu-list-item title="每天五个超级喜欢" describeText="喜欢更有分量，配对飚什5倍">
      <mu-avatar icon="folder" slot="leftAvatar"/>
    </mu-list-item>
    <mu-list-item title="会员身份标识" describeText="昵称升级红色，专属身份标识">
      <mu-avatar icon="folder" slot="leftAvatar"/>
    </mu-list-item>
    <mu-list-item title="会员身份标识" describeText="昵称升级红色，专属身份标识">
      <mu-avatar icon="folder" slot="leftAvatar"/>
    </mu-list-item>
    <mu-list-item title="会员身份标识" describeText="昵称升级红色，专属身份标识">
      <mu-avatar icon="folder" slot="leftAvatar"/>
    </mu-list-item>
  </mu-list>
</mobile-tear-sheet>
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
