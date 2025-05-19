import { useEffect, useState } from "react";
import AddBeneficiary from "./addbeneficiary";
import Transactions from "./transactions";

export default function Dashboard() {

    const [balance, setBalance] = useState();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("user"));
        setBalance(data.balance);
    }, [])

    return (
        <div className="w-full h-11/12 flex flex-col gap-10">
            <div className="flex flex-col p-4 pt-16">
                <div className="text-4xl max-w-full">₹{balance}</div>
                <div className="text-md max-w-full text-neutral-500">Total Balance</div>
            </div>
            <div className="relative flex flex-col items-stretch rounded-t-4xl min-h-screen pb-26">
                <div className="p-4 grid grid-cols-2 gap-2">
                    <AddBeneficiary />
                    <button className="cursor-pointer hover:scale-[1.02] w-full aspect-square max-h-30 rounded-3xl bg-[var(--accent)] text-2xl text-center">
                        Send Money
                    </button>
                </div>
                <div className="flex flex-row whitespace-nowrap p-4 gap-8 overflow-auto">
                    <div className="flex flex-col items-center gap-1">
                        <div className="bg-black rounded-full h-20 w-20 border-2 border-[var(--mid)]"></div>
                        <p>Long Name</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="bg-black rounded-full h-20 w-20 border-2 border-[var(--mid)]"></div>
                        <p>Long Name</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="bg-black rounded-full h-20 w-20 border-2 border-[var(--mid)]"></div>
                        <p>Long Name</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="bg-black rounded-full h-20 w-20 border-2 border-[var(--mid)]"></div>
                        <p>Long Name</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="bg-black rounded-full h-20 w-20 border-2 border-[var(--mid)]"></div>
                        <p>Long Name</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="bg-black rounded-full h-20 w-20 border-2 border-[var(--mid)]"></div>
                        <p>Long Name</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="bg-black rounded-full h-20 w-20 border-2 border-[var(--mid)]"></div>
                        <p>Long Name</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <div className="bg-black rounded-full h-20 w-20 border-2 border-[var(--mid)]"></div>
                        <p>Long Name</p>
                    </div>
                </div>
                <Transactions />
            </div>
        </div>
    )
}

