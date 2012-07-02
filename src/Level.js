function Level() {
	this.NORTH = 0;
	this.EAST = 1;
	this.SOUTH = 2;
	this.WEST = 3;

	var columnCount = 1;
	var rowCount = 1;
	var fields = [][];
	var availableCommands;
	var robotStartX = 0;
	var robotStartY = 0;
	var robotInitialDirection = this.NORTH;

	this.setColumnCount = function(count) {
		columnCount = count;
	}

	this.getColumnCount = function() {
		return columnCount;
	}

	this.setRowCount = function(count) {
		rowCount = count;
	}

	this.getRowCount = function() {
		return rowCount;
	}

	this.addField(x, y, field) {
		// TODO: type validation for parameters
		fields[x, y] = field;
	}

	this.getField(x, y) {
		return fields[x, y];
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