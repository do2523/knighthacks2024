import { Suspense } from "react";
import RedirectInput from "../_components/redirect_input";
import styles from '../../styles/Shared.module.css';

export default function Duration() {
    return(
        <div className="relative min-h-screen w-screen flex items-center justify-center bg-[#F0F9FF]">
            <div className="flex flex-col items-center justify-center h-screen w-screen text-4xl font-semibold">
                <div className={styles['responsive-container']}>
                    <p className={styles['responsive-image']}>HI</p>
                    <div className={styles['question']}>
                        How long is your stay?
                        <div className={styles['input-box']}>
                            <Suspense><RedirectInput href="questionary" /></Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}