var header = document.getElementsByClassName("body");
var input = document.getElementById("slice");
var numbers = Array.from(document.querySelectorAll("button"));
numbers.forEach(function (bts) {
	bts.addEventListener("click", function () {
		if (input.innerHTML == "0") {
			input.innerHTML = "";
		}
		else if (bts.innerHTML == "AC") {
			input.innerHTML = "0"
		}
		else if (bts.innerHTML == "C") {
			var text = Array.from(input.innerHTML);
			text.splice(text.length - 1, 1);
			if (input.innerHTML != 0) {
				input.innerHTML = text.join("");
			}
			else {
				input.innerHTML = "0";
			}
		}
		else if (bts.innerHTML == "ON") {
			input.innerHTML = "0"
			input.style.display = "block"
		}
		else if (bts.innerHTML == "OFF") {
			input.innerHTML = "bye"
			input.style.display = "none"
		}
		else if (bts.innerHTML == "=") {
			input.innerHTML = eval(input.innerHTML)
		}
		else input.innerHTML += bts.innerHTML;
	})
})

