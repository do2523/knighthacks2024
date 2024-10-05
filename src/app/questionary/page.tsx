import React, { Suspense } from "react";
import RedirectButton from "../_components/redirect_button";
import styles from '../../styles/Shared.module.css';


export default function Questionary() {
    return(
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className={styles['question']}>
                What kind of person are you?
            </div>
            <Suspense><RedirectButton href="traveler_count">Introvert</RedirectButton></Suspense>
            <Suspense><RedirectButton href="traveler_count">Extrovert</RedirectButton></Suspense>
            <Suspense><RedirectButton href="traveler_count">Ambivert</RedirectButton></Suspense>
            <Suspense><RedirectButton href="traveler_count">Business</RedirectButton></Suspense>
        </div>
    )
}