function BoldText({children}) {
    return <span className="font-bold">{children}</span>;
}

function ColourBoldText({children}) {
    return <span className="font-bold text-sour-lemon">{children}</span>;
}

function About() {
    const dateOfBirth = new Date(2001, 12, 11);
    const currentDate = new Date();
    const years = currentDate.getFullYear() - dateOfBirth.getFullYear();

    return (
        <section className="
            h-screen
            flex
            justify-center
            items-center
            text-city-lights">
            <div className="w-1/2">

            </div>
            <div className="w-1/2">
                <h1 className="
                    text-sour-lemon
                    text-center">
                    About
                </h1>
                <p className="text-justify">
                    I'm a {years} years old man who is fascinated by programming.
                    I study <BoldText>Computer Science </BoldText> 
                    at <BoldText>Politechnika Śląska. </BoldText>
                    I don't use one technology. 
                    I like programming different things from
                    <BoldText> mobile/web</BoldText> apps (
                    <ColourBoldText>React</ColourBoldText>,
                    <ColourBoldText> Flutter</ColourBoldText>)
                    <BoldText> games/simulations</BoldText>,
                     (<ColourBoldText>C++</ColourBoldText>,
                    <ColourBoldText> C#</ColourBoldText>,
                    <ColourBoldText> Unity</ColourBoldText>) 
                    to<BoldText> machine learning </BoldText>
                    (<ColourBoldText>Python</ColourBoldText>,
                    <ColourBoldText> TensorFlow</ColourBoldText>)
                </p>
                <p className="text-justify">
                    I'm also interested in <BoldText>sport </BoldText>
                    and<BoldText> music. </BoldText>
                    I love watching <BoldText>football</BoldText> and playing
                    <ColourBoldText> guitar/bass</ColourBoldText> in free time.
                </p>
            </div>
        </section>
    );
}

export default About;