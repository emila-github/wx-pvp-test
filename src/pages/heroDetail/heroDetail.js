// 获取全局应用程序实例对象
const app = getApp()
const Promise = require('../../utils/bluebird')
let util = require('../../utils/util')
let heros = require('../../utils/config/heros')
let heroType = require('../../utils/config/heroType')
let heroFeature = require('../../utils/config/heroFeature')
var WxParse = require('../wxParse/wxParse.js')
// 创建页面实例对象
Page({
  data: {
    pageTab: [
      {
        name: '英雄介绍',
        open: true
      },
      {
        name: '新手入门',
        open: false
      },
      {
        name: '进阶解说',
        open: false
      },
      {
        name: '圈娱乐',
        open: false
      }
    ],
    // officeDetail: require('../../utils/officeDetail'),
    hero: {
      videoPic: 'http://p2.v.17173cdn.com/vw0tha/YWxqaGBf/uploads/images/video/20170218/38701501_0.jpg',
      video: 'http://vod.cdn1.v.17173.com/82e400222821e53400aa01e4df7a580062a77f0841006b46/cx2/FLVList/20170218/1/57364530_38701501_1.mp4',
      showVideo: false
    },
    videos: [
      {
        id: 1,
        title: '【马赛解说】 炸裂吧黄忠技能出装玩法详解',
        pic: 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/UDCwFfbljfajuyA.png',
        time: '02-07'
      },
      {
        id: 2,
        title: '【马赛解说】 炸裂吧黄忠技能出装玩法详解',
        pic: 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/UDCwFfbljfajuyA.png',
        time: '02-07'
      },
      {
        id: 3,
        title: '【马赛解说】 炸裂吧黄忠技能出装玩法详解',
        pic: 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/UDCwFfbljfajuyA.png',
        time: '02-07'
      },
      {
        id: 4,
        title: '【马赛解说】 炸裂吧黄忠技能出装玩法详解',
        pic: 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/UDCwFfbljfajuyA.png',
        time: '02-07'
      }
    ],
    news: [
      {
        id: 1,
        type: '攻略',
        title: '射手黄忠玩法全攻略 宝刀未老恐怖的团战杀手',
        time: '02-07'
      },
      {
        id: 2,
        type: '公告',
        title: '射手黄忠玩法全攻略 宝刀未老恐怖的团战杀手',
        time: '02-08'
      },
      {
        id: 3,
        type: '公告',
        title: '射手黄忠玩法全攻略 宝刀未老恐怖的团战杀手',
        time: '02-08'
      }
    ]
  },
  formatData () {
    let that = this
    let officeDetail = this.data.officeDetail
    // 技能介绍
    let skill = []
    for (let i = 0; i < 5; i++) {
      let idx = i + 1
      if (officeDetail.hasOwnProperty(`skillname${idx}`) && officeDetail['skillname' + idx]) {
        skill[i] = {}
        skill[i]['open'] = i === 0
        skill[i]['skillname'] = officeDetail['skillname' + idx]
        skill[i]['skillid'] = officeDetail['skillid' + idx]
        skill[i]['skillpic'] = that.skillImg(skill[i]['skillid'])
        skill[i]['skilldesc'] = officeDetail['skilldesc' + idx]
        skill[i]['skillcool'] = officeDetail['skillcool' + idx]
        skill[i]['skillspend'] = officeDetail['skillspend' + idx]
        skill[i]['skilltips'] = officeDetail['skilltips' + idx]
      }
    }
    // 最佳搭档
    let partnerheros = []
    // 被谁克制
    let passiveheros = []
    // 出装建议
    let armStep = ['前期装备', '中秋装备', '后期装备']
    let armLabel = ['outarm', 'midarm', 'latearm']
    let armsCis = []
    let armsInverse = []
    for (let i = 0; i < 4; i++) {
      let idx = i + 1
      if (officeDetail.hasOwnProperty(`partnerhero${idx}`)) {
        let heroId = officeDetail[`partnerhero${idx}`]
        console.log('partnerhero heroId=', heroId)
        partnerheros.push({
          heroOffId: heroId,
          heroName: that.heroName(heroId),
          heroPic: that.heroImg(heroId),
          herodesc: officeDetail[`partnerherodesc${idx}`]
        })
      }
      if (officeDetail.hasOwnProperty(`passivehero${idx}`)) {
        let heroId = officeDetail[`passivehero${idx}`]
        console.log('passivehero heroId=', heroId)
        passiveheros.push({
          heroOffId: heroId,
          heroName: that.heroName(heroId),
          heroPic: that.heroImg(heroId),
          herodesc: officeDetail[`passiveherodesc${idx}`]
        })
      }
      if (officeDetail.hasOwnProperty(`arm${idx}`)) {
        for (let j = 0, jLen = armStep.length; j < jLen; j++) {
          let item = {
            label: armStep[j],
            datas: (function () {
              let imgIds = officeDetail[`${armLabel[j]}${idx}`].split('|')
              let imgs = []
              for (let d = 0, dLen = imgIds.length; d < dLen; d++) {
                let attr = that.armAttr(imgIds[d]) || []
                imgs.push({
                  id: imgIds[d],
                  src: that.armImg(imgIds[d]),
                  title: attr['item_name'],
                  attr: attr
                })
              }
              return imgs
            }())
          }
          if (i === 0) {
            armsCis.push(item)
          }
          if (i === 1) {
            armsInverse.push(item)
          }
        }
      }
    }
    this.setData({
      hero: {
        heroType: that.heroTypeVal(officeDetail.locate1),
        heroFeature: that.heroFeatureVal(officeDetail.locate2),
        heroHeaderBg: that.heroHeaderBgImg(officeDetail.heroid),
        heroFace: that.heroImg(officeDetail.heroid),
        skill: skill,
        partnerheros: partnerheros,
        passiveheros: passiveheros,
        armsCis: armsCis,
        armsInverse: armsInverse
      }
    })
  },
  fetchMing () {
    let that = this
    // if (app.globalData.officeMing) {
    //   that.setData({
    //     officeMing: app.globalData.officeMing
    //   })
    //   return
    // }
    return app.api.fetchMing().then(function (res) {
      app.globalData.officeMing = res.data
      that.setData({
        officeMing: res.data
      })
    })
  },
  fetchArm () {
    let that = this
    // if (app.globalData.officeArm) {
    //   that.setData({
    //     officeArm: app.globalData.officeArm
    //   })
    //   return
    // }
    return app.api.fetchArm().then(function (res) {
      app.globalData.officeArm = res.data
      that.setData({
        officeArm: res.data
      })
    })
  },
  fetchSummoner () {
    let that = this
    // if (app.globalData.officeSummoner) {
    //   that.setData({
    //     officeSummoner: app.globalData.officeSummoner
    //   })
    //   return
    // }
    return app.api.fetchSummoner().then(function (res) {
      app.globalData.officeSummoner = res.data
      that.setData({
        officeSummoner: res.data
      })
    })
  },
  fetchHeroInfo (options) {
    let that = this
    return app.api.fetchHeroInfo(options).then(function (res) {
      // console.log('fetchHeroInfo==', res)
      that.setData({
        officeDetail: res.data.data
      })
    })
  },
  // 把返回的字符串处理一下
  trimJSON (str) {
    var e = /\s*(?:var)?.+?({.+});\s*/
    var result = e.exec(str)
    console.log('result=', result)
    if (result && result[1]) {
      return result[1]
    } else {
      return str
    }
  },
  onLoad (options) {
    let that = this
    Promise.all([that.fetchMing(), that.fetchArm(), that.fetchSummoner(), that.fetchHeroInfo(options)]).then(function () {
      that.formatData()
      WxParse.wxParse('hero.useskill', 'html', that.data.officeDetail.useskill, that, 5)
      WxParse.wxParse('hero.confrontskill', 'html', that.data.officeDetail.confrontskill, that, 5)
      console.log('formatDataAfter=', that.data)
    }).then(function () {
      let introducevideo = that.data.officeDetail.introducevideo
      app.api.fetchVids(introducevideo).then(function (res) {
        var data = JSON.parse(that.trimJSON(res.data))
        let hero = that.data.hero
        that.setData(Object.assign(hero, {
          sVID: data.msg.sVID
        }))
        return data.msg.sVID
      }).then(function (sVID) {
        app.api.fetchVideoInfo(sVID).then(function (res) {
          var data = JSON.parse(that.trimJSON(res.data))
          console.log('fetchVideoInfo=', data)
          let {ip, vl: {vi}} = data
          let fvkey = vi[0].fvkey
          let fn = vi[0].fn
          let ul = vi[0].ul
          let url = ul.ui[0]['url']
          console.log(ip, vi)
          let hero = that.data.hero
          that.setData(Object.assign(hero, {
            video: `${url}${fn}?vkey=${fvkey}`
            // video: `http://${ip}/vhot2.qqvideo.tc.qq.com/${fn}?vkey=${fvkey}`
            // video: 'http://218.106.151.194/vhot2.qqvideo.tc.qq.com/t03680630zx.mp4?vkey=1619065E0C2BA0635B81B98CF8F32E4BF6DEB0D54450829EF276C6C83C9FE51FAC615A4AC613C48E809A286615643D4965ABEB8E7F0FD3335F011CFA2F40CED9C1C072F9E9242DE456A381095F80294C443760AF7FD61279'
          }))
        })
      })
      console.log('formatDataAfter2=', that.data)
    })
  },
  onShow () {

  },
  showVideo () {
    let hero = this.data.hero
    hero.showVideo = true
    this.setData({
      hero: hero
    })
    this.playVideo()
  },
  playVideo () {
    var video = wx.createVideoContext('gameIntro')
    video.play()
  },
  heroTypeVal (value) {
    return heroType[value]
  },
  heroFeatureVal (value) {
    return heroFeature[value]
  },
  heroName (value) {
    return heros[value]
  },
  skillImg (value) {
    return value ? `https://ossweb-img.qq.com/images/yxzj/ingame/res/skill/${value}.png` : 'https://game.gtimg.cn/images/yxzj/ingame/ingame_5/ji.png'
  },
  heroImg (value) {
    return value ? `https://game.gtimg.cn/images/yxzj/ingame/index_heros/${value}.jpg` : 'https://game.gtimg.cn/images/yxzj/ingame/ingame_5/tou.png'
  },
  heroHeaderBgImg (value) {
    return value ? `https://game.gtimg.cn/images/yxzj/ingame/index_heros/bg/${value}_bg.jpg` : ''
  },
  mingImg (value) {
    return value ? `https://game.gtimg.cn/images/yxzj/img201606/mingwen/${value}.png` : 'https://game.gtimg.cn/images/yxzj/ingame/ingame_5/ji.png'
  },
  summonerImg (value) {
    return value ? `https://game.gtimg.cn/images/yxzj/img201606/summoner/${value}.jpg` : 'https://game.gtimg.cn/images/yxzj/ingame/ingame_5/ji.png'
  },
  armImg (value) {
    // https://ossweb-img.qq.com/images/yxzj/ingame/res/equip/${value}.png
    return value ? `https://game.gtimg.cn/images/yxzj/img201606/itemimg/${value}.jpg` : 'https://game.gtimg.cn/images/yxzj/ingame/ingame_5/ji.png'
  },
  armAttr (value) {
    let officeArm = this.data.officeArm
    let arms = officeArm.filter(item => {
      return parseInt(item['item_id'], 10) === parseInt(value, 10)
    })
    let arm = arms.length ? arms[0] : {}
    return arm
  },
  clickTab: function (e) {
    util.clickTab(e, this)
  }
})
