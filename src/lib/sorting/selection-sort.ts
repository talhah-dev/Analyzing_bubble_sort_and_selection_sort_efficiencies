export function runSelectionSort(array: number[]) {
  const arr = [...array];
  const n = arr.length;
  const passes = [];

  for (let i = 0; i < n - 1; i++) {
    let comparisons = 0;
    let swaps = 0;
    let minIndex = i;
    const steps = [];

    for (let j = i + 1; j < n; j++) {
      comparisons++;
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      steps.push({
        arrayState: [...arr],
        activeIndices: [i, j],
        swapLabel: "No swapping",
      });
    }

    let swapLabel = "No swapping";
    if (minIndex !== i) {
      const currentValue = arr[i];
      const minValue = arr[minIndex];
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      swaps++;
      swapLabel = `${currentValue} swapped with ${minValue}`;
    }

    steps.push({
      arrayState: [...arr],
      activeIndices: [i, minIndex],
      swapLabel,
    });

    passes.push({
      passNumber: i + 1,
      comparisons,
      swaps,
      steps,
      finalIndex: i,
    });
  }

  return { passes, array };
}
