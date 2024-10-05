import Input from "../_components/input";

export default function Destination() {
    return(
        <div className="relative min-h-screen w-screen flex">
            <div className="flex flex-row gap-2 items-center justify-center h-screen w-screen">
                Where?
                <Input />
            </div>
        </div>
    );
}