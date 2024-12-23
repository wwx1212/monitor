export function validatePhoneRule(value) {
  const reg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  if (value == '' || value == undefined || value == null) {
    return false
  } else {
    if ((!reg.test(value)) && value != '') {
      return false
    } else {
      return true
    }
  }
}

/* 是否外链*/
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/*  合法uri*/
export function validateURL(textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/*  小写字母*/
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/*  大写字母*/
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/*  大小写字母*/
export function validateAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * validate email
 * @param email
 * @returns {boolean}
 */
export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

/*  大小写字母*/
export function validatAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}

export function isInteger(val) {
  return Number.isInteger(val)
}

// 正则控制不能 '输入' 特殊符号和空格
export function checkInput(param) {
  // 判断参数是否包含特殊字符
  // let regtszf = /[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]+/g // 特殊字符正则
  // const regtszf = /[`~!@#$%^&*()_\-+=<>?:"{}|,./;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/g // 特殊字符正则
  const regtszf = /[`~!@#$%^&*_\-+=<>?:"{}()（）|/,.;'[\]·~！@#￥%……&*——\-+={}《》？：“”【】、；’‘，。、]/g // 特殊字符正则
  const regkg = /[ ]/g// 空格正则
  return param.replace(regtszf, '').replace(regkg, '')
}

// 正则控制不能 '输入' 特殊符号和空格
export function numberInput(param) {
  // 判断参数是否包含特殊字符
  const regtszf = /[`~!@#$%^&*()_\-+=<>?:"{}|,/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/g // 特殊字符正则
  const regkg = /[ ]/g// 空格正则
  const inputText = param.replace(regtszf, '').replace(regkg, '')
  return inputText
}

// 金额转化千字符不保存两位小数
export function priceToLocaleString(num) {
  if (num) {
    const newNum = Number(num)
    return newNum.toLocaleString()
  }
}

// 金额转化千字符保存pre位小数
export function priceToLocaleStringNumber(num, pre = 2) {
  if (num) {
    const newNum = Number(num)
    return newNum.toFixed(pre).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  }
}

// 金额转化千字符, 有小数自动保存两位小数，没有小数则不保留小数
export function priceToLocaleStringAuto(num, pre = 2) {
  function hasDecimalPart(number) {
    return number % 1 !== 0;
  }

  if (num) {
    if (hasDecimalPart(num)) {
      // 有小数
      let newNum = (parseInt(num * 100) / 100).toFixed(pre)
      return newNum.replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    } else {
      // 无小数
      const newNum = Number(num)
      return newNum.toLocaleString()
    }
  } else {
    if (num === 0 || num === '0') return 0
    else return '0'
  }
}
