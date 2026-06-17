export function runBubbleSort(array: number[]) {
  const arr = [...array];
  const n = arr.length;
  const passes = [];

  for (let i = 0; i < n - 1; i++) {
    let comparisons = 0;
    let swaps = 0;
    const steps = [];

    for (let j = 0; j < n - 1 - i; j++) {
      comparisons++;
      const leftValue = arr[j];
      const rightValue = arr[j + 1];
      let swapLabel = "No swapping";
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swaps++;
        swapLabel = `${leftValue} swapped with ${rightValue}`;
      }
      steps.push({
        arrayState: [...arr],
        activeIndices: [j, j + 1],
        swapLabel,
      });
    }

    passes.push({
      passNumber: i + 1,
      comparisons,
      swaps,
      steps,
      finalIndex: n - 1 - i,
    });
  }

  return { passes, array };
}
