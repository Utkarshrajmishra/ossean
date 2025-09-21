import Register from "@/components/onboarding/register"

const Page = () => {
  return (
    <div className="h-screen overflow-hidden w-full bg-midnight relative ">
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center">
        <Register />
      </div>
    </div>
  )
}

export default Page
