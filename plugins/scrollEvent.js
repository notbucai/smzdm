const BLARR = [];
// const BLARR = {};
/**
 * 绑定到当前
 * @param {Object} param0 
 */
const use = (fun) => {
  // 将对象保存到队列
  // BLARR.height = height;
  // BLARR.fun = fun;
  BLARR.push(fun);
}

/**
 * 移出到当前
 * @param {Object} param0 
 */
const reset = () => {
  // 将对象清空
  BLARR.length = 0;
}

/**
 * 执行
 * @param {Event} event 
 */
function exec(event) {
  
  BLARR.forEach(element => {
    try {
      element(event);
    } catch (error) {
      console.error(error);
    }
  });

};

export default ({ }, inject) => {
  inject("scrollEvent", {
    exec, use, reset
  });
}