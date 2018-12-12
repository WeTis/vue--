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
  getGameData(difficultyLevel,pkLogId = 0) {
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
  test(difficultyLevel,pkLogId = 0) {
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
  
  /**
   * 获取下一关数据
   * @return {[type]} [description]
   */
  getNextIdiomList() {
    let param = {
      url: "/customerIndex/game/idiom/getNextIdiomList",
      data: {},
    }

    return this.request(param);
  }
  
  /**
   * 设置游戏结束
   */
  setFinishGame() {
    let param = {
      url: "/customerIndex/game/idiom/userFinishGame",
      data: {

      }
    }

    return this.request(param);
  }
  
  /**
   * 获取奖励金额
   * @return {[type]} [description]
   */
  getReward() {
    let param = {
      url: "/customerIndex/game/idiom/studentReceiveReward",
      data: {}
    }

    return this.request(param);
  }
  
  /**
   * 获取pk列表
   * @param  {[type]} difficultyLevel [难度等级 1 2 3]
   * @param  {[type]} startIndex      [页码 每页十条数据]
   * @return {[type]}                 [description]
   */
  getPKList(difficultyLevel,startIndex){
    let param = {
      url: "/customerIndex/game/idiom/userGetPkList",
      data: {
        difficultyLevel: difficultyLevel,
        startIndex: startIndex
      }
    }

    return this.request(param);
  }
  
  /**
   * 获取用户历史对手列表
   * @return {[type]} [description]
   */
  getHistoryMatchList() {
    let param={
      url: "/customerIndex/game/idiom/getUserHistoryMatchList",
      data: {

      }
    }

    this.request(param);
  }
  
  /**
   * 邀请对手参加比赛
   * @param {[type]} difficultyLevel [难度 1 2 3]
   * @param {[type]} matchId         [对手ID]
   */
  setInviteJoinGame(difficultyLevel,matchId) {
    let param = {
      url: "/customerIndex/game/idiom/inviteMatchJoinGame",
      data: {
        difficultyLevel: difficultyLevel,
        matchId: matchId
      }
    }

    return this.request(param);
  }
  
  /**
   * 通过手机号添加好友
   * @param  {[type]} phoneNumber [手机号]
   * @return {[type]}             [description]
   */
  searchGoodFriends(phoneNumber){
    let param = {
      url: "/customerIndex/game/idiom/searchMatchByPhone",
      data: {
        phoneNumber: phoneNumber
      }
    }

    return this.request(param);
  }
  
  /**
   * 获取用户排行榜
   * @return {[type]} [description]
   */
  getUserRank(){
    let param={
      url: "/customerIndex/game/idiom/userGetRank",
      data: {}
    }

    return this.request(param);
  }
  
  /**
   * 获取用户昨日排行
   * @return {[type]} [description]
   */
  getUserYesterdayRank(){
    let param={
      url: "/customerIndex/game/idiom/userGetYesterdayRank",
      data: {}
    }

    return this.request(param);
  }
  /**
   * 获取用户奖励记录表
   * @return {[type]} [description]
   */
  getUserRewardList(){
    let param={
      url: "/customerIndex/game/idiom/getUserRewardLog",
      data: {}
    }

    return this.request(param);
  }
  


}

export { Api };