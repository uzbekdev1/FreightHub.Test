
/*
	1) Write a function to transform array a to array b and print the elements of array b to the console.

	let a = [2, 4, 6, 8, 9, 15]
	let b = ['4', '16', '64']
*/

function calculateTransform(a) {
	var result=a.filter(val => val % 3 !== 0).map(val => (val*val).toString());

	console.log(result); 
}


/*
2) Write a function to calculate the cumulative TTL of the following set of requests. (The provided answer is correct and should not be modified. )

let requests = [
{requestId: 'poiax',  startedAt: 1489744808, ttl: 8},
{requestId: 'kdfhd',  startedAt: 1489744803, ttl: 3},
{requestId: 'uqwyet', startedAt: 1489744806, ttl: 12}, 
{requestId: 'qewaz',  startedAt: 1489744810, ttl: 1}
]

let cumulativeTtl = 15
*/

function calculateCumulative(requests, cumulative) {
 
      var  newRequests = requests.map(req => { 
	      	req['endedAt'] = req.startedAt + req.ttl;
	       	return req;
	  });
	 let start = requests.sort((a, b) => a.startedAt - b.startedAt)[0].startedAt;
	 let end = requests.sort((a, b) => b['endedAt'] - a['endedAt'])[0]['endedAt'];
	 let delta=end - start;

    console.log(delta); 
}

/*
	3) Read a text file containing a set of flat polygons represented as one polygon per line.
	 Each line contains a comma-separated list of side lengths (for example “3,4,8,5,7”). 
	 Write a function to classify the set of polygons into four mutually exclusive subsets: triangles, rectangles, squares, and everything else. 
	 The union of all four subsets should be the original set of polygons. 
	 All the sides of the polygons are connected and the angles between them are irrelevant.
	 Only consider the lengths. 
*/
function calculatePolys(file){

	 
	 let polys = file.split('\n').map(poly => poly.split(',').filter(side => parseInt(side) !== 0));
	 let triangs = polys.filter(poly => poly.length == 3);
	 let rects = polys.filter(poly => poly.length == 4);
	 let everythingElse = polys.filter(poly => poly.length != 4 && poly.length != 3);
	 let squares = rects.filter(poly => poly.every((el, ix, ar) => el == ar[0]));
	 
	 rects = rects.filter(poly => poly.some((el, ix, ar) => el != ar[0]));

	 console.warn('triangles');
	 console.log(triangs);
	 console.warn('rectangles');
	 console.log(rects);
	 console.warn('squares');
	 console.log(squares);
	 console.warn('everything else');
	 console.log(everythingElse); 
}