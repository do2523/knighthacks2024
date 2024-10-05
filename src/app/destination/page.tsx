import { Suspense } from "react";
import RedirectInput from "../_components/redirect_input";

export default function Destination() {
    return(
        <div className="relative min-h-screen w-screen flex">
            <div>test text</div>
            <div className="flex flex-col gap-2 items-center justify-center h-screen w-screen text-4xl font-semibold">
                Where are you traveling to?
                <div className="mt-8">
                    <Suspense><RedirectInput href="duration" /></Suspense>
                </div>
            </div>
        </div>
    );
}