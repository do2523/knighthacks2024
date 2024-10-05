"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Questionary() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathName = usePathname().slice(1);

    function handleButton(e: React.MouseEvent<HTMLButtonElement>) {
        const button = e.target as HTMLElement;

        const queryParamString = new URLSearchParams();
        searchParams.forEach((name, value) => {
            queryParamString.append(value, name);
        })

        queryParamString.append(pathName, button.innerText);

        router.push(`/traveler_count?${queryParamString.toString()}`);
    }

    return(
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1>What kind of person are you?</h1>

            <button className="border-2 border-black p-2 rounded-lg" onClick={handleButton}>Introvert</button>
            <button className="border-2 border-black p-2 rounded-lg" onClick={handleButton}>Extrovert</button>
            <button className="border-2 border-black p-2 rounded-lg" onClick={handleButton}>Business</button>
            <button className="border-2 border-black p-2 rounded-lg" onClick={handleButton}>Ambivert</button>
        </div>
    )
}