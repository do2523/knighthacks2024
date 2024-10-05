"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function RedirectButton({ children, href }: Readonly<{ children: React.ReactNode, href: string }>) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathName = usePathname().slice(1);

    function handleButton(e: React.MouseEvent<HTMLButtonElement>) {
        const button = e.target as HTMLElement;

        const queryParamString = new URLSearchParams();
        searchParams.forEach((name, value) => {
            queryParamString.append(value, name);
        })

        queryParamString.append(pathName, button.innerText);

        router.push(`/${href}?${queryParamString.toString()}`);
    }

    return(
        <button className="border-2 border-black p-2 rounded-lg" onClick={handleButton}>{children}</button>
    )
}