import ColourBoldText from "./ColourBoldText";
import Icon from "@mdi/react"
import {
    mdiLanguageCpp,
    mdiLanguageCsharp,
    mdiLanguageJava,
    mdiLanguagePython,
    mdiLanguageHtml5,
    mdiLanguageCss3,
    mdiLanguageJavascript,
    mdiReact,
    mdiGit,
    mdiUnity
} from "@mdi/js"

function Skills() {
    const liStyle = "list-disc text-2xl mb-5";
    const h4Style = "text-soothing-breeze";

    return (
        <section id="skills" className="
            h-screen
            flex
            justify-center
            items-center
            text-city-lights">
            <div className="w-1/2">
                <h1 className="
                    text-sour-lemon 
                    text-center">
                    Skills
                </h1>
                <h4 className={h4Style}>Advanced</h4>
                <ul className={liStyle}>
                    <li>Object-Oriented programming in <ColourBoldText>C++/C#</ColourBoldText> and <ColourBoldText>Java</ColourBoldText></li>
                    <li>Knowledge of <ColourBoldText>Python</ColourBoldText></li>
                    <li>Creating websites with <ColourBoldText>HTML/CSS/JavaScript</ColourBoldText></li>
                </ul>
                <h4 className={h4Style}>Basic</h4>
                <ul className={liStyle}>
                    <li>Creating web/mobile apps with <ColourBoldText>React</ColourBoldText> and <ColourBoldText>Flutter</ColourBoldText></li>
                    <li>Machine Learning with <ColourBoldText>TensorFlow</ColourBoldText></li>
                    <li>Knowledge of <ColourBoldText>SQL</ColourBoldText> and <ColourBoldText>Git</ColourBoldText></li>
                    <li>Creating games and simulations with <ColourBoldText>Unity</ColourBoldText></li>
                </ul>
            </div>
            <div className="
                w-1/2
                flex 
                flex-wrap
                justify-center
                items-center
                gap-4
                text-city-lights
                bg-dracula-orchid">
                <Icon path={mdiLanguageCpp} size={5}/>
                <Icon path={mdiLanguageCsharp} size={5}/>
                <Icon path={mdiLanguageJava} size={5}/>
                <Icon path={mdiLanguagePython} size={5}/>
                <Icon path={mdiLanguageHtml5} size={5}/>
                <Icon path={mdiLanguageCss3} size={5}/>
                <Icon path={mdiLanguageJavascript} size={5}/>
                <Icon path={mdiReact} size={5}/>
                <Icon path={mdiGit} size={5}/>
                <Icon path={mdiUnity} size={5}/>
            </div>
        </section>
    );
}

export default Skills;