(function() {
	Cyberythm.levels.Common = function(options){
		this.getRows = function(){
			if(!options || !options.rows){ return null; }
			return options.rows;
		};
		
		this.getCols = function(){
			if(!options || !options.cols){ return null; }
			return options.cols;
		};
		
		this.getHeight = function(x,y){ 
			if(!options || !options.heightMap){ return null; }
			return options.heightMap[x][y];
		};
		
		this.isLight = function(x,y){ 
			if(!options || !options.lightMap){ return null; }
			return options.lightMap[x][y];
		};
	};
}());