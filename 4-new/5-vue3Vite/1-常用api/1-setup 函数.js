/*
setup 函数也是 Compsition API 的入口函数



*/ 
export default {
  
  setup() { 
    return {
      sex,
      sayHello
    }
  }
  
}

/*
<script setup> 中的顶层的导入和变量声明可在同一组件的模板中直接使用。
你可以理解为模板中的表达式和 <script setup> 中的代码处在同一个作用域中。


<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})


</script>
*/ 

