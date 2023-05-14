/*
因为 instance 包含的内容太多，我们重点来看一下 ctx 和 proxy，因为这两个才是我们想要的 this 的内容

可以看到 ctx 和 proxy 的内容十分类似，只是后者相对于前者外部包装了一层 proxy，由此可说明 proxy 是响应式的

*/ 
const instance = getCurrentInstance()
