<template>
  <div id="main">
      <Header  title="我的电影"/> 
      <div id="content">
        <login/>
      </div>
      <tabBar /> 
  </div>
</template>

<script>
import Header from '@/components/header'
import tabBar from '@/components/tabBar'
import login from '@/components/Login'

export default {
  name:'mine',
  components:{
    Header,
    tabBar,
    login
  }
}
</script>

<style>

</style>