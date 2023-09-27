let height = document.getElementById('height');
let weight = document.getElementById('weight');

let resultArea = document.querySelector('.category');

let modal = document.getElementById('myModal');
let span = document.getElementsByClassName('close')[0];

function calculate() {
	if (height.value == '' || weight.value == '') {
		modal.style.display = 'block';
		modalText.innerHTML = `All fields are required!`;
	} else {
		countBmi();
	}
}

function countBmi() {
	let count = [height.value, weight.value];

	let convertHeight = Number(count[0]) / 100;

	let bmi = Number(count[1]) / convertHeight ** 2;

	let result = '';
	if (bmi < 18.5) {
		result = 'Underweight';
	} else if (18.5 <= bmi && bmi <= 24.9) {
		result = 'Healthy';
	} else if (25 <= bmi && bmi <= 29.9) {
		result = 'Overweight';
	} else if (30 <= bmi && bmi <= 34.9) {
		result = 'Obese';
	} else if (35 <= bmi) {
		result = 'Extremely obese';
	}

	resultArea.style.display = 'block';
	document.querySelector(
		'.category',
	).innerHTML = `You are <span id="category">${result}</span>`;
	document.querySelector('#result').innerHTML = bmi.toFixed(2);
}

span.onclick = function () {
	modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};
