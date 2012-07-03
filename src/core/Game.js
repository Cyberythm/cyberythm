(function() {
	Cyberythm.core.Game = function() {
		var Level = new Cyberythm.core.map.Level();
		
		(function init(){
			console.info(Level.getRows() + ' - ' + Level.getCols());
		}());
	};	
}());