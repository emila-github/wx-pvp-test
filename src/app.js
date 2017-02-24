/**
 * WeChat API 模块
 * @type {Object}
 * 用于将微信官方`API`封装为`Promise`方式
 * > 小程序支持以`CommonJS`规范组织代码结构
 */
const wechat = require('./utils/wechat.js')

/**
 * Douban API 模块
 * @type {Object}
 */
const api = require('./utils/api.js')

App({
  /**
   * Global shared
   * 可以定义任何成员，用于在整个应用中共享
   */
  data: {
    name: '王者荣耀 17173',
    version: '1.0.0'
  },
  globalData: {
    officeImgRoot: 'https://game.gtimg.cn/images/yxzj/ingame/index_heros/', // 官方图片根路径
    herosConfig: [
      {
        'range': '射手',
        'title': '黄忠',
        'href': 'http://news.17173.com/z/pvp/yxtj/hz/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/KIveqjblioodhkf.png',
        'keyword': '黄忠'
      },
      {
        id: 1,
        'range': '法师',
        'title': '诸葛亮',
        'href': 'http://news.17173.com/z/pvp/yxtj/zgl/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/IJEgjsblhhrvwlw.png',
        'keyword': '诸葛亮'
      },
      {
        id: 1,
        'range': '战士',
        'title': '哪吒',
        'href': 'http://news.17173.com/z/pvp/yxtj/ezha/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/cjeINtblgCEtmfB.png',
        'keyword': '哪吒'
      },
      {
        id: 1,
        'range': '坦克',
        'title': '张飞',
        'href': 'http://news.17173.com/z/pvp/yxtj/zf/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/AOnIhJbkpgcsfse.png',
        'keyword': '张飞'
      },
      {
        id: 1,
        'range': '坦克',
        'title': '项羽',
        'href': 'http://news.17173.com/z/pvp/yxtj/xy/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/uPbzKWbkpfEmByn.png',
        'keyword': '项羽'
      },
      {
        id: 1,
        'range': '坦克',
        'title': '牛魔',
        'href': 'http://news.17173.com/z/pvp/yxtj/nm/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/VSKRzQbkpgbsCDg.png',
        'keyword': '牛魔'
      },
      {
        id: 1,
        'range': '坦克',
        'title': '钟无艳',
        'href': 'http://news.17173.com/z/pvp/yxtj/zwy/index.shtml',
        'src': 'http://i3.shouyou.itc.cn/2016/wzry/xinban/yxtj/zhongwuyan.png',
        'keyword': '钟无艳'
      },
      {
        id: 1,
        'range': '坦克',
        'title': '白起',
        'href': 'http://news.17173.com/z/pvp/yxtj/baiqi/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/IopDQQbkpfEbtiD.png',
        'keyword': ' 白起'
      },
      {
        id: 1,
        'range': '坦克',
        'title': '程咬金',
        'href': 'http://news.17173.com/z/pvp/yxtj/cyj/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/FwPYWtbkpfDrtpt.png',
        'keyword': ' 程咬金'
      },
      {
        id: 1,
        'range': '坦克',
        'title': '刘禅',
        'href': 'http://news.17173.com/z/pvp/yxtj/ls/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/vCwOAVbkpfCtrnm.png',
        'keyword': '刘禅 '
      },
      {
        id: 1,
        'range': '坦克',
        'title': '廉颇',
        'href': 'http://news.17173.com/z/pvp/yxtj/lp/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/nKPrAubkpfzrtxx.png',
        'keyword': '廉颇 '
      },
      {
        id: 1,
        'range': '战士',
        'title': '花木兰',
        'href': 'http://news.17173.com/z/pvp/yxtj/hml/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/cSHyDXbkpgcojrw.png',
        'keyword': '花木兰'
      },
      {
        'range': '战士',
        'title': '吕布',
        'href': 'http://news.17173.com/z/pvp/yxtj/lvbu/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/jIXpVkbkpgciFjv.png',
        'keyword': '吕布'
      },
      {
        'range': '战士',
        'title': '孙悟空',
        'href': 'http://news.17173.com/z/pvp/yxtj/swk/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/IYEwmmbkpgbAjub.png',
        'keyword': '孙悟空'
      },
      {
        'range': '战士',
        'title': '曹操',
        'href': 'http://news.17173.com/z/pvp/yxtj/cc/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/uyvaWNbkpgblCFp.png',
        'keyword': '曹操'
      },
      {
        'range': '战士',
        'title': '亚瑟',
        'href': 'http://news.17173.com/z/pvp/yxtj/ys/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/GnhjeVbkpfEBliy.png',
        'keyword': '亚瑟'
      },
      {
        'range': '战士',
        'title': '赵云',
        'href': 'http://news.17173.com/z/pvp/yxtj/zy/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/ojahLgbkpfExBqt.png',
        'keyword': '赵云'
      },
      {
        'range': '战士',
        'title': '典韦',
        'href': 'http://news.17173.com/z/pvp/yxtj/dw/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/OyPMxlbkpfDacxa.png',
        'keyword': '典韦'
      },
      {
        'range': '战士',
        'title': '老夫子',
        'href': 'http://news.17173.com/z/pvp/yxtj/lfz/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/YIScdbbkpfBaecD.png',
        'keyword': '老夫子'
      },
      {
        'range': '战士',
        'title': '达摩',
        'href': 'http://news.17173.com/z/pvp/yxtj/dm/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/yrUiwebkpfzjjey.png',
        'keyword': '达摩'
      },
      {
        'range': '刺客',
        'title': '韩信',
        'href': 'http://news.17173.com/z/pvp/yxtj/hx/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/swetNKbkpfDmyeq.png',
        'keyword': '韩信'
      },
      {
        'range': '刺客',
        'title': '李白',
        'href': 'http://news.17173.com/z/pvp/yxtj/lb/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/LQpErgbkpfwaoqx.png',
        'keyword': '李白'
      },
      {
        'range': '刺客',
        'title': '娜可露露',
        'href': 'http://news.17173.com/z/pvp/yxtj/nkll/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/kgyPwabkpgcDBek.png',
        'keyword': '娜可露露'
      },
      {
        'range': '刺客',
        'title': '荆轲',
        'href': 'http://news.17173.com/z/pvp/yxtj/jk/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/rNCsvhbkpfEfplb.png',
        'keyword': '荆轲'
      },
      {
        'range': '刺客',
        'title': '宫本武藏',
        'href': 'http://news.17173.com/z/pvp/yxtj/gbwz/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/cKqLiebkpgbihhE.png',
        'keyword': '宫本武藏'
      },
      {
        'range': '刺客',
        'title': '兰陵王',
        'href': 'http://news.17173.com/z/pvp/yxtj/llw/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/buSKcHbkpgczAED.png',
        'keyword': '兰陵王'
      },
      {
        'range': '法师',
        'title': '妲己',
        'href': 'http://news.17173.com/z/pvp/yxtj/dj/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/QyVkQpbkpfDDwva.png',
        'keyword': '妲己'
      },
      {
        'range': '法师',
        'title': '安琪拉',
        'href': 'http://news.17173.com/z/pvp/yxtj/aql/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/ILnFbPbkpfyobhu.png',
        'keyword': '安琪拉'
      },
      {
        'range': '法师',
        'title': '小乔',
        'href': 'http://news.17173.com/z/pvp/yxtj/xq/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/RSifcubkpfDhuFB.png',
        'keyword': '小乔'
      },
      {
        'range': '法师',
        'title': '嬴政',
        'href': 'http://news.17173.com/z/pvp/yxtj/yz/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/FTxJjhbkpfEunct.png',
        'keyword': '嬴政'
      },
      {
        'range': '法师',
        'title': '甄姬',
        'href': 'http://news.17173.com/z/pvp/yxtj/zj/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/GnqbAmbkpfAjrFw.png',
        'keyword': '甄姬'
      },
      {
        'range': '法师',
        'title': '钟馗',
        'href': 'http://news.17173.com/z/pvp/yxtj/zk/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/sPFlprbkpgdbmjt.png',
        'keyword': '钟馗'
      },
      {
        'range': '法师',
        'title': '扁鹊',
        'href': 'http://news.17173.com/z/pvp/yxtj/bianque/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/pbxfjpbkpfDvFdC.png',
        'keyword': '扁鹊'
      },
      {
        'range': '法师',
        'title': '芈月',
        'href': 'http://news.17173.com/z/pvp/yxtj/my/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/XKohvmbkpgbEgjd.png',
        'keyword': '芈月'
      },
      {
        'range': '法师',
        'title': '貂蝉',
        'href': 'http://news.17173.com/z/pvp/yxtj/dc/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/YCyNYcbkpgccypr.png',
        'keyword': '貂蝉'
      },
      {
        'range': '法师',
        'title': '高渐离',
        'href': 'http://news.17173.com/z/pvp/yxtj/gjl/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/YIKdCWbkpfCBtuv.png',
        'keyword': '高渐离'
      },
      {
        'range': '法师',
        'title': '姜子牙',
        'href': 'http://news.17173.com/z/pvp/yxtj/jzy/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/WQsmVDbkpfyFBuc.png',
        'keyword': '姜子牙'
      },
      {
        'range': '法师',
        'title': '露娜',
        'href': 'http://news.17173.com/z/pvp/yxtj/ln/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/oCQAUYbkpfEEFqd.png',
        'keyword': '露娜'
      },
      {
        'range': '法师',
        'title': '墨子',
        'href': 'http://news.17173.com/z/pvp/yxtj/mz/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/UhiOSlbkpfDzrdi.png',
        'keyword': '墨子'
      },
      {
        'range': '法师',
        'title': '王昭君',
        'href': 'http://news.17173.com/z/pvp/yxtj/wzj/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/hFuifvbkpfDdveb.png',
        'keyword': '王昭君'
      },
      {
        'range': '法师',
        'title': '武则天',
        'href': 'http://news.17173.com/z/pvp/yxtj/wzt/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/rlpYRVbkpfAogaE.png',
        'keyword': '武则天'
      },
      {
        'range': '法师',
        'title': '张良',
        'href': 'http://news.17173.com/z/pvp/yxtj/zl/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/hhhTbtbkpgbenaF.png',
        'keyword': '张良'
      },
      {
        'range': '法师',
        'title': '周瑜',
        'href': 'http://news.17173.com/z/pvp/yxtj/zhouyu/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/tQGtQPbkpgbpczy.png',
        'keyword': '周瑜'
      },
      {
        'range': '射手',
        'title': '后羿',
        'href': 'http://news.17173.com/z/pvp/yxtj/hy/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/yGDKeabkpgbwwiy.png',
        'keyword': '后羿'
      },
      {
        'range': '射手',
        'title': '鲁班七号',
        'href': 'http://news.17173.com/z/pvp/yxtj/lbqh/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/JOxmEbbkpfAelsp.png',
        'keyword': '鲁班七号'
      },
      {
        'range': '射手',
        'title': '狄仁杰',
        'href': 'http://news.17173.com/z/pvp/yxtj/drj/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/ylKKoQbkpfEqhsf.png',
        'keyword': '狄仁杰'
      },
      {
        'range': '射手',
        'title': '刘备',
        'href': 'http://news.17173.com/z/pvp/yxtj/2lb/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/anfehRbkpgcvxAe.png',
        'keyword': '刘备'
      },
      {
        'range': '射手',
        'title': '孙尚香',
        'href': 'http://news.17173.com/z/pvp/yxtj/ssx/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/JiEyFXbkpfEjfEy.png',
        'keyword': '孙尚香'
      },
      {
        'range': '辅助',
        'title': '孙膑',
        'href': 'http://news.17173.com/z/pvp/yxtj/sb/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/CNgXeSbkpfAyavz.png',
        'keyword': '孙膑'
      },
      {
        'range': '辅助',
        'title': '庄周',
        'href': 'http://news.17173.com/z/pvp/yxtj/zz/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/DxUfkgbkpfACeEm.png',
        'keyword': '庄周'
      },
      {
        'range': '射手',
        'title': '虞姬',
        'href': 'http://news.17173.com/z/pvp/yxtj/yuij/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/blwNbRbkuxdyBbB.png',
        'keyword': '虞姬'
      },
      {
        'range': '法师',
        'title': '不知火舞',
        'href': 'http://news.17173.com/z/pvp/yxtj/bzhw/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/fWuqOPbkuxnkazl.png',
        'keyword': '不知火舞'
      },
      {
        'range': '射手',
        'title': '李元芳',
        'href': 'http://news.17173.com/z/pvp/yxtj/lyf/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/UhImqgbkuFiFioz.png',
        'keyword': '李元芳'
      },
      {
        'range': '战士',
        'title': '关羽',
        'href': 'http://news.17173.com/z/pvp/yxtj/gy/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/hLUbqObkwqongji.png',
        'keyword': '关羽'
      },
      {
        'range': '辅助',
        'title': '蔡文姬',
        'href': 'http://news.17173.com/z/pvp/yxtj/cwj/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/QBJtgVbkxpestqF.png',
        'keyword': '蔡文姬'
      },
      {
        'range': '战士',
        'title': '夏侯惇',
        'href': 'http://news.17173.com/z/pvp/yxtj/xhd/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/YLkkmdblgCEBAhA.png',
        'keyword': '夏侯惇'
      },
      {
        'range': '坦克',
        'title': '雅典娜',
        'href': 'http://news.17173.com/z/pvp/yxtj/ydn/index.shtml',
        'src': 'http://i3.17173cdn.com/2fhnvk/YWxqaGBf/cms3/PRLBABblgCEAjvp.png',
        'keyword': '雅典娜'
      },
      {
        'range': '坦克',
        'title': '刘邦',
        'href': 'http://news.17173.com/z/pvp/yxtj/liubang/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/pPBJTLbkuxrpwfa.png',
        'keyword': '刘邦'
      },
      {
        'range': '射手',
        'title': '马可波罗',
        'href': 'http://news.17173.com/z/pvp/yxtj/mkbl/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/eLEwdjblgCFccqw.png',
        'keyword': '马可波罗'
      },
      {
        'range': '战士',
        'title': '橘右京',
        'href': 'http://news.17173.com/z/pvp/yxtj/jyj/index.shtml',
        'src': 'http://i2.17173cdn.com/2fhnvk/YWxqaGBf/cms3/JEHvITblgCEzCkd.png',
        'keyword': '橘右京'
      },
      {
        'range': '射手',
        'title': '成吉思汗',
        'href': 'http://news.17173.com/z/pvp/yxtj/cjsh/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/mEfTkvblgCEuihe.png',
        'keyword': '成吉思汗'
      },
      {
        id: 1,
        'range': '战士',
        'title': '杨戬',
        'href': 'http://news.17173.com/z/pvp/yxtj/yangjian/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/mazUntblgCErpEa.png',
        'keyword': '杨戬'
      },
      {
        id: 1,
        'range': '辅助',
        'title': '太乙真人',
        'href': 'http://news.17173.com/z/pvp/yxtj/tyzr/index.shtml',
        'src': 'http://i1.17173cdn.com/2fhnvk/YWxqaGBf/cms3/ugOWPlblgCEtzqC.png',
        'keyword': '太乙真人'
      }
    ]
  },
  /**
   * WeChat API
   */
  wechat: wechat,

  /**
   * API
   */
  api: api,

  /**
   * 生命周期函数--监听小程序初始化
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch () {
    console.log(' ========== Application is launched ========== ')
    this.fetchHeros()
  },
  /**
   * 生命周期函数--监听小程序显示
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow () {
    console.log(' ========== Application is showed ========== ')
  },
  /**
   * 生命周期函数--监听小程序隐藏
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide () {
    console.log(' ========== Application is hid ========== ')
  },
  fetchHeros () {
    let that = this
    api.fetchHeros().then(function (res) {
      console.log('fetchHeros===', res.data)
      let heros = res.data
      for (let i = 0, len = heros.length; i < len; i++) {
        heros[i].show = true
        heros[i].src = that.globalData.officeImgRoot + heros[i]['ename'] + '.jpg'
        heros[i].offId = heros[i]['ename']
      }
      that.globalData.officeHeros = heros
    })
  }
})
