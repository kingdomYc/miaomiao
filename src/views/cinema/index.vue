<template>
  <div id="main">
      <Header title="喵喵电影"/>
      <div id="content">
        <div class="cinema_menu">
          <div class="city_switch">
            全城 <i class="iconfont icon-lower-triangle"></i>
          </div>
          <div class="brand_swtich">
            品牌 <i class="iconfont icon-lower-triangle"></i>
          </div>
          <div class="feature_switch">
            特色 <i class="iconfont icon-lower-triangle"></i>
          </div>
        </div>
        <CList></CList>
        <!-- <keep-alive>
          <router-view/>
        </keep-alive> -->
      </div>
      <tabBar /> 
  </div>
</template>

<script>
import Header from '@/components/header'
import tabBar from '@/components/tabBar'
import CList from '@/components/CList'
export default {
  name:'cinema',
  components:{
    Header,
    tabBar,
    CList,
  }
}
</script>

<style scoped>
#content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>