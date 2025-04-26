import Transactions from "./transactions";

export default function Dashboard() {

    return (
        <div className="w-full h-11/12 flex flex-col gap-10">
            <div className="flex flex-col p-4 pt-16">
                <div className="text-4xl max-w-full">₹1,00,000</div>
                <div className="text-md max-w-full text-neutral-500">Total Balance</div>
            </div>
            <div className="flex flex-col items-stretch bg-[var(--background-2)] rounded-t-4xl min-h-screen pb-26">
                <div className="p-4">
                    <button className="cursor-pointer hover:scale-[1.02] w-full h-20 rounded-3xl bg-[var(--accent)] text-2xl text-center">
                        Send
                    </button>
                </div>

                <Transactions />
            </div>
        </div>
    )
}