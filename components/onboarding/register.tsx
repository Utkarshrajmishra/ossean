import Container from "../home/container"
import { Input } from "../ui/input"
import Image from "next/image"

const Register = () => {
  return (
    <Container>
      <section className="font-gist  flex items-center justify-center h-screen px-4">
        <div className="bg-white border-1 shadow-lg rounded-2xl p-8 w-full max-w-lg text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <Image src="/logo.png" alt="Ossean Logo" width={56} height={56} />
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-800">
              Welcome to Ossean!
            </h2>
            <p className="text-neutral-500 text-sm sm:text-base leading-relaxed">
              Choose your Ossean username for <br />
              <span className="font-medium text-neutral-700">
                mandarinutkarshrajmishra@gmail.com
              </span>
            </p>
          </div>

          {/* Input Section */}
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="mandarin"
              className="h-12 rounded-lg text-black text-left  border border-neutral-300 focus:ring-2 focus:ring-neutral-400 focus:outline-none transition"
            />


            <p className="text-neutral-500 text-xs sm:text-sm">
              By continuing, you agree to receive updates from Ossean
            </p>
          </div>

          {/* Button */}
          <button className="bg-neutral-700 flex items-center justify-center gap-2 cursor-pointer text-white py-3 w-full hover:bg-neutral-800 rounded-full text-sm sm:text-base shadow-md transition-all duration-200">
            Continue
          </button>
        </div>
      </section>
    </Container>
  )
}

export default Register
