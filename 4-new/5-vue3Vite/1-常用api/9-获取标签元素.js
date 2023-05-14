/*
最后再补充一个 ref 另外的作用，那就是可以获取到标签元素或组件






<template>
  <div>
    <div ref="el">div元素</div>
  </div>
</template>
 
<script>
import { ref, onMounted } from 'vue'
export default {
  setup() {
      // 创建一个DOM引用，名称必须与元素的ref属性名相同
      const el = ref(null)
 
      // 在挂载后才能通过 el 获取到目标元素
      onMounted(() => {
        el.value.innerHTML = '内容被修改'
      })
 
      // 把创建的引用 return 出去
      return {el}
  }
}
</script>
*/ 
