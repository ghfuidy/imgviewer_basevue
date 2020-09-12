export function debounce(func, delay) {
  let timer
  let debounced = function (...args) {
      if (timer) {
          clearTimeout(timer)
      };

      timer = setTimeout(() => {
          func.apply(this, args);
      }, delay)
  };
  debounced.cancel = function(){
    console.log("cancel");
    clearTimeout(timer)
  }
  return debounced
}

export function formatDate(date, style) {
  if(/(y+)/.test(style)){
    style = style.replace(RegExp.$1, (date.getFullYear() + ''.substr(4 - RegExp.$1.length)))
  }

  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(style)) {
      let str = o[k] + '';
      style = style.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return style;
}

function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}