import { cn } from "@/lib/utils";

interface Props {
    value: number;
    isFinal: boolean;
    isActive: boolean;
    maxValue: number;
}

export function SortBar({ value, isFinal, isActive, maxValue }: Props) {
    const heightPercent = Math.max((value / maxValue) * 100, 8);

    return (
        <div className="flex flex-col items-center gap-1">
            <span className="text-xs font-medium text-muted-foreground">{value}</span>
            <div
                style={{ height: `${heightPercent * 1.8}px` }}
                className={cn(
                    "w-10 rounded-md transition-all duration-300",
                    isFinal && "bg-green-500",
                    isActive && !isFinal && "bg-yellow-400",
                    !isFinal && !isActive && "bg-primary"
                )}
            />
        </div>
    );
}