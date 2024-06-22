async function merge(ele, low, mid, high, left, right) {
	// Calculate the sizes of the two subarrays
	const n1 = mid - low + 1;
	const n2 = high - mid;

	// Populate the left subarray and color elements in orange
	for (let i = 0; i < n1; ++i) {
		await waitForMe(delay); // Introduce delay for visualization
		ele[low + i].style.background = "orange"; // Set orange color
		left[i] = ele[low + i].style.height;
	}
	// Populate the right subarray and color elements in yellow
	for (let i = 0; i < n2; ++i) {
		await waitForMe(delay);
		ele[mid + 1 + i].style.background = "yellow"; // Set yellow color
		right[i] = ele[mid + 1 + i].style.height;
	}
	await waitForMe(delay);

	// Merge the two subarrays
	let i = 0,
		j = 0,
		k = low;
	while (i < n1 && j < n2) {
		await waitForMe(delay);

		// Compare elements from the left and right subarrays and merge them into the original array
		if (parseInt(left[i]) <= parseInt(right[j])) {
			ele[k].style.background = ele.length === n1 + n2 ? "green" : "lightgreen";
			ele[k].style.height = left[i];
			++i;
		} else {
			ele[k].style.background = ele.length === n1 + n2 ? "green" : "lightgreen";
			ele[k].style.height = right[j];
			++j;
		}
		++k;
	}
	// Copy any remaining elements from the left subarray into the original array
	while (i < n1) {
		await waitForMe(delay);
		ele[k].style.background = ele.length === n1 + n2 ? "green" : "lightgreen";
		ele[k].style.height = left[i];
		++i;
		++k;
	}
	// Copy any remaining elements from the right subarray into the original array
	while (j < n2) {
		await waitForMe(delay);
		ele[k].style.background = ele.length === n1 + n2 ? "green" : "lightgreen";
		ele[k].style.height = right[j];
		++j;
		++k;
	}
}

async function mergeSort(ele, l, r, left, right) {
	// Base case: if the subarray has one or fewer elements, it is already sorted
	if (l >= r) {
		return;
	}
	// Calculate the middle index of the subarray
	const m = l + Math.floor((r - l) / 2);
	// Recursively sort the left and right halves of the subarray
	await mergeSort(ele, l, m, left, right);
	await mergeSort(ele, m + 1, r, left, right);
	// Merge the sorted halves
	await merge(ele, l, m, r, left, right);
}
