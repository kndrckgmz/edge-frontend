'use client'

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export default function LoginWall() {

    const [passwordToggle, setPasswordToggle] = useState(false);
    const [loginRegister, setLoginRegister] = useState(false);

    useEffect(() => {
        setPasswordToggle(false)
    }, [loginRegister])


    const handlePasswordToggle = () => {
        if (passwordToggle === false) {
            setPasswordToggle(true)
        }
        else {
            setPasswordToggle(false)
        }
    }

    return (loginRegister === true
        ? <Login passwordToggle={passwordToggle} handlePasswordToggle={handlePasswordToggle} setLoginRegister={setLoginRegister} />
        : <Register passwordToggle={passwordToggle} handlePasswordToggle={handlePasswordToggle} setLoginRegister={setLoginRegister} />
    )
}

const Login = ({ passwordToggle, handlePasswordToggle, setLoginRegister }) => {
    return (
        <div className="login-container">
            <Image
                // className="dark:invert"
                src="/logos/EDGE Black no background.png"
                alt="EDGE logo"
                width={180}
                height={38}
                priority
            />
            <div className="login-input-label-container">
                Email
                <input className="input" type="email"></input>
            </div>
            <div className="login-input-label-container">
                Password
                <div className="password-input-container">
                    <input className="password-input" type={passwordToggle ? "text" : "password"}></input>
                    <div className="password-toggle" onClick={handlePasswordToggle}>
                        {passwordToggle
                            ? <Icon icon="fluent:eye-16-regular" />
                            : <Icon icon="fluent:eye-off-16-regular" />
                        }
                    </div>
                </div>
            </div>
            <button className="primary-button w-full" type="submit">Login</button>
            <div>New to EDGE? <button className="underline" onClick={() => setLoginRegister(false)}>Register</button></div>
        </div>
    )
}

const Register = ({ passwordToggle, handlePasswordToggle, setLoginRegister }) => {

    const [checkboxToggle, setCheckboxToggle] = useState(false);

    const handleCheckboxToggle = () => {
        if (checkboxToggle === false) {
            setCheckboxToggle(true)
        }
        else {
            setCheckboxToggle(false);
        }
    }

    return (
        <div className="login-container">
            <Image
                // className="dark:invert"
                src="/logos/EDGE Black no background.png"
                alt="EDGE logo"
                width={180}
                height={38}
                priority
            />
            <div className="login-input-label-container">
                Name
                <input className="input" type="name"></input>
            </div>
            <div className="login-input-label-container">
                Date of Birth
                <input className="input" type="date"></input>
            </div>
            <div className="login-input-label-container">
                Email
                <input className="input" type="email"></input>
            </div>
            <div className="login-input-label-container">
                Password
                <input className="input" type="password"></input>
            </div>
            <div className="login-input-label-container">
                Confirm Password
                <div className="password-input-container">
                    <input className="password-input" type={passwordToggle ? "text" : "password"}></input>
                    <div className="password-toggle" onClick={handlePasswordToggle}>
                        {passwordToggle
                            ? <Icon icon="fluent:eye-16-regular" />
                            : <Icon icon="fluent:eye-off-16-regular" />
                        }
                    </div>
                </div>
            </div>
            <div className="login-input-label-container">
                Would you like to register as an Admin?
                {/* <input className="input" type="checkbox"></input> */}
                <div className={`checkbox-pill ${checkboxToggle === true ? "checkbox-pill-open" : ""}`} onClick={handleCheckboxToggle}>
                    <div className={`checkbox-toggle ${checkboxToggle === true ? "checkbox-toggle-open" : ""}`}></div>
                </div>
            </div>
            <button className="primary-button w-full" type="submit">Register</button>
            <div>Have an account? <button className="underline" onClick={() => setLoginRegister(true)}>Login</button></div>
        </div>
    )
}