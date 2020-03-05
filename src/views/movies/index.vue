<template>
  <div id="main">
      <Header title="喵喵电影"/>
        <div id="content">
          <div class="movie_menu">
            <!-- <div class="city_name">
              <span>大连</span><i class="iconfont icon-lower-triangle"></i>
            </div> -->
            <router-link tag="div" to="/movies/city" class="city_name">
              <span>{{ $store.state.city.nm }}</span><i class="iconfont icon-lower-triangle"></i>
            </router-link>
            <div class="hot_swtich">
              <!-- <div class="hot_item active">正在热映</div>
              <div class="hot_item">即将上映</div> -->
              <router-link tag="div" to="/movies/nowPlaying" class="hot_item">
                正在热映
              </router-link>
              <router-link tag="div" to="/movies/comingSoon" class="hot_item">
                即将上映
              </router-link>
            </div>
            <router-link tag="div" to="/movies/search" class="search_entry">
              <i class="iconfont icon-sousuo"></i>
            </router-link>
            <!-- <div class="search_entry">
              <i class="iconfont icon-sousuo"></i>
            </div>        -->
          </div>
          <keep-alive>
            <router-view/>
          </keep-alive>
        </div>
      <tabBar /> 
      <!-- <msgBox /> -->
  </div>
</template>

<script>
import Header from '@/components/header'
import tabBar from '@/components/tabBar'
import { msgBox } from '@/components/ts'
// import msgBox from '@/components/ts/MsgBox'
export default {
  name:'movies',
  components:{
    Header,
    tabBar,
    //msgBox
    // msgBox
  },
  mounted(){
    setTimeout(() => {
      this.axios.get('/api/getLocation').then((res) => {
        if(res.data.msg === 'ok'){
            const nm = res.data.data.nm
            const id = res.data.data.id
            console.log(typeof this.$store.state.city.id,typeof id,this.$store.state.city.id == id)
            if(this.$store.state.city.id == id){
              return
            }
            msgBox({
            title: '定位',
            content: nm,
            cancel: '取消',
            ok: '切换定位',
            handleCancel(){
              console.log(1)
            },
            handleOk(){
              window.localStorage.setItem('nowNm',nm)
              window.localStorage.setItem('nowId',id)
              window.location.reload()
            }
          })
        }
      })
    },2000)
    
    // msgBox({
    //   title: '定位',
    //   content: '沈阳',
    //   cancel: '取消',
    //   ok: '切换定位',
    //   handleCancel(){
    //     console.log(1)
    //   },
    //   handleOk(){
    //     console.log('ok')
    //   }
    // })
  }
}
</script>

<style scoped>
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}
</style>