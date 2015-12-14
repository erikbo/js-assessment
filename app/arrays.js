exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
   if(arr.length == 0){
      return 0;
   }

   return arr.pop() + arraysAnswers.sum(arr);
  },

  remove : function(arr, item) {
    for(var i = arr.length - 1; i >= 0; i--){
      if(arr[i] === item) arr.splice(i, 1);
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    return arraysAnswers.remove(arr, item);
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.splice(arr.length-1, 1);
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    return arr.slice(0, index).concat([item]).concat(arr.slice(index, arr.length));
  },

  count : function(arr, item) {
    return arr.filter(function(compareItem){
      return compareItem === item;
    }).length;
  },

  duplicates : function(arr) {
    return arr.filter(function(current){
      return (arr.indexOf(current) !== arr.lastIndexOf(current));
    }).sort().reduce(function(prev, current){
      return prev.indexOf(current) >= 0 ? prev : prev.concat([current]);
    }, []);
  },

  square : function(arr) {
    return arr.map(function(current){
      return current * current;
    });
  },

  findAllOccurrences : function(arr, target) {
    return arr.reduce(function(prev, current, index){
      return current !== target ? prev : prev.concat([index]);
    }, []);
  }
};
