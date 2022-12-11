function Home() {
    return (
        <section id="home" className="
            h-screen
            flex
            flex-col
            lg:flex-row
            justify-center
            items-center
            text-city-lights">
            <div className="
                w-full
                lg:w-1/2">
                <h5>Hi everyone!</h5>
                <h1 className="text-sour-lemon">
                    I'm Kacper Grabiec
                </h1>
            </div>
            <div className="
                w-full
                lg:w-1/2
                flex
                flex-col
                justify-center
                items-center">
            </div>
        </section>
    );
}

export default Home;