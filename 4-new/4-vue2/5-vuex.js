/*
Vuex 是一个全局状态管理模式

vuex分为五个大块

state： 统一定义公共数据（类似于data(){return {a:1, b:2，xxxxxx}}）

mutations ： 使用它来修改数据(类似于methods)

getters： 类似于computed(计算属性，对现有的状态进行计算得到新的数据-------派生 )

actions： 发起异步请求

modules： 模块拆分

*/


this.$state.state.a.userinfo

this.$state.commit("a/afn",params)
