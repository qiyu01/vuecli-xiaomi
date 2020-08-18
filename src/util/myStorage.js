// 封装设置localStorage的函数（时效）
const localSetItem = function (params) {
  let obj = {
    name: '',
    value: '',
    expires: '',
    startTime: new Date().getTime()
  }

  let options = {};
  // 将obj和传进来的params合并
  Object.assign(options, obj, params);
  if (options.expires) {
    // 如果options.expires设置了的话
    // 以options.name为key，options为值放进去
    localStorage.setItem(options.name, JSON.stringify(options));
  } else {
    // 如果value是对象或者数组对象的类型，就先用JSON.stringify转一下，再存进去
    if (Object.prototype.toString.call(options.value) == '[object Object]' || Object.prototype.toString.call(options.value) == '[object Array]') {
      options.value = JSON.stringify(options.value);
    }
    localStorage.setItem(options.name, options.value);
  }
}

const localGetItem = function (name) {
  let item = localStorage.getItem(name);
  // 新将拿到的试着进行json转为对象的形式
  if(item == null) return null;
  try {
    item = JSON.parse(item);
  } catch (error) {
    // 如果不行就不是json的字符串，就直接返回
    item = item;
  }
  // 如果有startTime的值，说明设置了失效时间
  if (item.expires) {
    let date = new Date().getTime();
    // 何时将值取出减去刚存入的时间，与item.expires比较，如果大于就是过期了，如果小于或者等于就是没有过期
    if (date - item.startTime > item.expires) {
      // 缓存过期，清除缓存，返回false
      localStorage.removeItem(name);
      return null;
    } else {
      // 缓存未过期，返回值
      return item.value;
    }
  } else {
    // 如果没有设置失效时间，直接返回值
    return item;
  }
}
// 移除缓存
const removeItem = function(name) {
  localStorage.removeItem(name);
}
// 移除全部缓存
const clear = function() {
  localStorage.clear();
}

const sessionSetItem=function(name,value){
    sessionStorage.setItem(name,value)
}
const sessionGetItem=function(name){
  return sessionStorage.getItem(name) 
}
const removeSession=function(name){
  return sessionStorage.removeItem(name) 
}



export {localSetItem, localGetItem, removeItem, clear,sessionSetItem,sessionGetItem,removeSession}