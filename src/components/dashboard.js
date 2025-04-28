import AddBeneficiary from "./addbeneficiary";
import Transactions from "./transactions";

export default function Dashboard() {

    return (
        <div className="w-full h-11/12 flex flex-col gap-10">
            <div className="flex flex-col p-4 pt-16">
                <div className="text-4xl max-w-full">₹1,00,000</div>
                <div className="text-md max-w-full text-neutral-500">Total Balance</div>
            </div>
            <div className="relative flex flex-col items-stretch rounded-t-4xl min-h-screen pb-26">
                <div className="p-4 grid grid-cols-2 gap-2">
                    <AddBeneficiary />
                    <button className="cursor-pointer hover:scale-[1.02] w-full aspect-square max-h-30 rounded-3xl bg-[var(--accent)] text-2xl text-center">
                        Send Money
                    </button>
                </div>

                <Transactions />
            </div>
        </div>
    )
}

