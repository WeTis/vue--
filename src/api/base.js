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
        timeout: 2000,
        success: (res) => {
          if(res.status == 900000){
            resolve(res);
          }else{
            reject(res);
          }
        },
        fail: (err) => {
          console.log(err);
          reject(err);
        },
        error: () => {
          reject("timeOut");
          console.log("chaoshi");
        }
       })
     })
  }
}

export { Base };

