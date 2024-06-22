// Function to handle sorting button click events
async function handleSortButtonClick(sortFunction, ...sortParams) {
	// Disable UI elements during sorting
	sortingBtn(true);
	sizeSlider(true);
	newChartBtn(true);

	// Perform the sorting algorithm
	await sortFunction(...sortParams);

	// Enable UI elements after sorting
	sortingBtn(false);
	sizeSlider(false);
	newChartBtn(false);
}

// Add event listeners for each sorting button
document.querySelector(".bubbleSort").addEventListener("click", () => handleSortButtonClick(bubbleSort));

document.querySelector(".quickSort").addEventListener("click", () => {
	const ele = document.querySelectorAll(".bar");
	const low = 0;
	const high = ele.length - 1;
	handleSortButtonClick(quickSort, ele, low, high);
});

document.querySelector(".mergeSort").addEventListener("click", () => {
	const ele = document.querySelectorAll(".bar");
	const l = 0;
	const r = parseInt(ele.length) - 1;
	const left = new Array(Math.floor(ele.length / 2));
	const right = new Array(ele.length - Math.floor(ele.length / 2));
	handleSortButtonClick(mergeSort, ele, l, r, left, right);
});

document.querySelector(".selectionSort").addEventListener("click", () => handleSortButtonClick(selectionSort));

document.querySelector(".insertionSort").addEventListener("click", () => handleSortButtonClick(insertionSort));
