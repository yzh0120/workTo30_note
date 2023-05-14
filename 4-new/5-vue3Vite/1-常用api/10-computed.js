/*
简写实例(只读)
*/
let person = reactive({
  firstName: "四",
  lastName: "李",
});
// 方法

// 计算属性--------------------------------------------------
// reative添加的属性都是响应式的
person.fullName = computed(() => {
  return person.lastName + "-" + person.firstName;
});

/*
读写实例(get/set)
*/ 
 // 数据
 let person = reactive({
  firstName: "四",
  lastName: "李",
});
// 方法

// 计算属性
// reative添加的属性都是响应式的
person.fullName = computed({
  get() {
    return person.lastName + "-" + person.firstName;
  },
  set(value) {
    const arr = value.split("-");
    person.firstName = arr[1];
    person.lastName = arr[0];
  },
});

