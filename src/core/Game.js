(function() {
	Cyberythm.core.Game = function() {
		var level = new Cyberythm.core.map.Level();
		var renderer = new Cyberythm.core.ui.Renderer();
		
		renderer.go(level);
	};	
}());