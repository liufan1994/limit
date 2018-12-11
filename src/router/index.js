import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let arr = [
    {
        _path: 'index'
    },
    {
        _path: 'house'
    },
    {
        _path: 'car'
    },
    {
        _path: 'warranty'
    },
    {
        _path: 'infor'
    },
    {
        _path: 'about',
        _src: 'about/about'
    }
]

let routes = [{ path: '/', redirect: '/index' }]
arr.map(val => {
    let src = val._src || val._path
    routes.push({
        path: '/' + val._path,
        name: val._path,
        component: () => import('@/pages/' + src + '.vue')
    })
})
console.log(routes)
export default new Router({ routes })
