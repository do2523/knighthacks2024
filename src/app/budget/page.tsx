import RedirectInput from "../_components/redirect_input";

export default function Budget() {
    return(
        <div className="relative min-h-screen w-screen flex">
            <div className="flex flex-row gap-2 items-center justify-center h-screen w-screen">
                Budget?
                <RedirectInput href="/"/>
            </div>
        </div>
    );
}