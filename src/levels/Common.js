(function() {
	Cyberythm.levels.Common = function(options){
		this.getRows = function(){
			if(!options || !options.rows){
				console.error('Cyberythm.levels.Common.getRows - missing options.rows, bad level object');
				return null;
			}
			return options.rows;
		};
		
		this.getCols = function(){
			if(!options || !options.cols){
				console.error('Cyberythm.levels.Common.getCols - missing options.cols, bad level object');
				return null;
			}
			return options.cols;
		};
	};
}());