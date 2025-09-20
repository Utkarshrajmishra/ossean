import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Container from "./container";
import HeroImage from "../../public/image.png"
const Hero = () => {
  return (
    <Container>
      <main className="mt-6 gap-12 font-gist flex flex-col items-center">
       
       <h1 className="text-7xl text-neutral-800 tracking-tight leading-20 max-w-4xl text-center font-semibold">
          <span className="inline-block text-neutral-900 bg-emerald-100 rounded px-1 -rotate-2">
            Everything
          </span>{" "}
          that matters to you, in{" "}
          <span className="inline-block text-neutral-900 bg-blue-100 rounded px-1 rotate-2">
            one-link
          </span>
        </h1>

        <p className="text-lg max-w-4xl text-center text-neutral-500">Bring together your socials, content, work and track performance in a single shareable link.</p>


<div className="flex gap-4">
        <button className="bg-neutral-700 flex items-center gap-1 cursor-pointer text-white py-3 px-6 hover:bg-neutral-800 rounded-full">
          Create your ossean <ChevronRight className="size-5"/>
        </button>
        </div>

 <div className="w-full relative">
  <Image
    src={HeroImage}
    alt="Hero Image"
    className="w-full h-auto border-4 rounded-xl 
      [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] 
      [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
    priority
  />
</div>



      </main>
    </Container>
  );
};

export default Hero;
