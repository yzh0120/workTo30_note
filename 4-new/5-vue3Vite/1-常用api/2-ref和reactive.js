/*
ref
接受一个内部值并返回一个响应式且可变的 ref 对象，有一个 .value 属性，可以通过其读取/修改对象的值。
*/
const active = ref(false)
active.value = true

/*
reactive
创建一个响应式对象，与ref不同的是，reactive 接受的参数是一个对象，
可以使用toRef(infoObj)为对象中的每一个属性创建一个ref, 它可以保持对原属性的响应式链接。
*/
const infoObj = reactive({
  name:'Alex',
  age: '22'
})
  

/*
ref 和 reactive:
相同：创建一个响应式对象。

不同：
reactive 接受入参必须是对象形式，而 ref 可以是对象形式，也可以是一个单值。
读取/赋值不一样，ref 必须从.value 属性中读取值
ref存在异步问题、

我们可以简单地把 ref(obj) 理解为这个样子 reactive({value: obj})
*/

/*
我们如何判断数据到底是ref还是reactive?
通过isRef / isReactive 方法
*/

/*
使用toRef过程中，会发现，toRef只能代理一个对象属性。
*/ 
const infoName = toRef(infoObj, 'name')

/*
使用toRef可以代理这个对象下的所有属性
*/
return {
  ...toRefs(obj)
}


/*
<script setup>
import { ref, reactive } from 'vue'

defineProps({
  msg: String,
})

let obj = reactive({ name: 1 })
setTimeout(() => { 

  console.log(obj.name = 2,"obj")
},100)

</script>

<template>
  {{ msg }}
  {{ obj }}
</template>

<style scoped>
</style>
*/ 

/*
shallowReactive
const state = shallowReactive(obj)
听这个API的名称就知道，这是一个渐层的 reactive，难道意思就是原本的 reactive 是深层的呗，没错，这是一个用于性能优化的API
其实将 obj 作为参数传递给 reactive 生成响应式数据对象时，若 obj 的层级不止一层，那么会将每一层都用 Proxy 包装一次，我们来验证一下
设想一下如果一个对象层级比较深，那么每一层都用 Proxy 包装后，对于性能是非常不友好的
结果非常的明了了，只有第一层被 Proxy 处理了，也就是说只有修改第一层的值时，才会响应式更新，
*/ 
