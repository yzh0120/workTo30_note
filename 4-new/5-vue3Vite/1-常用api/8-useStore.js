/*
在Vue2中使用 Vuex，我们都是通过 this.$store 来与获取到Vuex实例，
但上一部分说了原本Vue2中的 this 的获取方式不一样了，
并且我们在Vue3的 getCurrentInstance().ctx 中也没有发现 $store 这个属性，
那么如何获取到Vuex实例呢？这就要通过 vuex 中的一个方法了，即 useStore
*/ 
   // 获取 vuex 实例
   const store = useStore()
