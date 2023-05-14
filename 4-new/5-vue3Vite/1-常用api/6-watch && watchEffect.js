/*
watch：watch( source, cb, [options] )

参数说明：

source：可以是表达式或函数或变量，用于指定监听的依赖对象
cb：依赖对象变化后执行的回调函数
options：可参数，可以配置的属性有 immediate（立即触发回调函数）、deep（深度监听）
*/

/*
当监听 ref 类型时：
*/ 
var state = ref(0)
 
watch(state, (newValue, oldValue) => {
    console.log(`原值为${oldValue}`)
    console.log(`新值为${newValue}`)
    /* 1秒后打印结果：
                            原值为0
                            新值为1
            */
              })

// 1秒后将state值+1
setTimeout(() => {
    state.value ++
}, 1000)

/*
当监听 reactive 类型时：
*/ 
let state = reactive({count: 0})
 
        watch(() => state.count, (newValue, oldValue) => {
            console.log(`原值为${oldValue}`)
            console.log(`新值为${newValue}`)
            /* 1秒后打印结果：
                            原值为0
                            新值为1
            */
        })
 
        // 1秒后将state.count的值+1
        setTimeout(() => {
            state.count ++
        }, 1000)
/*
当同时监听多个值时：
*/ 
const state = reactive({ count: 0, name: 'zs' })
 
        watch(
            [() => state.count, () => state.name], 
            ([newCount, newName], [oldvCount, oldvName]) => {
                console.log(oldvCount) // 旧的 count 值
                console.log(newCount) // 新的 count 值
                console.log(oldName) // 旧的 name 值
                console.log(newvName) // 新的 name 值
            }
        )
 
        setTimeout(() => {
          state.count ++
          state.name = 'ls'
        }, 1000)
/*
因为 watch 方法的第一个参数我们已经指定了监听的对象，因此当组件初始化时，
不会执行第二个参数中的回调函数，若我们想让其初始化时就先执行一遍，可以在第三个参数对象中设置 immediate: true

watch 方法默认是渐层的监听我们指定的数据，例如如果监听的数据有多层嵌套，
深层的数据变化不会触发监听的回调，若我们想要其对深层数据也进行监听，可以在第三个参数对象中设置 deep: true
*/


/*
接下来再来聊聊 watchEffect，它与 watch 的区别主要有以下几点：

不需要手动传入依赖,每次初始化时会执行一次回调函数来自动获取依赖
无法获取到原值，只能得到变化后的值
*/ 
const state = reactive({ count: 0, name: 'zs' })
 
watchEffect(() => {
    console.log(state.count)
    console.log(state.name)
    /*  初始化时打印：
                    0
                    zs

        1秒后打印：
                    1
                    ls
    */
})

setTimeout(() => {
  state.count ++
  state.name = 'ls'
}, 1000)
