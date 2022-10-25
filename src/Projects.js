import ProjectContainer from "./ProjectContainer";
import {mdiGithub} from '@mdi/js'

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
                <ProjectContainer url="https://github.com/Inux71/My-Portfolio-Website" icon={mdiGithub} name="My Portfolio Website" languages="React"></ProjectContainer>
                <ProjectContainer url="https://github.com/Inux71/RPN-Calculator" icon={mdiGithub} name="RPN Calculator" languages="HTML CSS JavaScript"></ProjectContainer>
                <ProjectContainer url="https://github.com/Inux71/MVVMTotalCommander" icon={mdiGithub} name="MVVM Total Commander" languages="C#"></ProjectContainer>
                <ProjectContainer url="https://github.com/Inux71/MLSoundsClassification" icon={mdiGithub} name="ML Sound Classification (Co-op)" languages="Python"></ProjectContainer>
                <ProjectContainer url="https://github.com/TheLukaszNs/AntSim" icon={mdiGithub} name="Ant Simulation (Co-op)" languages="C++"></ProjectContainer>
                <ProjectContainer url="https://github.com/TheLukaszNs/MVVMShop" icon={mdiGithub} name="MVVM Shop (Co-op)" languages="C#"></ProjectContainer>
                <ProjectContainer url="https://github.com/TheLukaszNs/WPFQuiz" icon={mdiGithub} name="WPF Quiz (Co-op)" languages="C#"></ProjectContainer>
                <ProjectContainer url="https://github.com/TheLukaszNs/GDXFractals" icon={mdiGithub} name="GDX Fractals (Co-op)" languages="Java"></ProjectContainer>
            </div>
        </section>
    );
}

export default Projects;