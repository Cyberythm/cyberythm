function Level() {
	this.NORTH = 0;
	this.EAST = 1;
	this.SOUTH = 2;
	this.WEST = 3;

	var fields = new TwoDimensionalMatrix();
	var availableCommands;
	var robotStartX = 0;
	var robotStartY = 0;
	var robotInitialDirection = this.NORTH;

	this.addField(x, y, field) {
		fields.setValue(x, y, field);
	}

	this.getField(x, y) {
		return fields.getValue(x, y);
	}

	this.setAvailableCommands = function(commands) {
		availableCommands = commands;
	}

	this.getAvailableCommands = function() {
		return availableCommands;
	}

	this.setRobotStartX = function(startX) {
		robotStartX = startX;
	}

	this.getRobotStartX = function() {
		return robotStartX;
	}

	this.setRobotStartY = function(startY) {
		robotStartY = startY;
	}

	this.getRobotStartY = function() {
		return robotStartY;
	}

	this.setRobotInitialDirection = function(direction) {
		robotInitialDirection = direction;
	}

	this.getRobotInitialDirection = function() {
		return robotInitialDirection;
	}

	// TODO: Add storage/function space and other indicators as needed
	// TODO: add level persistence capability
}