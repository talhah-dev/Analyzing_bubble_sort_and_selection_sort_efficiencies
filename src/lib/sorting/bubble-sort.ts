export function runBubbleSort(array: number[]) {
    const arr = [...array];
    const n = arr.length;
    const passes = [];

    for (let i = 0; i < n - 1; i++) {
        let comparisons = 0;
        let swaps = 0;

        for (let j = 0; j < n - 1 - i; j++) {
            comparisons++;
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swaps++;
            }
        }

        passes.push({
            passNumber: i + 1,
            comparisons,
            swaps,
            arrayState: [...arr],
            finalIndex: n - 1 - i,
            activeIndices: [n - 2 - i, n - 1 - i],
        });
    }

    return { passes, array };
}