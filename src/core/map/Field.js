(function() {	
	Cyberythm.core.map.Field = function() {
	    var level = 0;
	    var lightable = false;
	    var lit = false;
	
	    this.setLevel = function(value) {
	        level = value;
	    };
	
	    this.getLevel = function() {
	        return level;
	    };
	
	    this.setLightable = function(light) {
	        lightable = light;
	    };
	
	    this.isLightable = function() {
	        return lightable;
	    };
	
	    this.toggle = function() {
	        lit = !lit && lightable;
	    };
	
	    this.isLit = function() {
	        return lit;
	    };
	};
}());