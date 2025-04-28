import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';

const data = [
    {
        "transactionId": "TXN-20250426-1001",
        "accountNumber": "XXXXXXXX1234",
        "transactionDate": "2025-04-26",
        "transactionTime": "10:30:00",
        "transactionType": "Debit",
        "description": "Grocery Shopping - Reliance Fresh",
        "amount": 456.78,
        "currency": "INR",
        "transactionStatus": "Completed"
    },
    {
        "transactionId": "TXN-20250426-1002",
        "accountNumber": "XXXXXXXX5678",
        "transactionDate": "2025-04-26",
        "transactionTime": "11:15:30",
        "transactionType": "Credit",
        "description": "Salary Deposit - April 2025",
        "amount": 50000.00,
        "currency": "INR",
        "transactionStatus": "Completed"
    },
    {
        "transactionId": "TXN-20250426-1003",
        "accountNumber": "XXXXXXXX1234",
        "transactionDate": "2025-04-26",
        "transactionTime": "12:45:15",
        "transactionType": "Debit",
        "description": "Online Payment - Zomato",
        "amount": 299.50,
        "currency": "INR",
        "transactionStatus": "Completed"
    },
    {
        "transactionId": "TXN-20250426-1004",
        "accountNumber": "XXXXXXXX9012",
        "transactionDate": "2025-04-26",
        "transactionTime": "14:00:00",
        "transactionType": "Credit",
        "description": "Fund Transfer Received - From ABC",
        "amount": 1500.00,
        "currency": "INR",
        "transactionStatus": "Completed"
    },
    {
        "transactionId": "TXN-20250426-1005",
        "accountNumber": "XXXXXXXX5678",
        "transactionDate": "2025-04-26",
        "transactionTime": "15:30:45",
        "transactionType": "Debit",
        "description": "ATM Withdrawal - Kochi MG Road",
        "amount": 2000.00,
        "currency": "INR",
        "transactionStatus": "Completed"
    }
]

const Transactions = () => {

    const [transactions, setTransactions] = useState([]);

    let getTxns = () => {
        setTimeout(() => {
            setTransactions(data)
        }, 1100)
    }

    useEffect(() => {
        getTxns();
    }, [])

    return (
        transactions.length === 0
            ? <div className='min-h-80 grid place-items-center'>
                <span className="-translate-8 component-loader"></span>
            </div>
            : <div className='flex flex-col gap-4 p-4'>
                <div>Transactions</div>
                {transactions.map((txn, index) => (
                    <div className='bg-[var(--background-2)] flex flex-row justify-between p-4 border-2 border-[var(--mid)] rounded-2xl' key={index}>
                        <div>
                            <div className='text-lg'>{txn.amount}</div>
                            <div className='text-neutral-500 text-xs'>{txn.transactionTime} - {txn.transactionDate}</div>
                            <div className='text-neutral-500 text-sm'>{txn.description}</div>
                        </div>
                        <div>
                            {txn.transactionType === "Credit"
                                ? <Icon className="text-green-500 rotate-225" icon="solar:arrow-up-broken" width="24" height="24" />
                                : <Icon className="text-red-500 rotate-45" icon="solar:arrow-up-broken" width="24" height="24" />
                            }
                        </div>
                    </div>
                ))}
            </div>
    )
}

export default Transactions