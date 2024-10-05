import { Suspense } from "react";
import RedirectInput from "../_components/redirect_input";

export default function Duration() {
    return(
        <div className="relative min-h-screen w-screen flex">
            <div className="flex flex-row gap-2 items-center justify-center h-screen w-screen">
                How long?
                <Suspense><RedirectInput href="questionary" /></Suspense>
            </div>
        </div>
    );
}