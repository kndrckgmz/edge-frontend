const userData = {
    "userId": "user12345",
    "username": "john.doe",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phoneNumber": "+91 9876543210",
    "address": {
        "street": "123 Main Street",
        "city": "Kochi",
        "state": "Kerala",
        "postalCode": "682001",
        "country": "India"
    },
    "registrationDate": "2024-08-15T10:00:00Z",
    "lastLogin": "2025-04-26T17:25:00Z",
    "isActive": true,
    "roles": ["customer", "premium"],
    "preferences": {
        "language": "en",
        "currency": "INR",
        "notificationsEnabled": true
    }
}

const UserProfile = () => {
    return (
        <div className='flex flex-col gap-4 p-4 w-full'>
            <div>User Details</div>
            <div className='flex flex-col gap-2 p-4 border-2 border-[var(--mid)] rounded-2xl'>
                <div className='flex flex-row justify-between'>
                    <div className='text-lg font-semibold'>{userData.firstName} {userData.lastName}</div>
                    <div className='text-sm text-neutral-500'>{userData.userId}</div>
                </div>
                <div className='text-neutral-500 text-sm'>@{userData.username}</div>
                <div className='text-neutral-500 text-sm'>{userData.email}</div>
                {userData.phoneNumber && (
                    <div className='text-neutral-500 text-sm'>{userData.phoneNumber}</div>
                )}
            </div>

            <div>Address</div>
            {userData.address ? (
                <div className='flex flex-col gap-2 p-4 border-2 border-[var(--mid)] rounded-2xl'>
                    <div className='text-neutral-500 text-sm'>{userData.address.street}</div>
                    <div className='text-neutral-500 text-sm'>{userData.address.city}, {userData.address.state} - {userData.address.postalCode}</div>
                    <div className='text-neutral-500 text-sm'>{userData.address.country}</div>
                </div>
            ) : (
                <div className='text-neutral-500 text-sm'>No address information available.</div>
            )}

            <div>Account Status</div>
            <div className='flex flex-row justify-between p-4 border-2 border-[var(--mid)] rounded-2xl'>
                <div className='text-sm'>{userData.isActive ? 'Active' : 'Inactive'}</div>
                <div className='text-sm text-neutral-500'>Registered on: {new Date(userData.registrationDate).toLocaleDateString()}</div>
            </div>

            {userData.roles && userData.roles.length > 0 && (
                <div>
                    <div>Roles</div>
                    <div className='flex flex-row gap-2 p-4 border-2 border-[var(--mid)] rounded-2xl'>
                        {userData.roles.map((role, index) => (
                            <div key={index} className='bg-gray-100 text-gray-700 rounded-full px-2 py-1 text-xs'>{role}</div>
                        ))}
                    </div>
                </div>
            )}

            {userData.preferences && (
                <div>
                    <div>Preferences</div>
                    <div className='flex flex-col gap-2 p-4 border-2 border-[var(--mid)] rounded-2xl'>
                        <div className='text-sm'>Language: {userData.preferences.language}</div>
                        <div className='text-sm'>Currency: {userData.preferences.currency}</div>
                        <div className='text-sm'>Notifications: {userData.preferences.notificationsEnabled ? 'Enabled' : 'Disabled'}</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserProfile