export const mySetInterval = (callBack, interval) => {
  let timer = { value: undefined }; // 存回调列表中唯一的标识
  const now = Date.now; // 给获取当前时间增加一个引用
  let startTime = now(); // 上次时间
  let endTime = startTime; // 本次时间

  const loop = () => { // 循环执行的方法
    timer.value = window.requestAnimationFrame(loop);
    endTime = now(); // 获取本次时间

    if (endTime - startTime >= interval) { // 当时间差大于时间间隔时
      endTime = startTime = now(); // 上次时间和本次时间重新赋值
      callBack && callBack(); // 如果有回调方法，执行回调方法
    }
  }
  // 启动方法
  timer.value = window.requestAnimationFrame(loop);
  return timer;
};

export const clearMysetInterval = (timer) => {
  if (timer && timer.value) {
    cancelAnimationFrame(timer.value);
  }
};

export const mySetTimeOut = (callBack , interval) => {
  let timer = { value: undefined };
  const now = Date.now;
  let startTime = now();
  let endTime = startTime;

  const loop = () => {
    timer.value = window.requestAnimationFrame(loop);
    endTime = now();
    if (endTime-startTime >= interval){
        endTime = startTime = now();
        cancelAnimationFrame(timer.value); // 到达延迟时间后，取消回调函数
        callBack && callBack(timer);
    }
  }

  timer.value = window.requestAnimationFrame(loop);
  console.log('timer',timer);
  return timer ;
}

export const clearMySettimeout = (timer) => {
  if (timer && timer.value) {
    cancelAnimationFrame(timer.value);
  }
}