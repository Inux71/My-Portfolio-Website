import BoldText from "./BoldText";
import ColourBoldText from "./ColourBoldText";
import {
    mdiGuitarElectric, 
    mdiController, 
    mdiLaptop, 
    mdiSoccer
} from "@mdi/js"
import AboutIconContainer from "./AboutIconContainer";
import { differenceInYears, parse } from "date-fns"

const birthDay = parse("11/12/2001", "dd/MM/yyyy", new Date());
const years = differenceInYears(new Date(), birthDay);


function About() {
    return (
        <section id="about" className="
            min-h-screen
            lg:h-screen
            flex
            flex-col
            lg:flex-row
            justify-center
            items-center
            text-city-lights">
            <div className="
                w-full
                lg:w-1/2
                flex 
                flex-wrap
                justify-center
                items-center
                gap-4
                text-city-lights
                bg-dracula-orchid">
                <div className="
                    w-full
                    flex 
                    flex-wrap
                    justify-center
                    items-center
                    gap-4">
                    <AboutIconContainer icon={mdiLaptop}/>
                    <AboutIconContainer icon={mdiController}/>
                    <AboutIconContainer icon={mdiGuitarElectric}/>
                    <AboutIconContainer icon={mdiSoccer}/>
                </div>
            </div>
            <div className="
                w-full
                lg:w-1/2">
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
                    <ColourBoldText> Flutter</ColourBoldText>),
                    <BoldText> games/simulations</BoldText>
                     (<ColourBoldText>C++</ColourBoldText>,
                    <ColourBoldText> C#</ColourBoldText>,
                    <ColourBoldText> Unity</ColourBoldText>) 
                    to<BoldText> machine learning </BoldText>
                    (<ColourBoldText>Python</ColourBoldText>,
                    <ColourBoldText> TensorFlow</ColourBoldText>).
                </p>
                <p className="text-justify">
                    I'm also interested in <BoldText>sport</BoldText>,
                    <BoldText> video games </BoldText>and<BoldText> music. </BoldText>
                    I love watching <BoldText>football</BoldText>, playing 
                    <ColourBoldText> games</ColourBoldText> and playing
                    <ColourBoldText> guitar/bass</ColourBoldText> in free time.
                </p>
            </div>
        </section>
    );
}

export default About;