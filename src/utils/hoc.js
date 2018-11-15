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
  return target;
}

export default hoc;