"use client"

import { usePathname, useRouter } from "next/navigation";
import Input from "./input";

export default function RedirectInput({ href }: { href: string }) {
    const router = useRouter();
    const pathName = usePathname().slice(1);

    return(
        <div>
            <Input onSubmit={(input) => {
                const queryParamString = new URLSearchParams([[pathName, input]]).toString();
                router.push(`/${href}?${queryParamString}`);
            }}/>
        </div>
    );
}