function TwoDimensionalMatrix() {
	var matrix = [];
	var rowCount = 0;
	var columnCount = 1;

	this.setValue = function(x, y, value) {
		if (typeof(matrix[x] == "undefined")) {
			matrix[x] = [];
		}
		if (typeof(matrix[y] == "undefined")) {
			matrix[y] = [];
		}
		matrix[x][y] = value;
		columnCount = max(columnCount, x + 1);
		rowCount = max(rowCount, y + 1);
	}

	this.getValue(x, y) {
		return (typeof(matrix[x] == "undefined")) ? undefined : matrix[x][y];
	}
	
	this.getRowCount = function() {
		return rowCount;
	}
	
	this.getColumnCount = function() {
		return columnCount;
	}

}