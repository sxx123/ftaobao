<template>
    <div class="box">
      <index_top></index_top>
      <index_center></index_center>
      <tab_list></tab_list>
    </div>
</template>

<script>
    import index_top from '../components/index/index_top'
    import index_center from '../components/index/index_center'
    import tab_list from '../components/common/tab_list'

    export default {
        name: "index",
        components:{
          index_top,
          tab_list,
          index_center
        },
    }
</script>

<style scoped>
.box{
  width: 100%;
  height: 100%;
}
</style>
