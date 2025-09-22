import Container from "../home/container"
import Image from "next/image";
import { socials } from "@/utils/social";



const Social=()=>{
    return(
        <Container>
            <section className="font-gist flex flex-col items-center gap-4">
                <h1 className="text-4xl mt-12 text-neutral-800 font-bold font-gist text-center">Which platforms are you one?</h1>
                <p className="text-neutral-500">Pick upto 2 to get started. You can update at any time</p>
                <div className="grid grid-cols-4 gap-10 mt-8">
                {
                    socials?.map((item, index)=>(
                        <div className="border-1 bg-secondary border-neutral-300 py-5 px-2 flex flex-col items-center justify-center rounded-lg">
                            <Image src={item.image} width={35} height={35} alt={item.name}/>
                            <p className="text-center mt-1 text-sm text-neutral-500">{item.name}</p>
                        </div>
                    ))
                }
                </div>
                          <button className="bg-neutral-700 w-1/3 mt-8 flex items-center justify-center gap-2 cursor-pointer text-white py-3 hover:bg-neutral-800 rounded-full text-sm sm:text-base shadow-md transition-all duration-200">
            Continue
          </button>

            </section>
        </Container>
    )
}

export default Social