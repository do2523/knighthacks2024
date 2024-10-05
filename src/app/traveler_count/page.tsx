"use client"

import { useState } from "react";
import RedirectInput from "../_components/redirect_input";

export default function TravelerCount() {
    const [option, setOption] = useState("");

    return(
        <div className="relative min-h-screen w-screen flex">
            <div className="flex flex-col gap-2 items-center justify-center h-screen w-screen">
                <div className="flex flex-row gap-2 items-center justify-center">
                    Solo or accompanied?
                    <button className="border-2 border-black p-2 rounded-lg" onClick={() => setOption("solo")}>Solo</button>
                    <button className="border-2 border-black p-2 rounded-lg" onClick={() => setOption("accompanied")}>Accompanied</button>
                    
                    
                </div>
                {option == "accompanied" && <RedirectInput href="budget" />}
            </div>
        </div>
    )
}