/**
 *
 * @param time
 * @param num
 * @returns {string}
 */
import moment from 'moment'

export const getBeforeDate = (time, num) => {
  num = Number(num)
  time = time.split(' ')[0]
  const n = num
  let d = ''
  if (time) {
    d = new Date(time)
  } else {
    d = new Date()
  }
  let year = d.getFullYear()
  let mon = d.getMonth() + 1
  let day = d.getDate()
  if (day <= n) {
    if (mon > 1) {
      mon = mon - 1
    } else {
      year = year - 1
      mon = 12
    }
  }
  d.setDate(d.getDate() + n)
  year = d.getFullYear()
  mon = d.getMonth() + 1
  day = d.getDate()
  return year + '-' + (mon < 10 ? '0' + mon : mon) + '-' + (day < 10 ? '0' + day : day) + ' ' + '00:00:00'
}

export const getBeforeTime = (time, num) => {
  num = Number(num)
  time = time.split(' ')[0]
  const n = num
  let d = ''
  if (time) {
    d = new Date(time)
  } else {
    d = new Date()
  }
  let year = d.getFullYear()
  let mon = d.getMonth() + 1
  let day = d.getDate()
  if (day <= n) {
    if (mon > 1) {
      mon = mon - 1
    } else {
      year = year - 1
      mon = 12
    }
  }
  d.setDate(d.getDate() - n)
  year = d.getFullYear()
  mon = d.getMonth() + 1
  day = d.getDate()
  return year + '-' + (mon < 10 ? '0' + mon : mon) + '-' + (day < 10 ? '0' + day : day) + ' ' + '00:00:00'
}

export const computeYmd = (val, n) => {
  n = Number(n)
  val = val.split(' ')[0]
  const str = val.replace(/-/g, '/')
  const d = new Date(str)
  // 因为getMonth()获取的月份的值只能在0~11之间所以我们在进行setMonth()之前先给其减一
  d.setMonth(d.getMonth() - 1 + n + 1)
  const yy1 = d.getFullYear()
  let mm1 = d.getMonth() + 1
  let dd1 = d.getDate()
  if (dd1 === '00') {
    mm1 = parseInt(mm1) - 1
    const new_date = new Date(yy1, mm1, 1)
    dd1 = new Date(new_date.getTime() - 1000 * 60 * 60 * 24).getDate()
  }
  if (mm1 < 10) {
    mm1 = '0' + mm1
  }
  if (dd1 < 10) {
    dd1 = '0' + dd1
  }
  return yy1 + '-' + mm1 + '-' + dd1 + ' ' + '00:00:00'
}

export const changeTime = (date) => {
  const DateObj = new Date(date)
  // 将时间转换为 XX年XX月XX日XX时XX分XX秒格式
  const year = DateObj.getFullYear()
  let month = DateObj.getMonth() + 1
  let day = DateObj.getDate()
  let hh = DateObj.getHours()
  let mm = DateObj.getMinutes()
  let ss = DateObj.getSeconds()
  month = month > 9 ? month : '0' + month
  day = day > 9 ? day : '0' + day
  hh = hh < 10 ? '0' + hh : hh
  mm = mm < 10 ? '0' + mm : mm
  ss = ss < 10 ? '0' + ss : ss
  // 最终时间
  return year + '-' + month + '-' + day + ' ' + hh + ':' + mm + ':' + ss
}

export const currentTime = () => {
  const DateObj = new Date()
  // 将时间转换为 XX年XX月XX日XX时XX分XX秒格式
  const year = DateObj.getFullYear()
  let month = DateObj.getMonth() + 1
  let day = DateObj.getDate()
  let hh = DateObj.getHours()
  let mm = DateObj.getMinutes()
  let ss = DateObj.getSeconds()
  month = month > 9 ? month : '0' + month
  day = day > 9 ? day : '0' + day
  hh = hh < 10 ? '0' + hh : hh
  mm = mm < 10 ? '0' + mm : mm
  ss = ss < 10 ? '0' + ss : ss
  // 最终时间
  return year + '-' + month + '-' + day + ' ' + hh + ':' + mm + ':' + ss
}

// 获取当前年份的第一天（数据看板默认获取当前年份的数据）
export const currentYear = () => {
  const DateObj = new Date()
  // 将时间转换为 XX年XX月XX日XX时XX分XX秒格式
  const year = DateObj.getFullYear()
  // 最终时间
  return year + '-01-01'
}

// 获取当前年份（数据看板默认获取当前年份的数据）
export const currentYears = () => {
  const DateObj = new Date()
  // 将时间转换为 XX年XX月XX日XX时XX分XX秒格式
  // 最终时间
  return DateObj.getFullYear()
}

// 获取当前年份月份（数据看板默认获取当前年份的数据）
export const currentYM = () => {
  const data = new Date()
  const year = data.getFullYear()
  let month = data.getMonth() + 1
  month = month.toString().padStart(2, '0') // 将月份补为两位
  return year + '-' + month
}

// 获取当前月份（数据看板默认获取当前年份的数据）
export const currentM = () => {
  const data = new Date()
  let month = data.getMonth() + 1
  month = month.toString().padStart(2, '0') // 将月份补为两位
  return month
}

// 判断今年是否是闰年
export const isLeapYear = (year) => {
  // const year = new Date().getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function formatDate(time) {
  const datetime = new Date(time)
  // 获取年月日时分秒值  slice(-2)过滤掉大于10日期前面的0
  const year = datetime.getFullYear()
  const month = ('0' + (datetime.getMonth() + 1)).slice(-2)
  const date = ('0' + datetime.getDate()).slice(-2)
  const hour = ('0' + datetime.getHours()).slice(-2)
  const minute = ('0' + datetime.getMinutes()).slice(-2)
  const second = ('0' + datetime.getSeconds()).slice(-2)
  return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
}

/**
 * 增加时间
 * @param format 时间格式化
 * @param amount  增加几天，月，年
 * @param unit  增加的单位是月，天，年 m,d,y,w
 * @param dateTime 时间，默认是当前时间
 * @returns {string}
 *  addDate('yyyy-MM-DD HH:mm:ss', this.temp.rentDuration, 'M', this.temp.startDate)
 */
export function addDate(format, amount, unit, dateTime = new Date()) {
  return moment(dateTime).add(amount, unit).format(format)
}

// 获取当前时间
export function getCurrentTime() {
  const data = new Date()
  const year = data.getFullYear()
  let month = data.getMonth() + 1
  month = month.toString().padStart(2, '0') // 将月份补为两位
  const day = data.getUTCDate().toString().padStart(2, '0')
  const hours = data.getHours().toString().padStart(2, '0')
  const min = data.getMinutes().toString().padStart(2, '0')
  const seconds = data.getSeconds().toString().padStart(2, '0')
  return year + '-' + month + '-' + day + ' ' + hours + ':' + min + ':' + seconds
}

export const currentYMD = () => {
  const data = new Date()
  const year = data.getFullYear()
  let month = data.getMonth() + 1
  month = month.toString().padStart(2, '0') // 将月份补为两位
  const day = data.getUTCDate().toString().padStart(2, '0')
  return year + '-' + month + '-' + day
}

// 动态获取时间
// export function goTime() {
// 	setTimeout(() => {
// 		getCurrentTime()

// 	}, 1000)
// }
