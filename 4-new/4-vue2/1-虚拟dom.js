/*
https://blog.csdn.net/pfourfire/article/details/126941188


Vue是数据驱动视图的，数据发生变化视图就要随之更新，
在更新视图的时候难免要操作DOM,而操作DOM又是非常耗费性能的
解决方案是用JS的计算性能来换取操作DOM所消耗的性能
我们逃不掉操作DOM这道坎,但是我们可以尽可能少的操作DOM
当数据发生变化时, vue会对比变化前后的虚拟DOM节点，通过DOM-Diff算法计算出需要更新的地方，然后去更新需要更新的视图。
这就是虚拟DOM产生的原因以及最大的用途。



*/
