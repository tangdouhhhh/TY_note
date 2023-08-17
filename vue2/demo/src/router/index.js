import VueRouter from "vue-router"
import Bar from '@/components/bar.vue'
import child from '@/pages/child.vue'
export default new VueRouter({
    routes: [
        {
            path:'/bar',
            component:Bar,
            children:[
                {
                    path:'child/:id',
                    name:'child',
                    component:child,
                    props:true
                }
            ]
        }
    ]
})