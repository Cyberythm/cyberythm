(function() {
	Cyberythm.levels.basic.Level001 = function() {
		var options = {
			rows: 5,
			cols : 3,
			heightMap : [],
			lightMap : []
		};
		
		options.heightMap[0] = [[1],[2],[1]];
		options.heightMap[1] = [[2],[2],[1]];
		options.heightMap[2] = [[2],[3],[1]];
		options.heightMap[3] = [[1],[3],[1]];
		options.heightMap[4] = [[0],[0],[0]];

		options.lightMap[0] = [[0],[1],[0]];
		options.lightMap[1] = [[0],[0],[0]];
		options.lightMap[2] = [[0],[0],[0]];
		options.lightMap[3] = [[0],[1],[1]];
		options.lightMap[4] = [[0],[0],[0]];
		
		return new Cyberythm.levels.Common(options);
	};
}());