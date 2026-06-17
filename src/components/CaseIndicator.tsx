import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Pass {
    passNumber: number;
    comparisons: number;
    swaps: number;
}

interface SortTrace {
    passes: Pass[];
    array: number[];
}

interface Props {
    bubbleTrace: SortTrace;
    selectionTrace: SortTrace;
}

function determineCase(passes: Pass[], array: number[]): "Best" | "Average" | "Worst" {
    const totalSwaps = passes.reduce((sum, p) => sum + p.swaps, 0);
    const n = array.length;
    const maxSwaps = (n * (n - 1)) / 2;

    if (totalSwaps === 0) return "Best";
    if (totalSwaps >= maxSwaps * 0.75) return "Worst";
    return "Average";
}

const caseConfig = {
    Best: { label: "Best Case", className: "bg-green-500 hover:bg-green-500 text-white" },
    Average: { label: "Average Case", className: "bg-yellow-500 hover:bg-yellow-500 text-white" },
    Worst: { label: "Worst Case", className: "bg-red-500 hover:bg-red-500 text-white" },
};

export function CaseIndicator({ bubbleTrace, selectionTrace }: Props) {
    const bubbleCase = determineCase(bubbleTrace.passes, bubbleTrace.array);
    const selectionCase = determineCase(selectionTrace.passes, selectionTrace.array);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                        Bubble Sort: Case Analysis
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Badge className={caseConfig[bubbleCase].className}>
                        {caseConfig[bubbleCase].label}
                    </Badge>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                        Selection Sort: Case Analysis
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Badge className={caseConfig[selectionCase].className}>
                        {caseConfig[selectionCase].label}
                    </Badge>
                </CardContent>
            </Card>
        </div>
    );
}
