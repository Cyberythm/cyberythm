(function() {
	Cyberythm.core.map.Level = function() {
		/*this.NORTH = 0;
		this.EAST = 1;
		this.SOUTH = 2;
		this.WEST = 3;*/
	
		var fields = [];
		var availableCommands = null;
		var level = null;
		
		var isValidCoordinates = function(x,y){
			if(level === null) {
				console.error("Cyberythm.core.map.Level.isValidCoordinates - level is null");
				return null; 
			}
			if(x < 1 || x > level.getRows()) { return false; }
			if(y < 1 || y > level.getCols()) { return false; }
			return true;
		};
		
		var getFieldPosition = function(x,y){
			if(level === null) {
				console.error("Cyberythm.core.map.Level.getFieldPosition - level is null");
				return null; 
			}
			var pos = 0;
			pos += (y - 1) * rows;
			pos += x;
			return pos;
		};
		
		this.init = (function(){
			level = new Cyberythm.levels.basic.Level001();
			return function(l){
				if(l !== undefined){
					level = new l();	
				}
			};
		}());
		
		this.getRows = function(){
			if(level === null) {
				console.error("Cyberythm.core.map.Level.getRows - level is null");
				return null; 
			}
			return level.getRows(); 
		};
		
		this.getCols = function(){
			if(level === null) {
				console.error("Cyberythm.core.map.Level.getCols - level is null");
				return null; 
			}
			return level.getCols();
		};
		
		this.getField = function(x,y){
			if(!isValidCoordinates(x,y)) { return null; }
			var field = fields[getFieldPosition(x,y)];
			
			return field === undefined ? null : field;
		};

		this.getAvaiableCommands = function(){
			return availableCommands;
		};
	};
}());