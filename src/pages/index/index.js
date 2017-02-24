// 获取全局应用程序实例对象
  const app = getApp()
  var hasOfficeHeros
// 创建页面实例对象
  Page({
    data: {
      manito: [
        {
          title: '快速脱离青铜',
          child: [
            {
              id: 1,
              title: '1分钟明白怎么玩'
            }
          ]
        }
      ],
      navBtnSelectIdx: 1,
      imgUrls: [
        'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/fXQRALbljaxtzok.png',
        'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/HLxYOcbljawEmss.png',
        'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/FuSyaCbljavrxdB.png'
      ],
      videosJc: [
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
      newsFl: [
        {
          id: 1,
          type: '金币',
          title: 'xxx活动使用黄忠拿88金币',
          time: '02-07'
        },
        {
          id: 2,
          type: '砖石',
          title: '【官方】天天签到有好礼',
          time: '02-08'
        },
        {
          id: 3,
          type: '皮肤',
          title: '限时任务领取刘备皮肤',
          time: '02-08'
        }
      ],
      newsTy: [
        {
          id: 1,
          type: '攻略',
          title: '体验射手黄忠玩法全攻略 宝刀未老恐怖的团战杀手',
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
      ],
      newsGl: [
        {
          id: 1,
          type: '攻略',
          title: '攻略射手黄忠玩法全攻略 宝刀未老恐怖的团战杀手',
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
      let officeHeros = this.data.officeHeros || []
      let freeHeroList = []
      let hotHeroList = []
      let newHeroList = []
      for (let i = 0, len = officeHeros.length; i < len; i++) {
        let hero = officeHeros[i]
        if (hero['pay_type'] === 10) {
          freeHeroList.push(hero)
        }
        if (hero.new_type === 1) {
          newHeroList.push(hero)
        }
      }
      console.log('freeHeroList=', freeHeroList)
      this.setData({
        freeHeroList: freeHeroList,
        newHeroList: newHeroList,
        hotHeroList: hotHeroList,
        officeHeros: officeHeros
      })
    },
    getGlobalData () {
      // console.log('getGlobalData===', app.globalData.officeHeros)
      this.setData({
        officeHeros: app.globalData.officeHeros || []
      })
      if (app.globalData.officeHeros) {
        clearInterval(hasOfficeHeros)
        this.formatData()
      }
    },
    onLoad () {
      let that = this
      let officeHeros = this.data.officeHeros || []
      if (!officeHeros.length) {
        hasOfficeHeros = setInterval(that.getGlobalData, 1000)
      }
    },
    onShow () {

    },
    navItemTap (e) {
      let index = e.target.dataset.index
      if (index !== this.navBtnSelectIdx) {
        this.setData({
          navBtnSelectIdx: index
        })
      }
    }
  })
