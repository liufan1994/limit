import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import house from '../pages/house'
import car from '../pages/car'
import warranty from '../pages/warranty'
import infor from '../pages/infor'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/index' },
        {
            path: '/index',
            component: index
        },
        {
            path: '/house',
            component: house
        },
        {
            path: '/car',
            component: car
        },
        {
            path: '/warranty',
            component: warranty
        },
        {
            path: '/infor',
            component: infor
        }
    ]
})
