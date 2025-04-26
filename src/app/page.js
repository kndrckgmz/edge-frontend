'use client'

import LoginWall from "@/components/login-register";
import Dashboard from "@/components/dashboard";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import Pageloader from "@/components/pageloader";

export default function Home() {

  const { auth } = useAuth();

  return (
    <>
      {auth === null
        ? <Pageloader />
        : auth === true
          ? <Dashboard />
          : <LoginWall />}
    </>
  );
}
