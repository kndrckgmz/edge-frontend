export default function Dashboard() {

    return (
        <div className="w-full h-11/12 flex flex-col gap-20">
            <div className="flex flex-col items-center">
                <div className="text-6xl max-w-full">₹1,00,000</div>
                <div className="text-md max-w-full text-neutral-500">Total Balance</div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="cursor-pointer hover:scale-[1.02] w-[49%] p-16 rounded-[20rem] bg-[var(--mid)] text-2xl text-center">
                    Request
                </div>
                <div className="cursor-pointer hover:scale-[1.02] w-[49%] p-16 rounded-[20rem] bg-[var(--accent)] text-2xl text-center">
                    Send
                </div>
            </div>
        </div>
    )
}