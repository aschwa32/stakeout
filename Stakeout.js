var planner = function(houses){
	if(houses.length==0) return 0;
	for(var a in houses){
		if (houses[a] < 0) return "Negative numbers are not allowed";
	}
	if(houses.length==1) return houses[0];
	var takeItSet = houses[0] + planner(houses.slice(2));
	var dontTakeItSet = planner(houses.slice(1));
	return (takeItSet > dontTakeItSet ? takeItSet : dontTakeItSet);
}
module.exports.planner = planner;
