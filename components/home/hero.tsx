import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Container from "./container";

const Hero = () => {
  return (
    <Container>
      {" "}

        <main className="mt-6 font-gist flex gap-12 flex-col items-center">
            <p className="bg-secondary w-fit h-fit border-1 py-1 px-3 text-neutral-600 rounded-full">Your own ossean of links</p>

                        <h1 className="text-7xl font-jakarta tracking-wide leading-20 max-w-5xl text-center">
                
                <span className="bg-blue-100">Everything</span> that matters to you, in  <span className="bg-pink-100">one-link</span></h1>
                <p className="text-xl   max-w-5xl text-gray-600 text-center">Bring together your socials, content, work and track performance in a single shareable link.</p>
                <button className="bg-neutral-700 flex gap-1 items-center shadow-xl hover:bg-neutral-800 py-3 px-4 rounded-full   font-light text-white">Create your ossean <ChevronRight className="size-5"/> </button>
        </main>
    </Container>
  );
};

export default Hero;
