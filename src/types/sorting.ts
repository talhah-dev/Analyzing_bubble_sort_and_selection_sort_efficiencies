export interface Step {
  arrayState: number[];
  activeIndices: number[];
  swapLabel: string;
}

export interface Pass {
  passNumber: number;
  comparisons: number;
  swaps: number;
  steps: Step[];
  finalIndex: number;
}

export interface SortTrace {
  passes: Pass[];
  array: number[];
}
