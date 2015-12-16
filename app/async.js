exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function(resolve, reject){
    	resolve(value);
    });
  },

  manipulateRemoteData : function(url) {
  	return new Promise((resolve, reject) => {
  		var data = $.get(url).done((elements) =>{
  			arr = elements.people.map((element) =>{
  				return element.name;
  			}).sort();
  			resolve(arr);
  		});
  	});
  }
};
