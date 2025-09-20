
interface ContainerProps{
    children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-full h-fit flex justify-center">
    <div className="max-w-6xl w-full h-fit">
      {children}
    </div>
    </div>
  )
}

export default Container