// 下面代码中使用 setTimeout 调度了一个调用，然后需要运行一个计算量很大的 for 循环，这段运算耗时超过 100 毫秒

// 调度的函数会在何时运行？ 任何 setTimeout 都只会在当前代码执行完毕之后才会执行

// console会显示什么
//     循环执行完成后
//     循环执行前
//     循环刚开始时      都是100000000

let i = 0;

setTimeout(() => console.log(i), 100); // ?

// 假设这段代码的运行时间 >100ms
for (let j = 0; j < 100000000; j++) {
  i++;
}
