<template>
    <div class="box">
      <index_top></index_top>
      <tab_list></tab_list>
    </div>
</template>

<script>
    import index_top from '../components/index/index_top'
    import tab_list from '../components/common/tab_list'

    export default {
        name: "index",
        components:{
          index_top,
          tab_list
        },
    }
</script>

<style scoped>

</style>
