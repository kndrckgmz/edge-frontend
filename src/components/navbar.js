'use client'

import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Nav() {

    const { auth, toggleAuth } = useAuth();

    const handleLogout = () => {
        toggleAuth()
        localStorage.removeItem("token");
    }

    return (
        <div className="fixed -bottom-6 left-1/2 -translate-1/2 w-4xl max-w-full flex flex-col items-center px-4">
            {auth && <div className="w-full flex flex-row justify-between gap-4 p-4 bg-[var(--background-2)] border-2 border-[var(--mid)] rounded-2xl">
                <Link href="/" className="h-6">
                    <Image
                        className="dark:invert"
                        src="/edgelogo.svg"
                        alt="EDGE logo"
                        width={39}
                        height={24}
                        priority
                    />
                </Link>
                <div className="flex flex-row gap-2">
                    <Link href='/account' className="secondary-button text-sm">
                        <Icon icon="solar:user-broken" width="24" height="24" />
                    </Link>
                    <button className="secondary-button text-sm" onClick={handleLogout}>
                        <Icon icon="solar:logout-outline" width="24" height="24" />
                    </button>
                </div>
            </div>}
        </div>
    )
}