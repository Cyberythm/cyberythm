(function() {	
	Cyberythm.core.map.Field = function(lev, lig, l) {
	    var level = 0;
	    var lightable = false;
	    var lit = false;
	
	    (function setup(){
	    	if(lev !== undefined){ level = lev; }
	    	if(lig !== undefined){ lightable = lig; }
	    	if(l !== undefined){ lit = l; }
	    }());
	    
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