/*

Simplify a fraction to its most simplified form without turning it into a decimal

EXAMPLE: 
	input: 2 / 4 
	
	output: 1 / 2
*/


(function () {
	
	var button = document.querySelector("button");
	
	var output = document.querySelector("#output");
	var textInput = document.querySelector("#input");

	
	button.addEventListener("click", function () {
		var input = document.querySelector("input").value.replace(/\s/g, "");

		if (input.length >= 3) {
			var splitFraction = input.split("/").map(function (current) {
				return Number(current);
			});
					
			
			// get the lower number of the fraction
			function smallestNum() {
				if (Number(splitFraction[0]) > Number(splitFraction[1])) {
					return splitFraction[1];
				} else {
					return splitFraction[0];
				}
			}
			
			// start a loop from 0 to the highest number. 
			// check if the number is valid
			
			function simplifyFraction() {
				var finalOutput = "";
				for (var i = 0; i <= Number(smallestNum()); i++) {
					if (splitFraction[0] % i === 0 && splitFraction[1] % i === 0) {
						finalOutput = "the new simplified fraction is " + (Number(splitFraction[0]) / i ) + " / " + (splitFraction[1] / i);
					}
				}
				
				return finalOutput
			}

			textInput.textContent = "your input is " +  input;
			output.textContent = simplifyFraction();
			}
	
	})
	
})();