import index from '../../components/index.vue' 
import first from '../../components/first.vue'
import my from '../../components/my.vue'
import type from '../../components/type.vue'
import shop from '../../components/shop.vue'
import list from '../../components/list.vue'
import datail from '../../components/datail.vue'
import datail1 from '../../components/datail1.vue'
import login from '../../components/login.vue'
import VueRouter from 'vue-router'


var  router= new VueRouter({
    routes:[
        {
            path:'/first',
            component:first,
            children:[
                {
                    path:'/index',
                    component:index
                },
                {
                    path:'/type',
                    component:type,
                  
                },
                {
                    path:'/shop',
                    component:shop,
                  
                },
                {
                    path:'/my',
                    component:my,
                  
                },

            ],
            redirect:'/index'


          },
          {
            path:'/list',
            component:list,

          },
          {
            path:'/datail',
            component:datail,

          },
          {
            path:'/datail1',
            component:datail1,

          },
          {
            path:'/login',
            component:login,

          },
      {
        path:"/*",
        redirect:'/index'
    }

]
        
  
  
  })
  export default router;
  