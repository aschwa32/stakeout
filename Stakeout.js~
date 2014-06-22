var housesOptimal = new Array();
var planner = function(houses){
	for(var a in houses){
		if (houses[a] < 0) return "Negative numbers are not allowed";
		if (!(houses[a] === parseInt(houses[a]))) return "All values must be integers";
		housesOptimal[a] = -1;
	}
	return plannerRec(houses, 0);
}
function plannerRec(houses, houseIndex){
	if(houses.length==0) return 0;
	if(houses.length==1) return houses[0];
	if(housesOptimal[houseIndex]==-1){
		var takeItSet = houses[0] + planner(houses.slice(2), houseIndex + 2);
		var dontTakeItSet = planner(houses.slice(1), houseIndex + 1);
		housesOptimal[houseIndex] = (takeItSet > dontTakeItSet ? takeItSet : dontTakeItSet);
	}
	return housesOptimal[houseIndex];
}
module.exports.planner = planner;
