/*
provide ：向子组件以及子孙组件传递数据。接收两个参数，第一个参数是 key，即数据的名称；第二个参数为 value，即数据的值
inject ：接收父组件或祖先组件传递过来的数据。接收一个参数 key，即父组件或祖先组件传递的数据名称
提供的对象是响应式对象的情况下,接收的对象也是响应式

假设这有三个组件，分别是 A.vue 、B.vue 、C.vue，其中 B.vue 是 A.vue 的子组件，C.vue 是 B.vue 的子组件

// A.vue
<script>
import {provide} from 'vue'
export default {
    setup() {
        const obj= {
            name: '前端印象',
            age: 22
        }
 
        // 向子组件以及子孙组件传递名为info的数据
        provide('info', obj)
    }
}
</script>
 
// B.vue
<script>
import {inject} from 'vue'
export default {
    setup() {   
        // 接收A.vue传递过来的数据
        inject('info')  // {name: '前端印象', age: 22}
    }
}
</script>
 
// C.vue
<script>
import {inject} from 'vue'
export default {
    setup() {   
        // 接收A.vue传递过来的数据
        inject('info')  // {name: '前端印象', age: 22}
    }
}
</script>

*/ 
