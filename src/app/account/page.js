'use client'

import UserProfile from "@/components/userProfile"
import LoginWall from "@/components/login-register"
import PageLoader from "@/components/pageloader"
import { useAuth } from "@/context/AuthContext";

const Account = () => {

    const { auth } = useAuth();

    return (
        <>
            {auth === null
                ? <PageLoader />
                : auth === true
                    ? <UserProfile />
                    : <LoginWall />}
        </>
    )
}

export default Account