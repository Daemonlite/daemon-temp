import { createRouter,createWebHistory } from "vue-router";
import DefaultLayout from '../components/DefaultLayout.vue'
import Landing from '../components/Landing.vue'
import Blog from '../components/Blog.vue'
import Contact from '../components/Contact.vue'
import Products from '../components/Products.vue'



const routes = [
       {
        path:"/",
        component:DefaultLayout,
        children:[
            {
                path:"/",
                name:"landing",
                component:Landing
            },
            {
                path:"/blog",
                name:"blog",
                component:Blog
            },
            {
                path:"/contact",
                name:"contact",
                component:Contact
            },
            {
                path:"/products",
                name:"products",
                component:Products
            }
        ]
       }
]


const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router