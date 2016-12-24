import routers from '../../src/views/index.js'
export default [
    {
        path:'/news',component:routers.News
    },
    {
        path:'/',component:routers.Home
    },
    {
        path:'/article/:id',component:routers.ArticleDetail
    }
]