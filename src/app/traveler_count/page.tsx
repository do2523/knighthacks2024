"use client"

import { Suspense, useState } from "react";
import RedirectInput from "../_components/redirect_input";
import RedirectButton from "../_components/redirect_button";
import styles from '../../styles/Shared.module.css';

export default function TravelerCount() {
    const [option, setOption] = useState("");

    return (
        <div className="relative min-h-screen w-screen flex bg-[#F0F9FF]">
            <div className="flex flex-col gap-2 items-center justify-center h-screen w-screen">
                <div className={styles.question}>
                    Any travel buddies joining your trip?
                </div>
                <div className="flex justify-center space-x-20">
                    <Suspense><RedirectButton href="budget">Nope, it's a solo trip!</RedirectButton></Suspense>

                    <button className="shadow-lg rounded-3xl h-[200px] w-[250px] text-2xl p-10 font-semibold bg-white hover:shadow-xl" onClick={() => setOption("accompanied")}>

                        Yes! I'm bringing guests.

                        {option === "accompanied" && (
                            <div className="mt-4 bg-black w-[210px] flex justify-center">
                                <Suspense>
                                    <RedirectInput href="budget" />
                                </Suspense>
                            </div>
                        )}

                    </button>

                    {/* {option == "accompanied" && <Suspense><RedirectInput href="budget" /></Suspense>} */}

                </div>
            </div>
        </div>
    )
}