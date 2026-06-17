import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface Pass {
    passNumber: number;
    comparisons: number;
    swaps: number;
}

interface Props {
    passes: Pass[];
}

export function PassTable({ passes }: Props) {
    const totalComparisons = passes.reduce((sum, p) => sum + p.comparisons, 0);
    const totalSwaps = passes.reduce((sum, p) => sum + p.swaps, 0);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Pass</TableHead>
                    <TableHead className="text-center">Comparisons</TableHead>
                    <TableHead className="text-center">Swaps</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {passes.map((pass) => (
                    <TableRow key={pass.passNumber}>
                        <TableCell className="font-medium">Pass {pass.passNumber}</TableCell>
                        <TableCell className="text-center">{pass.comparisons}</TableCell>
                        <TableCell className="text-center">{pass.swaps}</TableCell>
                    </TableRow>
                ))}
                <TableRow className="border-t-2 font-semibold bg-muted/50">
                    <TableCell>Total</TableCell>
                    <TableCell className="text-center">{totalComparisons}</TableCell>
                    <TableCell className="text-center">{totalSwaps}</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}