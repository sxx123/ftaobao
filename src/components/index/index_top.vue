<template>
    <div class="header">
        <img src="http://gw.alicdn.com/bao/uploaded/TB1FjNySpXXXXc8aXXXXXXXXXXX-200-200.png" alt="">
        <a href="javrscript">
          <img src="../../../static/image/search.png" alt="">
          寻找宝贝店铺
        </a>
    </div>
</template>

<script>
    export default {
        name: "index_top"
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height: .37rem;
    background: rgb(255, 133, 42);
    display: flex;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0;
    z-index: 100;
  }
  .header img{
    width: .3rem;
    height: 0.25rem;
    margin-left: 10px;
  }
  .header a{
    width: 3.2rem;
    height: 0.25rem;
    border-radius: 4px;
    margin-left: 4px;
    background: rgb(255, 78, 34);
    font-size: 13px;
    color: rgb(240, 224, 220);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  }
  .header a img{
    width: 0.2rem;
    height: 0.2rem;
    margin-right: 5px;
  }
</style>
