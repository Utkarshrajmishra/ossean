import Profile from "@/components/onboarding/profile"
import Social from "@/components/onboarding/social"

const Page=()=>{
    return(
        <div className="h-screen flex overflow-hidden flex-col items-center mt-10">
            <div className="h-2 rounded-full relative w-[350px] bg-secondary border-1">
                <div className="absolute top-0 rounded-full left-0 h-full w-1/2 bg-neutral-800"></div>
            </div>
        {/* <Social/> */}
        <Profile/>
        </div>
    )
}

export default Page