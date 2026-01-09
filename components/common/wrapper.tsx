const Wrapper=({children}:{children:React.ReactNode})=>{
    return(
        <section className="lg:max-w-7xl w-full  h-fit">
            {children}
        </section>
    )
}

export default Wrapper