import Container from "./container";
import Image from "next/image";
import Logo from "../../public/logo.png";
import Link from "next/link";
import { authOptions } from "@/auth";
import { signIn } from "next-auth/react";
import { getServerSession, Session } from "next-auth";
import LoginButton from "../auth/LoginButton";

const NavLinks = [
  {
    title: "Home",
  },
  {
    title: "Features",
  },
  {
    title: "Feedback",
  },
  {
    title: "Pricing",
  },
];

const Header = async() => {
    const session: Session | null =await getServerSession(authOptions)
  return (
    <Container>
        <nav className="mt-14 h-8 flex items-center justify-between">
            <Link href="/" className="flex items-center  gap-2">
            <Image src={Logo} alt="Logo" width={30} height={30} className="h-[30px] w-[30px]" />

                <p className="text-neutral-800 font-jakarta text-3xl font-semibold">ossean</p>
            </Link>

            <div className=" flex gap-8 ">
                {
                    NavLinks?.map((item, idx)=>(
                        <Link className="text-neutral-500 font-gist transition-all hover:text-neutral-800" href="" key={idx}>
                            {item.title}
                        </Link>
                    ))
                }
            </div>
{
    session && session?.user ? (
        <p>{session.user.name}</p>
    ):
    ( 
        <LoginButton/>
            )
            }
        </nav>
    </Container>
  );
};

export default Header;
