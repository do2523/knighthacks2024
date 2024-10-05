import React, { Suspense } from "react";
import RedirectButton from "../_components/redirect_button";

export default function Questionary() {
    return(
        <div className="flex min-h-screen flex-col items-center justify-center">
            <h1>What kind of person are you?</h1>
            <Suspense><RedirectButton href="traveler_count">Introvert</RedirectButton></Suspense>
            <Suspense><RedirectButton href="traveler_count">Extrovert</RedirectButton></Suspense>
            <Suspense><RedirectButton href="traveler_count">Ambivert</RedirectButton></Suspense>
            <Suspense><RedirectButton href="traveler_count">Business</RedirectButton></Suspense>
        </div>
    )
}