export const isIE = () => {
  if (!!window.ActiveXObject || "ActiveXObject" in window)
    return true;
  else
    return false;
};

if(isIE()){
  function Map() {
    this.elements = new Array();
    //获取Map元素个数
    this.size = function() {
      return this.elements.length;
    };
      //判断Map是否为空
      this.isEmpty = function() {
        return (this.elements.length < 1);
      };
      //删除Map所有元素
      this.clear = function() {
        this.elements = new Array();
      };
      //向Map中增加元素（key, value) 
      this.put = function(_key, _value) {
        if (this.containsKey(_key) == true) {
          if(this.containsValue(_value)){
            if(this.remove(_key) == true){
              this.elements.push( {
                key : _key,
                value : _value
              });
            }
          }else{
            this.elements.push( {
              key : _key,
              value : _value
            });
          }
        } else {
          this.elements.push( {
            key : _key,
            value : _value
          });
        }
      };
      //删除指定key的元素，成功返回true，失败返回false
      this.remove = function(_key) {
        var bln = false;
        try {
          for (var i = 0; i < this.elements.length; i++) {
            if (this.elements[i].key == _key){
              this.elements.splice(i, 1);
              return true;
            }
          }
        }catch(e){
          bln = false;
        }
        return bln;
      };


      //获取指定key的元素值value，失败返回null
      this.get = function(_key) {
        try{
          for (var i = 0; i < this.elements.length; i++) {
            if (this.elements[i].key == _key) {
              return this.elements[i].value;
            }
          }
        }catch(e) {
          return null;
        }
      };


      //获取指定索引的元素（使用element.key，element.value获取key和value），失败返回null
      this.element = function(_index) {
        if (_index < 0 || _index >= this.elements.length){
          return null;
        }
        return this.elements[_index];
      };


      //判断Map中是否含有指定key的元素
      this.containsKey = function(_key) {
        var bln = false;
        try {
          for (var i = 0; i < this.elements.length; i++) {
            if (this.elements[i].key == _key){
              bln = true;
            }
          }
        }catch(e) {
          bln = false;
        }
        return bln;
      };

      //判断Map中是否含有指定value的元素
      this.containsValue = function(_value) {
        var bln = false;
        try {
          for (var i = 0; i < this.elements.length; i++) {
            if (this.elements[i].value == _value){
              bln = true;
            }
          }
        }catch(e) {
          bln = false;
        }
        return bln;
      };

      //获取Map中所有key的数组（array）
      this.keys = function() {
        var arr = new Array();
        for (var i = 0; i < this.elements.length; i++) {
          arr.push(this.elements[i].key);
        }
        return arr;
      };


      //获取Map中所有value的数组（array）
      this.values = function() {
        var arr = new Array();
        for (var i = 0; i < this.elements.length; i++) {
          arr.push(this.elements[i].value);
        }
        return arr;
      };
  }
  function Set(){
    /**
               * 集合元素的容器，以对象来表示
               * @type {Object}
               */
    var items = {};/**
              * 检测集合内是否有某个元素
              * @param {Any} value  要检测的元素
              * @return {Boolean}    如果有，返回true
              */
    this.has = function(value) {
      // hasOwnProperty的问题在于
      // 它是一个方法，所以可能会被覆写
      return items.hasOwnProperty(value)
    };/**
                  * 给集合内添加某个元素
                  * @param {Any} value 要被添加的元素
                  * @return {Boolean}    添加成功返回True。
                  */
    this.add = function(value) {
      //先检测元素是否存在。
      if (!this.has(value)) {
        items[value] = value;
        return true;
      }
      //如果元素已存在则返回false
      return false;
    };/**
                  * 移除集合中某个元素
                  * @param {Any} value 要移除的元素
                  * @return {Boolean}    移除成功返回True。
                  */
    this.remove = function(value) {
      //先检测元素是否存在。
      if (this.has(value)) {
        delete items[value];
        return true;
      }
      //如果元素不存在，则删除失败返回false
      return false;
    };/**
                  * 清空集合
                  */
    this.clear = function() {
      this.items = {};
    };/**
                  * 返回集合长度，只可用于IE9及以上
                  * @return {Number} 集合长度
                  */
    this.size = function() {
      // Object.keys方法能将对象转化为数组
      // 只可用于IE9及以上，但很方便
      return Object.keys(items).length;
    }
    /**
                  * 返回集合长度，可用于所有浏览器
                  * @return {Number} 集合长度
                  */
    this.sizeLegacy = function() {
      var count = 0;
      for (var prop in items) {
        if (items.hasOwnProperty(prop)) {
          ++count;
        }
      }
      return count;
    }/**
                  * 返回集合转换的数组，只可用于IE9及以上
                  * @return {Array} 转换后的数组
                  */
    this.values = function() {
      return Object.keys(items);
    };

    /**
                  * 返回集合转换的数组，可用于所有浏览器
                  * @return {Array} 转换后的数组
                  */
    this.valuesLegacy = function() {
      var keys = [];
      for (var key in items) {
        keys.push(key)
      };
      return keys;
    };/**
                  * 返回两个集合的并集
                  * @param {Set} otherSet 要进行并集操作的集合
                  * @return {Set}     两个集合的并集
                  */
    this.union = function(otherSet) {
      //初始化一个新集合，用于表示并集。
      var unionSet = new Set();
      //将当前集合转换为数组，并依次添加进unionSet
      var values = this.values();
      for (var i = 0; i < values.length; i++) {
        unionSet.add(values[i]);
      }

      //将其它集合转换为数组，依次添加进unionSet。
      //循环中的add方法保证了不会有重复元素的出现
      values = otherSet.values();
      for (var i = 0; i < values.length; i++) {
        unionSet.add(values[i]);
      }

      return unionSet;
    };/**
                  * 返回两个集合的交集
                  * @param {Set} otherSet 要进行交集操作的集合
                  * @return {Set}     两个集合的交集
                  */
    this.intersection = function(otherSet) {
      //初始化一个新集合，用于表示交集。
      var interSectionSet = new Set();
      //将当前集合转换为数组
      var values = this.values();
      //遍历数组，如果另外一个集合也有该元素，则interSectionSet加入该元素。
      for (var i = 0; i < values.length; i++) {

        if (otherSet.has(values[i])) {
          interSectionSet.add(values[i])
        }
      }

      return interSectionSet;
    };/**
                  * 返回两个集合的差集
                  * @param {Set} otherSet 要进行差集操作的集合
                  * @return {Set}     两个集合的差集
                  */
    this.difference = function(otherSet) {
      //初始化一个新集合，用于表示差集。
      var differenceSet = new Set();
      //将当前集合转换为数组
      var values = this.values();
      //遍历数组，如果另外一个集合没有该元素，则differenceSet加入该元素。
      for (var i = 0; i < values.length; i++) {

        if (!otherSet.has(values[i])) {
          differenceSet.add(values[i])
        }
      }

      return differenceSet;
    };
    /**
                  * 判断该集合是否为传入集合的子集
                  * @param {Set} otherSet 传入的集合
                  * @return {Boolean}   是则返回True
                  */
    this.subset = function(otherSet) {
      // 第一个判定,如果该集合长度大于otherSet的长度
      // 则直接返回false
      if (this.size() > otherSet.size()) {
        return false;
      } else {
        // 将当前集合转换为数组
        var values = this.values();

        for (var i = 0; i < values.length; i++) {

          if (!otherSet.has(values[i])) {
            // 第二个判定。只要有一个元素不在otherSet中
            // 那么则可以直接判定不是子集，返回false
            return false;
          }
        }

        return true;
      }
    };
  }
}



function isIE() {
  if (!!window.ActiveXObject || "ActiveXObject" in window)
    return true;
  else
    return false;
}
if(isIE()){
  function Map(){
    this.elements = new Array();
    //获取Map元素个数
    this.size = function() {
      return this.elements.length;
    },
      //判断Map是否为空
      this.isEmpty = function() {
        return (this.elements.length < 1);
      },
      //删除Map所有元素
      this.clear = function() {
        this.elements = new Array();
      },
      //向Map中增加元素（key, value) 
      this.put = function(_key, _value) {
        if (this.containsKey(_key) == true) {
          if(this.containsValue(_value)){
            if(this.remove(_key) == true){
              this.elements.push( {
                key : _key,
                value : _value
              });
            }
          }else{
            this.elements.push( {
              key : _key,
              value : _value
            });
          }
        } else {
          this.elements.push( {
            key : _key,
            value : _value
          });
        }
      },
      //删除指定key的元素，成功返回true，失败返回false
      this.remove = function(_key) {
        var bln = false;
        try {
          for (i = 0; i < this.elements.length; i++) {
            if (this.elements[i].key == _key){
              this.elements.splice(i, 1);
              return true;
            }
          }
        }catch(e){
          bln = false;
        }
        return bln;
      },


      //获取指定key的元素值value，失败返回null
      this.get = function(_key) {
        try{
          for (i = 0; i < this.elements.length; i++) {
            if (this.elements[i].key == _key) {
              return this.elements[i].value;
            }
          }
        }catch(e) {
          return null;
        }
      },


      //获取指定索引的元素（使用element.key，element.value获取key和value），失败返回null
      this.element = function(_index) {
        if (_index < 0 || _index >= this.elements.length){
          return null;
        }
        return this.elements[_index];
      },


      //判断Map中是否含有指定key的元素
      this.containsKey = function(_key) {
        var bln = false;
        try {
          for (i = 0; i < this.elements.length; i++) {
            if (this.elements[i].key == _key){
              bln = true;
            }
          }
        }catch(e) {
          bln = false;
        }
        return bln;
      },

      //判断Map中是否含有指定value的元素
      this.containsValue = function(_value) {
        var bln = false;
        try {
          for (i = 0; i < this.elements.length; i++) {
            if (this.elements[i].value == _value){
              bln = true;
            }
          }
        }catch(e) {
          bln = false;
        }
        return bln;
      },

      //获取Map中所有key的数组（array）
      this.keys = function() {
        var arr = new Array();
        for (i = 0; i < this.elements.length; i++) {
          arr.push(this.elements[i].key);
        }
        return arr;
      },


      //获取Map中所有value的数组（array）
      this.values = function() {
        var arr = new Array();
        for (i = 0; i < this.elements.length; i++) {
          arr.push(this.elements[i].value);
        }
        return arr;
      };
  }
  function Set(){
    /**
               * 集合元素的容器，以对象来表示
               * @type {Object}
               */
    var items = {};/**
              * 检测集合内是否有某个元素
              * @param {Any} value  要检测的元素
              * @return {Boolean}    如果有，返回true
              */
    this.has = function(value) {
      // hasOwnProperty的问题在于
      // 它是一个方法，所以可能会被覆写
      return items.hasOwnProperty(value)
    };/**
                  * 给集合内添加某个元素
                  * @param {Any} value 要被添加的元素
                  * @return {Boolean}    添加成功返回True。
                  */
    this.add = function(value) {
      //先检测元素是否存在。
      if (!this.has(value)) {
        items[value] = value;
        return true;
      }
      //如果元素已存在则返回false
      return false;
    };/**
                  * 移除集合中某个元素
                  * @param {Any} value 要移除的元素
                  * @return {Boolean}    移除成功返回True。
                  */
    this.remove = function(value) {
      //先检测元素是否存在。
      if (this.has(value)) {
        delete items[value];
        return true;
      }
      //如果元素不存在，则删除失败返回false
      return false;
    };/**
                  * 清空集合
                  */
    this.clear = function() {
      this.items = {};
    };/**
                  * 返回集合长度，只可用于IE9及以上
                  * @return {Number} 集合长度
                  */
    this.size = function() {
      // Object.keys方法能将对象转化为数组
      // 只可用于IE9及以上，但很方便
      return Object.keys(items).length;
    }
    /**
                  * 返回集合长度，可用于所有浏览器
                  * @return {Number} 集合长度
                  */
    this.sizeLegacy = function() {
      var count = 0;
      for (var prop in items) {
        if (items.hasOwnProperty(prop)) {
          ++count;
        }
      }
      return count;
    }/**
                  * 返回集合转换的数组，只可用于IE9及以上
                  * @return {Array} 转换后的数组
                  */
    this.values = function() {
      return Object.keys(items);
    };

    /**
                  * 返回集合转换的数组，可用于所有浏览器
                  * @return {Array} 转换后的数组
                  */
    this.valuesLegacy = function() {
      var keys = [];
      for (var key in items) {
        keys.push(key)
      };
      return keys;
    };/**
                  * 返回两个集合的并集
                  * @param {Set} otherSet 要进行并集操作的集合
                  * @return {Set}     两个集合的并集
                  */
    this.union = function(otherSet) {
      //初始化一个新集合，用于表示并集。
      var unionSet = new Set();
      //将当前集合转换为数组，并依次添加进unionSet
      var values = this.values();
      for (var i = 0; i < values.length; i++) {
        unionSet.add(values[i]);
      }

      //将其它集合转换为数组，依次添加进unionSet。
      //循环中的add方法保证了不会有重复元素的出现
      values = otherSet.values();
      for (var i = 0; i < values.length; i++) {
        unionSet.add(values[i]);
      }

      return unionSet;
    };/**
                  * 返回两个集合的交集
                  * @param {Set} otherSet 要进行交集操作的集合
                  * @return {Set}     两个集合的交集
                  */
    this.intersection = function(otherSet) {
      //初始化一个新集合，用于表示交集。
      var interSectionSet = new Set();
      //将当前集合转换为数组
      var values = this.values();
      //遍历数组，如果另外一个集合也有该元素，则interSectionSet加入该元素。
      for (var i = 0; i < values.length; i++) {

        if (otherSet.has(values[i])) {
          interSectionSet.add(values[i])
        }
      }

      return interSectionSet;
    };/**
                  * 返回两个集合的差集
                  * @param {Set} otherSet 要进行差集操作的集合
                  * @return {Set}     两个集合的差集
                  */
    this.difference = function(otherSet) {
      //初始化一个新集合，用于表示差集。
      var differenceSet = new Set();
      //将当前集合转换为数组
      var values = this.values();
      //遍历数组，如果另外一个集合没有该元素，则differenceSet加入该元素。
      for (var i = 0; i < values.length; i++) {

        if (!otherSet.has(values[i])) {
          differenceSet.add(values[i])
        }
      }

      return differenceSet;
    };
    /**
                  * 判断该集合是否为传入集合的子集
                  * @param {Set} otherSet 传入的集合
                  * @return {Boolean}   是则返回True
                  */
    this.subset = function(otherSet) {
      // 第一个判定,如果该集合长度大于otherSet的长度
      // 则直接返回false
      if (this.size() > otherSet.size()) {
        return false;
      } else {
        // 将当前集合转换为数组
        var values = this.values();

        for (var i = 0; i < values.length; i++) {

          if (!otherSet.has(values[i])) {
            // 第二个判定。只要有一个元素不在otherSet中
            // 那么则可以直接判定不是子集，返回false
            return false;
          }
        }

        return true;
      }
    };
  }
}