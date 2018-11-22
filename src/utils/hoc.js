/*
 hoc
 */

function hoc(target) {
  target.prototype.getAge = (urlParameter) => {
    let _url = window.location.href.split('?')[1];
    if (_url !== undefined) {
      let _index;
      let _arr = _url.split('&');
      for (let i = 0, _len = _arr.length; i < _len; i++) {
        if (_arr[i].indexOf(urlParameter + '=') >= 0) {
          _index = i;
          break;
        } else {
          _index = -1;
        }
      }
      if (_index >= 0) {
        let _key = _arr[_index].split('=')[1];
        return _key;
      }
    }
  };
  target.prototype.debounce = function(func, wait=100) {
    let timeout;
    return function(event) {
      clearTimeout(timeout);
      event.persist && event.persist();
      timeout = setTimeout(()=>{
        func(event)
      }, wait);
    };
  };
  target.prototype.simplifiedChinese = function(num) {
    let part,newchar,tmpnewchar,perchar;
    for (let i = num.length - 1; i >= 0; i--) {
      num = num.replace(",", "")//替换num中的“,”
      num = num.replace(" ", "")//替换num中的空格
    }
    if (isNaN(num)) { //验证输入的字符是否为数字
      //alert("请检查小写金额是否正确");
      return;
    }
    //字符处理完毕后开始转换，采用前后两部分分别转换
    part = String(num).split(".");
    newchar = "";
    //小数点前进行转化
    for (let i = part[0].length - 1; i >= 0; i--) {
      if (part[0].length > 10) {
        //alert("位数过大，无法计算");
        return "";
      }//若数量超过拾亿单位，提示
      tmpnewchar = "";
      perchar = part[0].charAt(i);
      switch (perchar) {
        case "0":  tmpnewchar = "零" + tmpnewchar;break;
        case "1": tmpnewchar = "一" + tmpnewchar; break;
        case "2": tmpnewchar = "二" + tmpnewchar; break;
        case "3": tmpnewchar = "三" + tmpnewchar; break;
        case "4": tmpnewchar = "四" + tmpnewchar; break;
        case "5": tmpnewchar = "五" + tmpnewchar; break;
        case "6": tmpnewchar = "六" + tmpnewchar; break;
        case "7": tmpnewchar = "七" + tmpnewchar; break;
        case "8": tmpnewchar = "八" + tmpnewchar; break;
        case "9": tmpnewchar = "九" + tmpnewchar; break;
        default:
          return;
      }
      switch (part[0].length - i - 1) {
        case 0: tmpnewchar = tmpnewchar + ''; break;
        case 1: if (perchar !== 0) tmpnewchar = tmpnewchar + "十"; break;
        case 2: if (perchar !== 0) tmpnewchar = tmpnewchar + "百"; break;
        case 3: if (perchar !== 0) tmpnewchar = tmpnewchar + "千"; break;
        case 4: tmpnewchar = tmpnewchar + "万"; break;
        case 5: if (perchar !== 0) tmpnewchar = tmpnewchar + "十"; break;
        case 6: if (perchar !== 0) tmpnewchar = tmpnewchar + "百"; break;
        case 7: if (perchar !== 0) tmpnewchar = tmpnewchar + "千"; break;
        case 8: tmpnewchar = tmpnewchar + "亿"; break;
        case 9: tmpnewchar = tmpnewchar + "十"; break;
        default:
          return;
      }
      newchar = tmpnewchar + newchar;
    }
    //替换所有无用汉字，直到没有此类无用的数字为止
    while (newchar.search("零零") !== -1 || newchar.search("零亿") !== -1 || newchar.search("亿万") !== -1 || newchar.search("零万") !== -1) {
      newchar = newchar.replace("零亿", "亿");
      newchar = newchar.replace("亿万", "亿");
      newchar = newchar.replace("零万", "万");
      newchar = newchar.replace("零零", "零");
    }
    //替换以“一十”开头的，为“十”
    if (newchar.indexOf("一十") === 0) {
      newchar = newchar.substr(1);
    }
    //替换以“零”结尾的，为“”
    if (newchar.lastIndexOf("零") === newchar.length - 1) {
      newchar = newchar.substr(0, newchar.length - 1);
    }
    return newchar;
  };
  return target;
}

export default hoc;