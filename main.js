// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
	let temp = el1.style.height;
	el1.style.height = el2.style.height;
	el2.style.height = temp;
}

// Disables or Enable sorting buttons used
function sortingBtn(statement) {
	document.querySelector(".bubbleSort").disabled = statement;
	document.querySelector(".insertionSort").disabled = statement;
	document.querySelector(".mergeSort").disabled = statement;
	document.querySelector(".quickSort").disabled = statement;
	document.querySelector(".selectionSort").disabled = statement;
}

// Disables or Enable size slider used
function sizeSlider(statement) {
	document.querySelector("#arr_sz").disabled = statement;
}

// Disables or Enable newArray buttons used
function newChartBtn(statement) {
	document.querySelector(".newArray").disabled = statement;
}

// Used in async function so that we can see animations of sorting, takes input time in ms (1000 = 1s)
function waitForMe(milisec) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve("");
		}, milisec);
	});
}

// Selecting size slider from DOM
let arraySize = document.querySelector("#arr_sz");

// Event listener to update the bars on the UI
arraySize.addEventListener("input", function () {
	createNewArray(parseInt(arraySize.value));
});

// Default input for waitForMe function (260ms)
let delay = 260;

// Selecting speed slider from DOM
let delayElement = document.querySelector("#speed_input");

// Event listener to update delay time
delayElement.addEventListener("input", function () {
	delay = 320 - parseInt(delayElement.value);
});

let array = [];

// Call to display bars right when you visit the site
createNewArray();

// To create new array input size of array
function createNewArray(noOfBars = 60) {
	// calling helper function to delete old bars from dom
	deleteChild();

	// creating an array of random numbers
	array = [];
	for (let i = 0; i < noOfBars; i++) {
		array.push(Math.floor(Math.random() * 250) + 1);
	}

	// select the div #bars element
	const bars = document.querySelector("#bars");

	// create multiple element div using loop and adding class 'bar col'
	for (let i = 0; i < noOfBars; i++) {
		const bar = document.createElement("div");
		bar.style.height = `${array[i] * 2}px`;
		bar.classList.add("bar");
		bar.classList.add("flex-item");
		bar.classList.add(`barNo${i}`);
		bars.appendChild(bar);
	}
}

// Helper function to delete all the previous bars so that new can be added
function deleteChild() {
	const bar = document.querySelector("#bars");
	bar.innerHTML = "";
}

// Selecting new chart button from DOM and adding eventlistener
const newArray = document.querySelector(".newArray");
newArray.addEventListener("click", function () {
	sortingBtn(false);
	sizeSlider(false);
	createNewArray(arraySize.value);
});
