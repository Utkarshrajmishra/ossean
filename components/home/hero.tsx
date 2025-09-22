"use client"
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Container from "./container";
import HeroImage from "../../public/image.png";
import { signOut } from "next-auth/react";

const Hero = () => {
  return (
    <Container>
      <main className="mt-6 gap-8 md:gap-12 font-gist flex flex-col items-center px-4">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-neutral-800 tracking-tight leading-tight md:leading-[1.2] max-w-2xl sm:max-w-3xl md:max-w-4xl text-center font-semibold">
          <span className="inline-block text-neutral-900 bg-emerald-100 rounded px-1 -rotate-2">
            Everything
          </span>{" "}
          that matters to you, in{" "}
          <span className="inline-block text-neutral-900 bg-blue-100 rounded px-1 rotate-2">
            one-link
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg max-w-md sm:max-w-xl md:max-w-3xl text-center text-neutral-500">
          Bring together your socials, content, work and track performance in a
          single shareable link.
        </p>

        {/* CTA button */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={()=>signOut()} className="bg-neutral-700 flex items-center justify-center gap-2 cursor-pointer text-white py-2.5 px-6 sm:py-3 sm:px-8 hover:bg-neutral-800 rounded-full text-sm sm:text-base">
            Create your ossean <ChevronRight className="size-5" />
          </button>
        </div>

        {/* Hero image */}
        <div className="w-full relative mt-6 sm:mt-10">
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="w-full h-auto border-2 sm:border-4 rounded-xl 
              [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] 
              [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
            priority
          />
        </div>
      </main>
    </Container>
  );
};

export default Hero;
