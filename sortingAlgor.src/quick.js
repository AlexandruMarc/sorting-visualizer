// Function to perform Lomuto partitioning
async function partitionLomuto(ele, low, high) {
	let pivotIndex = high;
	let i = low - 1;

	// Color the pivot element
	ele[pivotIndex].style.background = "red";

	for (let j = low; j < high; j++) {
		// Color the current element being compared
		ele[j].style.background = "yellow";
		await waitForMe(delay);

		if (parseInt(ele[j].style.height) < parseInt(ele[pivotIndex].style.height)) {
			// Increment i and swap elements
			i++;
			swap(ele[i], ele[j]);

			// Color the swapped elements
			ele[i].style.background = "orange";
			ele[j].style.background = "orange";
			await waitForMe(delay);
		} else {
			// Color if the current element is not less than pivot
			ele[j].style.background = "pink";
		}
	}

	// Increment i and swap the pivot element
	i++;
	swap(ele[i], ele[pivotIndex]);

	// Color the pivot and the final sorted partition
	ele[pivotIndex].style.background = "pink";
	ele[i].style.background = "green";
	await waitForMe(delay);

	// Reset colors of all elements except the sorted partition
	for (let k = low; k <= high; k++) {
		if (k !== i && k !== pivotIndex) {
			ele[k].style.background = "cyan";
		}
	}

	return i;
}

// Function to perform Quick Sort using Lomuto partitioning
async function quickSort(ele, low, high) {
	if (low < high) {
		let pivotIndex = await partitionLomuto(ele, low, high);
		await quickSort(ele, low, pivotIndex - 1);
		await quickSort(ele, pivotIndex + 1, high);
	} else {
		if (low >= 0 && high >= 0 && low < ele.length && high < ele.length) {
			ele[high].style.background = "green";
			ele[low].style.background = "green";
		}
	}
}
