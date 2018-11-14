import { fetch as fetchPolyfill } from 'whatwg-fetch'
import 'es6-promise'
const urlCom = 'http://sdx.hefupb.com/';

export default {
  fetchPost(url, params = {}) {
    let result = '';
    let item;
    for(item in params) {
      result += '&' + item + '=' + encodeURIComponent(params[item]);
    }
    if(result) {
      result = result.slice(1);
    }
    return new Promise((resolve, reject) => {
      fetchPolyfill(urlCom + url, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: result,
      }).then((response) => {
        return response.json();
      }).then((data) => {
        resolve(data);
      }).catch(error => {
        reject(error);
      })
    })
  }
}