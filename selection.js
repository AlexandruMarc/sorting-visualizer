// Function to perform Selection Sort
async function selectionSort() {
	const bars = document.querySelectorAll(".bar");
	const totalBars = bars.length;

	for (let i = 0; i < totalBars; i++) {
		let minIndex = i;
		// Change color of the current element to be compared
		bars[i].style.background = "blue";

		for (let j = i + 1; j < totalBars; j++) {
			// Change color for the current element being compared
			bars[j].style.background = "red";
			await waitForMe(delay);

			// Find the index of the minimum element
			if (parseInt(bars[j].style.height) < parseInt(bars[minIndex].style.height)) {
				// If a new minimum is found, change the previous minimum back to normal color
				if (minIndex !== i) {
					bars[minIndex].style.background = "cyan";
				}
				minIndex = j;
			} else {
				// Change the color back to normal if the current comparison is not the minimum
				bars[j].style.background = "cyan";
			}
		}
		await waitForMe(delay);

		// Swap the minimum element with the current element
		swap(bars[minIndex], bars[i]);

		// Change the color of the minimum element back to normal as it is swapped
		bars[minIndex].style.background = "cyan";

		// Change the color of the sorted element to green
		bars[i].style.background = "green";
	}
}

// Event listener for Selection Sort button click
const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener("click", async function () {
	// Disable UI elements during sorting
	disableSortingBtn();
	disableSizeSlider();
	disableNewArrayBtn();

	// Perform Selection Sort
	await selectionSort();

	// Enable UI elements after sorting
	enableSortingBtn();
	enableSizeSlider();
	enableNewArrayBtn();
});
