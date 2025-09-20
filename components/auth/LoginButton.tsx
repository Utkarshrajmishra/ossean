// components/LoginButton.tsx
"use client";

import { signIn } from "next-auth/react";

const LoginButton = () => {
  return (
    <button 
      onClick={() => signIn("google")}
      className="bg-secondary font-gist py-2 px-4 rounded-full text-neutral-800 hover:bg-secondary/40 transition-all cursor-pointer border-1"
    >
      Login
    </button>
  );
};

export default LoginButton;