import { authOptions } from "@/auth";
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session=await getServerSession(authOptions)
  if(session && session?.id && session?.isNewUser){
    redirect('/register')
  }
  return (
    <div className="flex bg-midnight flex-col bg- gap-18">

      <Header/>
      <Hero/>
    </div>
  );
}
