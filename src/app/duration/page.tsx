import Input from "../_components/input";

export default function Duration() {
    return(
        <div className="relative min-h-screen w-screen flex">
            <div className="flex flex-row gap-2 items-center justify-center h-screen w-screen">
                How long?
                <Input />
            </div>
        </div>
    );
}