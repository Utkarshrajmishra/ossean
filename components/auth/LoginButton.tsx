// components/LoginButton.tsx
"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";


const LoginButton = () => {
  return (
    <button 
    onClick={()=>signIn('google')}
      className="bg-secondary font-gist py-1.5 px-4 rounded-full text-neutral-800 hover:bg-secondary/40 transition-all cursor-pointer border-1"
    >
      Login
    </button>
  );
};

export default LoginButton;