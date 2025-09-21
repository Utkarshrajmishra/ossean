import Register from "@/components/onboarding/register"

const Page = () => {
  return (
    <div className="min-h-screen w-full bg-midnight relative overflow-hidden">
      {/* Top Fade Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #EDF0F2 1px, transparent 1px),
            linear-gradient(to bottom, #EDF0F2 1px, transparent 1px)
          `,
          backgroundSize: "20px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center">
        <Register />
      </div>
    </div>
  )
}

export default Page
