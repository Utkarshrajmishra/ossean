import Container from "../home/container"
import Image from "next/image";
import Insta from "../../public/socials/insta.jpg"

const socials = [
  {
    id: 1,
    title: "WhatsApp",
    name: "WhatsApp",
    website: "https://www.whatsapp.com/",
    image: Insta,
  },
  {
    id: 2,
    title: "X",
    name: "Twitter (X)",
    website: "https://x.com/",
    image: Insta,
  },
  {
    id: 3,
    title: "Instagram",
    name: "Instagram",
    website: "https://www.instagram.com/",
    image: Insta,
  },
  {
    id: 4,
    title: "Facebook",
    name: "Facebook",
    website: "https://www.facebook.com/",
    image: Insta,
  },
  {
    id: 5,
    title: "LinkedIn",
    name: "LinkedIn",
    website: "https://www.linkedin.com/",
    image: Insta,
  },
  {
    id: 6,
    title: "YouTube",
    name: "YouTube",
    website: "https://www.youtube.com/",
    image: Insta,
  },
  {
    id: 7,
    title: "Reddit",
    name: "Reddit",
    website: "https://www.reddit.com/",
    image: Insta,
  },
  {
    id: 8,
    title: "Website",
    name: "Official Website",
    website: "https://example.com",
    image: Insta,
  },
  {
    id: 9,
    title: "Snapchat",
    name: "Snapchat",
    website: "https://www.snapchat.com/",
    image: Insta,
  },
  {
    id: 10,
    title: "Discord",
    name: "Discord",
    website: "https://discord.com/",
    image: Insta,
  },
  {
    id: 11,
    title: "Telegram",
    name: "Telegram",
    website: "https://telegram.org/",
    image: Insta,
  },
  {
    id: 12,
    title: "Pinterest",
    name: "Pinterest",
    website: "https://www.pinterest.com/",
    image: Insta,
  },
];


const Profile=()=>{
    return(
        <Container>
            <section className="font-gist flex flex-col items-center gap-4">
                <h1 className="text-4xl  mt-12 text-neutral-800 font-bold font-gist text-center">Add profile deatils</h1>
                <p className="text-neutral-500">Add your profile image, name and bio.</p>
                <div className="grid grid-cols-4 gap-10 mt-8">
                {
                    socials?.map((item, index)=>(
                        <div className="border-1 border-neutral-300 py-5 px-2 flex flex-col items-center justify-center rounded-lg">
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

export default Profile