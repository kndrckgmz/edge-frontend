'use client'

import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

export default function Nav() {

    const { auth, toggleAuth } = useAuth();

    const handleLogout = () => {
        toggleAuth()
        localStorage.removeItem("token");
    }

    return (
        <>
            {auth && <div className="absolute -bottom-6 left-1/2 -translate-1/2 w-4xl max-w-full flex flex-row justify-between gap-4 p-4 bg-[var(--background-2)] border-2 border-[var(--mid)] rounded-2xl">
                <Image
                    className="dark:invert"
                    src="/edgeblack.svg"
                    alt="EDGE logo"
                    width={100}
                    height={25}
                    priority
                />
                <button className="secondary-button text-sm" onClick={handleLogout}>Logout</button>
            </div>}
        </>
    )
}