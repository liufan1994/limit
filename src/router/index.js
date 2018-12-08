import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import house from '../pages/house'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/index',
            component: index
        },
        {
            path: '/house',
            component: house
        }
    ]
})
