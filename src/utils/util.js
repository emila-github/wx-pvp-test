/**
 * 格式化时间
 * @param  {Datetime} source 时间对象
 * @param  {String} format 格式
 * @return {String}        格式化过后的时间
 */
function formatDate (source, format) {
  const o = {
    'M+': source.getMonth() + 1, // 月份
    'd+': source.getDate(), // 日
    'H+': source.getHours(), // 小时
    'm+': source.getMinutes(), // 分
    's+': source.getSeconds(), // 秒
    'q+': Math.floor((source.getMonth() + 3) / 3), // 季度
    'f+': source.getMilliseconds() // 毫秒
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (source.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return format
}
/**
 * tab切换
 * @param  {object} e 当前切换对象
 * @param  {object} that 页面的this对象
 * @return {String}        修改切换标签数据的open属性
 */
function clickTab (e, that) {
  console.log('clickTab', e)
  let id = e.currentTarget.dataset.index
  let tabName = e.currentTarget.dataset.tabName || ''
  console.log(e.currentTarget, id, tabName)
  let tabs = tabName.split('.')
  let list = that.data
  let oldList = list
  for (let i = 0; i < tabs.length; i++) {
    list = list[tabs[i]]
  }
  for (let i = 0, len = list.length; i < len; ++i) {
    if (i === id) {
      list[i].open = true
      // list[i].open = !list[i].open
    } else {
      list[i].open = false
    }
  }
  console.log('list=', list)
  that.setData(oldList)
  console.log(that.data)
}
//计算多少天前
function jsDateDiff (publishTime){
  var pDate = new Date(Date.parse(publishTime.replace(/-/g,   "/"))).getTime()/1000
  var d_minutes,d_hours,d_days
  var timeNow = parseInt(new Date().getTime()/1000)
  var d
  d = timeNow - pDate
  d_days = parseInt(d/86400)
  d_hours = parseInt(d/3600)
  d_minutes = parseInt(d/60)
  if (d_days>0 && d_days<4) {
    return d_days+"天前"
  } else if (d_days<=0 && d_hours>0){
    return d_hours+"小时前"
  } else if (d_hours<=0 && d_minutes>0){
    return d_minutes+"分钟前"
  } else {
    var s = new Date(pDate*1000)
    // s.getFullYear()+"年"
    return (s.getMonth()+1)+"月"+s.getDate()+"日"
  }
}

module.exports = { formatDate, clickTab, jsDateDiff }
