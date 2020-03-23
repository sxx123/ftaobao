<template>
    <div class="tabbar">
      <router-link to="/" class="list">
        <img src="http://img12.360buyimg.com/img/s80x80_jfs/t1/110059/39/6854/5337/5e5393feE18b8d779/b70a8d50bac3834f.png.webp" alt="">
        <span>首页</span>
      </router-link>
      <router-link to="/shopkind" class="list">
        <img src="http://img12.360buyimg.com/img/s40x40_jfs/t1/96958/15/13153/1245/5e53941dEf75b7d80/23ac41ce10ca360a.png.webp" alt="">
        <span>分类</span>
      </router-link>
      <router-link to="/mycenter" class="list">
        <img src="http://img12.360buyimg.com/img/s40x40_jfs/t1/108716/36/6911/1908/5e53943fE87d0c7af/cd1497620a8f1fc1.png.webp" alt="">
        <span>我的</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "tab_list"
    }
</script>

<style scoped>
  .tabbar{
    width: 100%;
    height: .5rem;
    display: flex;
    justify-content: space-around;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 100;
    border-top: 0.5px solid #eee;
    padding-top: 8px;
    box-sizing: border-box;
  }
  .list{
    display: flex;
    align-items: center;
    flex-direction: column;

  }
  .list img{
    width: .2rem;
    height: .2rem;
  }
  .list span{
    color: #999;
    font-size: 10px;
  }

</style>
