import Vue from "vue"
import Vuex from "vuex"

import mutations from "./nutations.js"
import actions from "./actions.js"
import getters from './getters.js'
// 1.安装插件
Vue.use(Vuex)

// 2.创建Store对象
const state = {
    cartList: []
}
const store = new Vuex.Store({
    state: state,
    mutations,
    actions,
    getters
})

// 3.挂载到Vue实例上
export default store