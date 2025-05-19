import { useEffect, useState } from "react"

const UserProfile = () => {

    const [userdata, setUserData] = useState({});

    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem("user")));
    }, [])

    return (
        <div className='flex flex-col gap-4 p-4 w-full'>
            <div>User Details</div>
            <div className='bg-[var(--background-2)] flex flex-col gap-2 p-4 border-2 border-[var(--mid)] rounded-2xl'>
                <div className='flex flex-row justify-between'>
                    <div className='text-lg font-semibold'>{userdata.name}</div>
                </div>
                <div className='text-neutral-500 text-sm'>@{userdata.accountNumber}</div>
                <div className='text-neutral-500 text-sm'>{userdata.email}</div>
                <div className='text-neutral-500 text-sm'>{userdata.phone}</div>
            </div>

            <div>Address</div>
            <div className='bg-[var(--background-2)] flex flex-col gap-2 p-4 border-2 border-[var(--mid)] rounded-2xl'>
                {userdata.address}
            </div>

            <div>
                <div>Roles</div>
                <div className='bg-[var(--background-2)] flex flex-row gap-2 p-4 border-2 border-[var(--mid)] rounded-2xl'>
                    {userdata.role}
                </div>
            </div>
        </div>
    )
}

export default UserProfile