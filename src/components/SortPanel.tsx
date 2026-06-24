import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SortBar } from "./SortBar";
import { PassTable } from "./PassTable";
import { Separator } from "@/components/ui/separator";
import type { SortTrace } from "@/types/sorting";

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
            <CardContent className="space-y-8">
                {trace.passes.map((pass) => (
                    <div key={pass.passNumber} className="space-y-4">
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                            Pass {pass.passNumber}
                        </p>

                        <div className="space-y-3">
                            {pass.steps.map((step, stepIdx) => (
                                <div key={stepIdx} className="space-y-1">
                                    <p className="text-xs text-muted-foreground mt-30">Step {stepIdx + 1}</p>
                                    <div className="flex items-end gap-2 flex-wrap">
                                        {step.arrayState.map((value, idx) => (
                                            <SortBar
                                                key={idx}
                                                value={value}
                                                isFinal={idx === pass.finalIndex}
                                                maxValue={maxValue}
                                                isActive={step.activeIndices.includes(idx)}
                                            />
                                        ))}
                                    </div>
                                    <p className="text-center text-xs font-medium text-zinc-600 dark:text-zinc-300">
                                        {step.swapLabel}
                                    </p>
                                </div>
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
                        <span className="w-3 h-3 rounded-sm bg-black dark:bg-zinc-950 inline-block" />
                        Inactive
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-sm bg-zinc-500 inline-block" />
                        Active
                    </span>
                    <span className="flex items-center gap-1">
                        <span className="w-3 h-3 rounded-sm bg-emerald-500 inline-block" />
                        Final Position
                    </span>
                </div>
            </CardContent>
        </Card>
    );
}
