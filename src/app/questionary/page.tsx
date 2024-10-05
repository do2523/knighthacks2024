import React, { Suspense } from "react";
import RedirectButton from "../_components/redirect_button";
import styles from '../../styles/Shared.module.css';


export default function Questionary() {
    return(
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className={styles.question}>
                What kind of person are you?
            </div>
            <div className="flex flex-row space-x-20 mt-8 h-20">
                <div>
                    <Suspense><RedirectButton href="traveler_count">Adventure Seeker</RedirectButton></Suspense>
                </div>
                <div>
                    <Suspense><RedirectButton href="traveler_count">Relaxation Enthusiast</RedirectButton></Suspense>
                </div>
                <div>
                    <Suspense><RedirectButton href="traveler_count">Culture Enjoyer</RedirectButton></Suspense>
                </div>
                <div>
                    <Suspense><RedirectButton href="traveler_count">The Foodie</RedirectButton></Suspense>
                </div>
            </div>
        </div>
    )
}