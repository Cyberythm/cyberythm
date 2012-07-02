function Field() {
    var groundLevel = 0;
    var lightable = false;
    var lit = false;

    this.setGroundLevel = function(level) {
        groundLevel = level;
    }

    this.getGroundLevel = function() {
        return groundLevel;
    }

    this.setLightable = function(light) {
        lightable = light;
    }

    this.isLightable = function() {
        return lightable;
    }

    this.toggle = function() {
        lit = ((!lit) && (lightable));
    }

    this.isLit = function() {
        return (lit && lightable);
    }
}