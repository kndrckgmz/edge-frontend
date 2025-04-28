'use client'

import { Icon } from "@iconify/react";
import { useState } from "react"


const AddBeneficiary = () => {

    const [name, setName] = useState("");
    const [accnum, setAccNum] = useState("");
    const [confirmaccnum, setConfirmAccNum] = useState("");
    const [error, setError] = useState("")


    const openBenficiaryForm = () => {
        let form = document.getElementById("benificiaryForm");
        form.classList.remove("opacity-0", "pointer-events-none");
    }

    const closeBenficiaryForm = () => {
        let form = document.getElementById("benificiaryForm");
        form.classList.add("opacity-0", "pointer-events-none");
    }

    const handleError = (err) => {
        setError(err)
        setTimeout(() => {
            setError("")
        }, 3000)
    }

    async function handleAddBeneficiary() {
        if (name === "") {
            handleError("Enter Name")
        }
        else if (accnum === "") {
            handleError("Enter Account Number")
        }
        else if (confirmaccnum === "") {
            handleError("Confirm account number")
        }
        else if (confirmaccnum !== accnum) {
            handleError("Account numbers do not match")
        }
        else {
            setName("")
            setAccNum("")
            setConfirmAccNum("")
            closeBenficiaryForm()
        }
    }

    return (
        <>
            <button onClick={openBenficiaryForm} className="cursor-pointer hover:scale-[1.02] w-full aspect-square max-h-30 rounded-3xl bg-[var(--background-2)] border-2 border-[var(--mid)] text-2xl text-center">
                Add Beneficiary
            </button>
            <div id="benificiaryForm" className="opacity-0 pointer-events-none fixed top-2/12 left-1/2 -translate-x-1/2 z-1 rounded-xl p-4 bg-[var(--background-2)]">
                <div className="w-full flex flex-col items-end">
                    <Icon onClick={closeBenficiaryForm} className="cursor-pointer" icon="material-symbols:close-rounded" width="24" height="24" />
                </div>
                <div className="login-container">
                    <div className="login-input-label-container">
                        Name of account holder
                        <input className="input" type="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className="login-input-label-container">
                        Account Number
                        <input className="input" type="number" value={accnum} onChange={(e) => setAccNum(e.target.value)}></input>
                    </div>
                    <div className="login-input-label-container">
                        Confirm Account Number
                        <input className="input" type="number" value={confirmaccnum} onChange={(e) => setConfirmAccNum(e.target.value)}></input>
                    </div>
                    <div className="form-error">{error}</div>
                    <button onClick={handleAddBeneficiary} className="secondary-button w-full">Add Beneficiary</button>
                </div>
            </div>
        </>
    )
}

export default AddBeneficiary