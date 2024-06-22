// Function to perform Bubble Sort
async function bubbleSort() {
	const bars = document.querySelectorAll(".bar");
	const totalBars = bars.length;

	for (let i = 0; i < totalBars - 1; i++) {
		for (let j = 0; j < totalBars - i - 1; j++) {
			// Color the elements being compared
			bars[j].style.background = "blue";
			bars[j + 1].style.background = "blue";
			await waitForMe(delay);

			// Compare and swap elements if necessary
			if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
				await waitForMe(delay);
				swap(bars[j], bars[j + 1]);
			}

			// Reset colors of compared elements
			bars[j].style.background = "cyan";
			bars[j + 1].style.background = "cyan";
		}
		// Color the sorted elements
		bars[totalBars - 1 - i].style.background = "green";
	}
	// Color the first element as sorted
	bars[0].style.background = "green";
}
