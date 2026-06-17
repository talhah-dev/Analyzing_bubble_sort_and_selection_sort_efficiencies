export function runSelectionSort(array: number[]) {
    const arr = [...array];
    const n = arr.length;
    const passes = [];

    for (let i = 0; i < n - 1; i++) {
        let comparisons = 0;
        let swaps = 0;
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            comparisons++;
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
            swaps++;
        }

        passes.push({
            passNumber: i + 1,
            comparisons,
            swaps,
            arrayState: [...arr],
            finalIndex: i,
            activeIndices: [i, minIndex],
        });
    }

    return { passes, array };
}