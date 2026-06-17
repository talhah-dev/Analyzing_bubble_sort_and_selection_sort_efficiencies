import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SortBar } from "./SortBar";
import { PassTable } from "./PassTable";
import { Separator } from "@/components/ui/separator";

interface Pass {
    passNumber: number;
    comparisons: number;
    swaps: number;
    arrayState: number[];
    finalIndex: number;
    activeIndices: number[];
}

interface SortTrace {
    passes: Pass[];
    array: number[];
}

interface Props {
    title: string;
    trace: SortTrace;
}

export function SortPanel({ title, trace }: Props) {
    const maxValue = Math.max(...trace.array);

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {trace.passes.map((pass) => (
                    <div key={pass.passNumber} className="space-y-3">
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                            Pass {pass.passNumber}
                        </p>
                        <div className="flex items-end gap-2 flex-wrap">
                            {pass.arrayState.map((value, idx) => (
                                <SortBar
                                    key={idx}
                                    value={value}
                                    maxValue={maxValue}
                                    isFinal={idx === pass.finalIndex}
                                    isActive={pass.activeIndices.includes(idx)}
                                />
                            ))}
                        </div>
                        <Separator />
                    </div>
                ))}

                <div className="space-y-2">
                    <p className="text-sm font-semibold">Pass Statistics</p>
                    <PassTable passes={trace.passes} />
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground flex-wrap">
                    <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-sm bg-green-500 inline-block" />
                        Final Position
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-sm bg-yellow-400 inline-block" />
                        Being Compared
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-sm bg-primary inline-block" />
                        Unsorted
                    </span>
                </div>
            </CardContent>
        </Card>
    );
}