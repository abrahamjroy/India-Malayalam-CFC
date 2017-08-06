$(document).ready(function() {
	// hide results template and error alerts on initial page load
	$("#results").hide();
	$(".alert").hide();

	// prevent ability to type negative numbers or spaces in input fields
	$("[type='number']").bind("keydown", function(e) {
		var code = e.keyCode || e.which;

		if (code == 189 || code == 173 || code == 32 || code == 69 || code == 109) {
			return false;
		}
	});

	$("#calculate-btn").on("click", function() {
		var calculateAndDisplayScore = function() {
			window.scrollTo(0, 400);
			// hide form template if all inputs are completed
			$("#form").hide();

			// get input values
			var electricInput = document.getElementById("electric").value;
			var gasInput = document.getElementById("gas").value;
			var oilInput = document.getElementById("oil").value;
			var carInput = document.getElementById("car").value;
			var flights4LessInput = document.getElementById("flights-4-less").value;
			var flights4MoreInput = document.getElementById("flights-4-more").value;
			
			// set variables for calculating each component score
			var electricScore = "";
			var gasScore = "";
			var oilScore = "";
			var carScore = "";
			var flights4LessScore = "";
			var flights4MoreScore = "";
			var newspaperScore = "";
			var alumTinScore = "";

			var totalScore = "";

			if (document.getElementById("optionsRadio1").checked) {
				newspaperScore = 0;
			} else {
				newspaperScore = 184;
			}
			// console.log("Newspaper score is: " + newspaperScore);

			if (document.getElementById("optionsRadio3").checked) {
				alumTinScore = 0;
			} else {
				alumTinScore = 166;
			}
			// console.log("Aluminum and tin score is: " + alumTinScore);

			if (electricInput === 0 || electricInput === "undefined") {
				electricScore = 0;
			} else {
				electricScore = (electricInput * 105)/64.28;
			}
			// console.log("Electric score is: " + electricScore);

			if (gasInput === 0 || gasInput === "undefined") {
				gasScore = 0;
			} else {
				gasScore = (gasInput * 105)/64.28;
			}
			// console.log("Gas score is: " + gasScore);

			if (oilInput === 0 || oilInput === "undefined") {
				oilScore = 0;
			} else {
				oilScore = (oilInput * 113)/64.28;
			}
			// console.log("Oil score is: " + oilScore);

			if (carInputP === 0 || carInputP === "undefined") {
				carScoreP = 0;
			} else {
				carScoreP = (carInputP/0.621371) * 0.79;
			}
			// console.log("Petrol Car score is: " + carScoreP);
				if (carInputD === 0 || carInputD === "undefined") {
				carScoreD = 0;
			} else {
				carScoreD = (carInputD/0.640273) * 0.79;
			}
			// console.log("Diesel Car score is: " + carScoreD);
				if (carInputC === 0 || carInputC === "undefined") {
				carScoreC = 0;
			} else {
				carScoreC = (carInputC/0.680015) * 0.79;
			}
			// console.log("CNG Car score is: " + carScoreC);
			if (bikeInput === 0 || bikeInput === "undefined") {
				bikeScore = 0;
			} else {
				bikeScore = (bikeInput/0.11955) * 0.79;
			}
			// console.log("bike score is: " + bikeScore);

			if (trainInput === 0 || trainInput === "undefined") {
				trainScore = 0;
			} else {
				trainScore = (trainInput/0.101283) * 0.79;
			}
			// console.log("train score is: " + trainScore);
		
			if (flights4LessInput === 0 || flights4LessInput === "undefined") {
				flights4LessScore = 0;
			} else {
				flights4LessScore = flights4LessInput * 1100;
			}
			// console.log("Flights taken 4 hours or less score is: " + flights4LessScore);

			if (flights4MoreInput === 0 || flights4MoreInput === "undefined") {
				flights4MoreScore = 0;
			} else {
				flights4MoreScore = flights4MoreInput * 4400;
			}
			// console.log("Flights taken 4 hours or more score is: " + flights4MoreScore);

			// calculate scores for each category
			var energyScore = electricScore + gasScore + oilScore;
			var travelScore = carScore	+ flights4LessScore + flights4MoreScore;
			var wasteScore = newspaperScore + alumTinScore;

			// calculate total score and round to nearest whole integer
			totalScore = Math.round(energyScore + travelScore + wasteScore);
			var formattedScore = totalScore.toLocaleString("en");
			// console.log(totalScore);

			document.getElementById("score").innerHTML = formattedScore;

			// display results
			$("#results").show();

			// refresh page when recalculate button clicked
			$("#recalculate-btn").on("click", function() {
				location.reload();
				window.scrollTo(0, 0);
			});
		}

		// check selection made for recycling newspaper before calculating and displaying score
		var recycleNewspaperSelectionYes = document.getElementById("optionsRadio1").checked;
		var recycleNewspaperSelectionNo = document.getElementById("optionsRadio2").checked;
		var recycleAlumTinSelectionYes = document.getElementById("optionsRadio3").checked;
		var recycleAlumTinSelectionNo = document.getElementById("optionsRadio4").checked;

		if (recycleNewspaperSelectionYes == false && recycleNewspaperSelectionNo == false || recycleAlumTinSelectionYes == false && recycleAlumTinSelectionNo == false) {
			if (recycleNewspaperSelectionYes == false && recycleNewspaperSelectionNo == false) {
				$("#newspaper-alert").show();
			} else {
				$("#newspaper-alert").hide();
			}

			if (recycleAlumTinSelectionYes == false && recycleAlumTinSelectionNo == false) {
				$("#alum-tin-alert").show();
			} else {
				$("#alum-tin-alert").hide();
			}
		} else {
			calculateAndDisplayScore();
		}
	});	
});
