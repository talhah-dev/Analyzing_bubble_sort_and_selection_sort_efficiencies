"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
    onSort: (array: number[]) => void;
}

export function ArrayInput({ onSort }: Props) {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    function handleSort() {
        const entries = value
            .split(",")
            .map((s) => s.trim())
            .filter((s) => s !== "");

        const parsed = entries.map((s) => Number(s));

        if (parsed.some(Number.isNaN)) {
            setError("Please enter valid integers separated by commas.");
            return;
        }

        if (parsed.length < 2) {
            setError("Please enter at least 2 numbers.");
            return;
        }

        setError("");
        onSort(parsed);
    }

    function handleRandom() {
        const random = Array.from({ length: 8 }, () => Math.floor(Math.random() * 100) + 1);
        setValue(random.join(", "));
        setError("");
        onSort(random);
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-base">Enter Array</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <Input
                    placeholder="e.g. 64, 25, 12, 22, 11"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
                <div className="flex gap-2">
                    <Button onClick={handleSort}>Sort</Button>
                    <Button variant="outline" onClick={handleRandom}>
                        Random Array
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
