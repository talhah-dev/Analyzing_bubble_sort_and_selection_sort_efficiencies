export interface Pass {
    passNumber: number;
    comparisons: number;
    swaps: number;
    arrayState: number[];
    finalIndex: number;
    activeIndices: number[];
}

export interface SortTrace {
    passes: Pass[];
    array: number[];
}