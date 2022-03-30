    var array = [4,1,9,5,0];
		var small = array[0];

		for (var i=1; i < array.length; i++) {
			if (array[i] < small) {
				small = array[i];   
			}
		}

		console.log(small);
