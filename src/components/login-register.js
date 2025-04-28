'use client'

import "@/app/loginwall.css"
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function LoginWall({ toggleAuth }) {

    const [passwordToggle, setPasswordToggle] = useState(false);
    const [registerActive, setRegisterActive] = useState(false);

    useEffect(() => {
        setPasswordToggle(false)
    }, [registerActive])


    const handlePasswordToggle = () => {
        if (passwordToggle === false) {
            setPasswordToggle(true)
        }
        else {
            setPasswordToggle(false)
        }
    }

    return (registerActive === false
        ? <Login passwordToggle={passwordToggle} handlePasswordToggle={handlePasswordToggle} setRegisterActive={setRegisterActive} />
        : <Register passwordToggle={passwordToggle} handlePasswordToggle={handlePasswordToggle} setRegisterActive={setRegisterActive} />
    )
}

const Login = ({ passwordToggle, handlePasswordToggle, setRegisterActive }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const { toggleAuth } = useAuth();

    const handleError = (err) => {
        setError(err)
        setTimeout(() => {
            setError("")
        }, 3000)
    }

    async function handlelogin() {
        if (email === "") {
            handleError("Enter Email")
        }
        else if (password === "") {
            handleError("Enter Password")
        }
        else if (password !== "test123") {
            handleError("Wrong Password")
        }
        else {
            localStorage.setItem('token', 'ey0sdfnslkdsfljssldkf')
            toggleAuth()
        }
    }

    return (
        <div className="login-container">
            <Image
                className="dark:invert"
                src="/edgeblack.svg"
                alt="EDGE logo"
                width={150}
                height={30}
                priority
            />
            <div className="login-input-label-container">
                Email
                <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required></input>
            </div>
            <div className="login-input-label-container">
                Password
                <div className="password-input-container">
                    <input className="password-input" type={passwordToggle ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                    <div className="password-toggle" onClick={handlePasswordToggle}>
                        {passwordToggle
                            ? <Icon className="text-[var--(mid)]" icon="fluent:eye-16-regular" />
                            : <Icon className="text-[var--(mid)]" icon="fluent:eye-off-16-regular" />
                        }
                    </div>
                </div>
            </div>
            <div className="form-error">{error}</div>
            <button onClick={handlelogin} className="primary-button w-full" type="submit">Login</button>
            <button onClick={() => setRegisterActive(true)} className="secondary-button w-full">Register</button>
        </div>
    )
}

const Register = ({ passwordToggle, handlePasswordToggle, setRegisterActive }) => {

    const [checkboxToggle, setCheckboxToggle] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("")

    const { toggleAuth } = useAuth();

    const handleError = (err) => {
        setError(err)
        setTimeout(() => {
            setError("")
        }, 3000)
    }

    async function handleRegister() {
        if (name === "") {
            handleError("Enter Name")
        }
        else if (email === "") {
            handleError("Enter Email")
        }
        else if (password === "") {
            handleError("Enter Password")
        }
        else if (confirmpassword !== password) {
            handleError("Passwords to not match")
        }
        else {
            localStorage.setItem('token', 'ey0sdfnslkdsfljssldkf')
            toggleAuth()
        }
    }

    return (
        <div className="login-container">
            <Image
                className="dark:invert"
                src="/edgeblack.svg"
                alt="EDGE logo"
                width={150}
                height={30}
                priority
            />
            <div className="login-input-label-container">
                Name
                <input className="input" type="name" value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className="login-input-label-container">
                Email
                <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="login-input-label-container">
                Password
                <div className="password-input-container">
                    <input className="password-input" type={passwordToggle ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    <div className="password-toggle" onClick={handlePasswordToggle}>
                        {passwordToggle
                            ? <Icon className="text-[var--(mid)]" icon="fluent:eye-16-regular" />
                            : <Icon className="text-[var--(mid)]" icon="fluent:eye-off-16-regular" />
                        }
                    </div>
                </div>
            </div>
            <div className="login-input-label-container">
                Confirm Password
                <input className="input" type={passwordToggle ? "text" : "password"} value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
            </div>
            <div className="form-error">{error}</div>
            <button onClick={handleRegister} className="primary-button w-full" type="submit">Register</button>
            <button onClick={() => setRegisterActive(false)} className="secondary-button w-full">Login</button>
        </div>
    )
}