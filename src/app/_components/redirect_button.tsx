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
        <button className="shadow-lg rounded-3xl h-[200px] w-[250px] text-2xl p-10 font-semibold bg-white hover:shadow-xl" onClick={handleButton}>{children}</button>
    )
}