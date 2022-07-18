import { createApp } from 'vue'
import App from './App.vue'
import element from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import store from'./store'
import './mock/index'

//路由守卫
router.beforeEach((to,from,next)=>{
    store.commit('getToken')
    const token=store.state.user.token
    if(!token&&to.name!=='loginIndex'){
        next({name:'loginIndex'})
    }else{
        next()
    }

})
//下面注释是具体写法
/*const app=createApp(App) 创建应用
app.mount('#app')   挂载 */
createApp(App).use(router).use(element).use(store).mount('#app')
