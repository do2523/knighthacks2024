import { Suspense } from "react";
import RedirectInput from "../_components/redirect_input";
import styles from '../../styles/Shared.module.css';

export default function Destination() {
    return (
        <div className="relative min-h-screen w-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center h-screen w-screen text-4xl font-semibold">
                <div className={styles['responsive-container']}>
                    <p className={styles['responsive-image']}>HI</p>
                    <div className="text-center text-[#334155]">
                        Where are you traveling to?
                        <div className={styles['input-box']}>
                            <Suspense><RedirectInput href="duration" /></Suspense>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}