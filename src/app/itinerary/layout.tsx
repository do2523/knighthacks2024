import Link from "next/link";
import React from "react";
import { getServerAuthSession } from "~/server/auth";

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await getServerAuthSession();
  return (
    <div>
      <div className="mb-10 mt-10 text-2xl flex justify-end mr-20">
        <Link
          href={session ? "/api/auth/signout" : "/api/auth/signin"}
          className="rounded-md bg-[#334155] px-10 py-4 font-semibold no-underline transition hover:bg-[#1b2534] text-white"
        >
          {session ? "Sign out" : "Sign in"}
        </Link>
      </div>
      <div className="flex h-screen flex-row w-screen relatives">
        <div className="">
          <div className="overflow-y-auto overflow-x-hidden h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}