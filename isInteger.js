var x = +prompt("Please provide input");
var checkNum = function(input) {
	if (typeof input === "number" && input % 1 ===0) {
		console.log("Thats an integer");
	} else {
		console.log("That is not an integer");
	}
}
checkNum(x);