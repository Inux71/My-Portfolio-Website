import ProjectContainer from "./ProjectContainer";
import {
    mdiGithub,
    mdiAccountGroup
} from '@mdi/js'

function Projects() {
    return (
        <section id="projects" className="
            min-h-screen
            flex
            flex-col
            justify-center
            items-center
            text-city-lights">
            <h1 className="text-sour-lemon">
                Projects
            </h1>
            <div className="
                mt-5
                flex 
                flex-wrap
                justify-center
                items-center
                gap-4">
                <ProjectContainer 
                    url="https://github.com/Inux71/My-Portfolio-Website" 
                    icons={[mdiGithub]} 
                    name="My Portfolio Website" 
                    languages="React"
                    description="My website's source code."/>

                <ProjectContainer 
                    url="https://github.com/TheLukaszNs/AntSim" 
                    icons={[mdiGithub, mdiAccountGroup]} 
                    name="Ant Simulation" 
                    languages="C++"
                    description="Graphical visualisation of ant simulation made for university."/>

                <ProjectContainer 
                    url="https://github.com/TheLukaszNs/GDXFractals" 
                    icons={[mdiGithub, mdiAccountGroup]} 
                    name="GDX Fractals" 
                    languages="Java"
                    description="A graphical fractals visualisation made for university."/>

                <ProjectContainer
                    url="https://github.com/Inux71/RPN-Calculator" 
                    icons={[mdiGithub]} 
                    name="RPN Calculator" 
                    languages="HTML CSS JS"
                    description="A Reverse-Polish-Notation mobile calculator made for university."/>

                <ProjectContainer 
                    url="https://github.com/TheLukaszNs/MVVMShop" 
                    icons={[mdiGithub, mdiAccountGroup]} 
                    name="MVVM Shop" 
                    languages="C#"
                    description="A desktop app simulating online shop made for university."/>

                <ProjectContainer 
                    url="https://github.com/Inux71/MVVMTotalCommander" 
                    icons={[mdiGithub]} 
                    name="MVVM Total Commander" 
                    languages="C#"
                    description="A simplified version of Total Commander made for university."/>

                <ProjectContainer 
                    url="https://github.com/TheLukaszNs/WPFQuiz" 
                    icons={[mdiGithub, mdiAccountGroup]} 
                    name="WPF Quiz" 
                    languages="C#"
                    description="A desktop app to create and solve quizes made for university."/>

                <ProjectContainer 
                    url="https://github.com/Inux71/Timer" 
                    icons={[mdiGithub]} 
                    name="Timer" 
                    languages="Kotlin"
                    description="A countdown timer mobile app made for university."/>

                <ProjectContainer
                    url="https://github.com/Inux71/Web-Mobile-Editor"
                    icons={[mdiGithub]}
                    name="Web Mobile Editor"
                    languages="HTML CSS JS PHP"
                    description="A mobile drawing editor made for university."/>

                <ProjectContainer 
                    url="https://github.com/Inux71/MLSoundsClassification" 
                    icons={[mdiGithub, mdiAccountGroup]} 
                    name="ML Sound Classification" 
                    languages="Python"
                    description="Sound classificator made for university."/>
            </div>
        </section>
    );
}

export default Projects;