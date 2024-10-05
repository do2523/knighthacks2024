"use client"

import { Suspense, useState } from "react";
import RedirectInput from "../_components/redirect_input";
import RedirectButton from "../_components/redirect_button";
import styles from '../../styles/Shared.module.css';

export default function TravelerCount() {
    const [option, setOption] = useState("");

    return(
        <div className="relative min-h-screen w-screen flex">
            <div className="flex flex-col gap-2 items-center justify-center h-screen w-screen">
                <div className={styles.question}>
                    Any travel buddies joining your trip?
                </div>
                <div className="flex justify-center space-x-20">
                    <Suspense><RedirectButton href="budget">Nope, it's a solo trip!</RedirectButton></Suspense>

                    <button className="border-none shadow-xl rounded-3xl h-[200px] w-[250px] text-2xl p-5 font-semibold" onClick={() => setOption("accompanied")}>Yes! I'm bringing guests.</button>
                    {option == "accompanied" && <Suspense><RedirectInput href="budget" /></Suspense>}
                </div>
            </div>
        </div>
    )
}