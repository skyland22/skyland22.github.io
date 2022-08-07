function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
}
const waternum = getRandomIntInclusive(2666666, 2999999)
Date.prototype.format = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1, //月份
    'd+': this.getDate(), //日
    'h+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds(), //毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length),
    )
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length),
      )
    }
  }
  return fmt
}

const params = new URLSearchParams("name=昝新羽&id=20211249708&gender=女（female）&number=18565032611&idnum=34022320001211132X&school=电信院&mentor=王浩&counselor=陈玥竹")
//const params = new URLSearchParams("name=舒梁&id=20211249254&gender=男（male）&number=18651322019&idnum=34252319981005133X&school=电信院&mentor=张敏&counselor=祁雪峰")


$('.water').text(waternum)
$('.name').text(params.get('name'))
$('.id').text(params.get('id'))
$('.school').text(params.get('school'))
$('.gender').text(params.get('gender'))
$('.mentor').text(params.get('mentor'))
$('.number').text(params.get('number'))
$('.idnum').text(params.get('idnum'))
$('.counselor').text(params.get('counselor'))

const date = new Date()
date.setMinutes(0)
date.setHours(0)
const startTime = date.format('yyyy-MM-dd')
$('.appdata').text(startTime)
