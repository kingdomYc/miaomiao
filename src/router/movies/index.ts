export default{
    path:'/movies',
    component:() => import('@/views/movies/index.vue'),
    children:[
        {
            path:'city',
            component:() => import("@/components/City/index.vue")
        },
        {
            path:'nowPlaying',
            component:() => import("@/components/NowPlaying/index.vue")
        },
        {
            path:'comingSoon',
            component:() => import("@/components/ComingSoon/index.vue")
        },
        {
            path:'search',
            component:() => import("@/components/Search/index.vue")
        },
        {
            path:'/movies',
            redirect:'/movies/nowPlaying'
        }
    ]
}