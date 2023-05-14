/*
组件进行切换的时候，默认会进行销毁，如果有需求，某个组件切换后不进行销毁，而是保存之前的状态，那么就可以利用keep-alive来实现
*/

/*
1.利用include、exclude属性
<keep-alive include="orderList">
      <router-view></router-view>
</keep-alive>
<keep-alive exclude="index">
      <router-view></router-view>
</keep-alive>
include属性表示只有name属性为orderList的组件会被缓存，（注意是组件的名字，不是路由的名字）其它组件不会被缓存
exclude属性表示除了name属性为index的组件不会被缓存，其它组件都会被缓存

*/


