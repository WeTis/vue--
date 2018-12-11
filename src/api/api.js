import { Base } from './base.js'

class Api extends Base {
  constructor() {
    super();
  }
  /**
   * 获取游戏开始数据
   * @param  {[type]} difficultyLevel [游戏等级]
   * @param  {Number} pkLogId         [是否是单机 0 单机 其他表示pk会传入pkid]
   * @return {[type]}                 [promise]
   */
  getGameDataS(difficultyLevel,pkLogId = 0) {
    // 配置参数
    let param = {
      url: '/customerIndex/game/idiom/studentStartGame',
      data: {
        difficultyLevel: difficultyLevel,
        pkLogId: pkLogId
      }
    }
    return this.request(param);
  }
  
  /**
   * 测试 需要修改请求地址
   * @param  {[type]} difficultyLevel [description]
   * @param  {Number} pkLogId         [description]
   * @return {[type]}                 [description]
   */
  getGameData(difficultyLevel,pkLogId = 0) {
    // 配置参数
    let param = {
      url: '/lib/islogined.php',
      type: 'GET',
      data: {
        difficultyLevel: difficultyLevel,
        pkLogId: pkLogId
      }
    }
    return this.request(param);
  }
}

export { Api };