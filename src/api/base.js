import { Config } from './config.js'
import $ from 'jquery'

class Base {
  constructor() {
    this.headers = Config.headers;
  }
  /**
   * 发送http请求
   * @param  {[type]} param [参数列表]
   * @return {[type]}       [description]
   */
  request(param) {
     let headers = this.headers;
     let url = "/api" + param.url;
     if(!param.type){
       param.type = "POST";
     }
    return new Promise( (resolve, reject) => {
       $.ajax({
        url: url,
        headers: headers,
        type:param.type,
        data:param.data,
        dataType: "json",
        success: (res) => {
          if(res.status == 90001){
            resolve(res);
          }else{
            reject();
          }
        },
        fail: (err) => {
          console.log(err);
          reject();
        },
        err: () => {
          console.log(9090)
        }
       })
     })
  }
}

export { Base };

