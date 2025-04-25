'use client'

import LoginWall from "@/components/login-register";
import Dashboard from "@/components/dashboard";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import Pageloader from "@/components/pageloader";

export default function Home() {

  const { auth } = useAuth();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-4 pb-26">
      <div className="w-4xl max-w-full flex flex-col items-center">
        {auth === null
          ? <Pageloader />
          : auth === true
            ? <Dashboard />
            : <LoginWall />}
      </div>
    </div>
  );
}
