"use client";

import { useState } from "react";
import { runBubbleSort } from "@/lib/sorting/bubble-sort";
import type { SortTrace } from "@/types/sorting";
import { ArrayInput } from "@/components/ArrayInput";
import { CaseIndicator } from "@/components/CaseIndicator";
import { SortPanel } from "@/components/SortPanel";
import { runSelectionSort } from "@/lib/sorting/selection-sort";

export default function SortingVisualizerPage() {
    const [bubbleTrace, setBubbleTrace] = useState<SortTrace | null>(null);
    const [selectionTrace, setSelectionTrace] = useState<SortTrace | null>(null);
    const [hasRun, setHasRun] = useState(false);

    function handleSort(array: number[]) {
        const bubble = runBubbleSort([...array]);
        const selection = runSelectionSort([...array]);
        setBubbleTrace(bubble);
        setSelectionTrace(selection);
        setHasRun(true);
    }

    return (
        <div className="min-h-screen bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-4 py-10 space-y-10">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold tracking-tight">Sorting Visualizer</h1>
                    <p className="text-muted-foreground text-sm">
                        Compare Bubble Sort and Selection Sort side by side
                    </p>
                </div>

                <ArrayInput onSort={handleSort} />

                {hasRun && bubbleTrace && selectionTrace && (
                    <>
                        <CaseIndicator bubbleTrace={bubbleTrace} selectionTrace={selectionTrace} />

                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                            <SortPanel title="Bubble Sort" trace={bubbleTrace} />
                            <SortPanel title="Selection Sort" trace={selectionTrace} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}