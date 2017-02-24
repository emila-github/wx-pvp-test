// 获取全局应用程序实例对象
const app = getApp()
// 创建页面实例对象
Page({
  data: {
    navItems: [
      {
        id: 0,
        name: '全部'
      },
      {
        id: 1,
        name: '战士'
      },
      {
        id: 2,
        name: '法师'
      },
      {
        id: 3,
        name: '坦克'
      },
      {
        id: 4,
        name: '刺客'
      },
      {
        id: 5,
        name: '射手'
      },
      {
        id: 6,
        name: '辅助'
      },
      {
        id: 7,
        name: '体验服'
      }
    ],
    navBtnSelectIdx: 0
  },
  onLoad () {
    this.setData({
      heros: app.globalData.officeHeros
    })
  },
  onShow () {

  },
  navItemTap (e) {
    let index = e.target.dataset.index
    let heros = this.data.heros || []
    if (index !== this.navBtnSelectIdx) {
      this.setData({
        navBtnSelectIdx: index
      })
    }
    for (let i = 0, len = heros.length; i < len; i++) {
      if (index === 0 || heros[i]['hero_type'] === index) {
        heros[i].show = true
      } else {
        heros[i].show = false
      }
    }
    this.setData({
      heros: heros
    })
  }
})
