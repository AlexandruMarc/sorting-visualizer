// Function to perform Insertion Sort
async function insertionSort() {
	const bars = document.querySelectorAll(".bar");
	const totalBars = bars.length;

	// Color the first element as sorted
	bars[0].style.background = "green";

	for (let i = 1; i < totalBars; i++) {
		let j = i - 1;
		let key = bars[i].style.height;

		// Color the current element being inserted
		bars[i].style.background = "blue";
		await waitForMe(delay);

		// Move elements greater than key to the right
		while (j >= 0 && parseInt(bars[j].style.height) > parseInt(key)) {
			// Color elements being compared
			bars[j].style.background = "red";
			bars[j + 1].style.height = bars[j].style.height;
			--j;

			// Color sorted elements
			for (let k = i; k >= 0; --k) {
				bars[k].style.background = "green";
			}

			await waitForMe(delay);
		}

		// Place the key in its correct position
		bars[j + 1].style.height = key;

		// Color the sorted elements
		bars[i].style.background = "green";
	}
}
