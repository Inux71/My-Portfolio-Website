import ProjectContainer from "./ProjectContainer";

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
                <ProjectContainer url="https://github.com/Inux71/My-Portfolio-Website" onGithub={true} name="My Portfolio Website" languages="React"></ProjectContainer>
                <ProjectContainer url="https://github.com/Inux71/MVVMTotalCommander" onGithub={true} name="MVVM Total Commander" languages="C#"></ProjectContainer>
                <ProjectContainer url="https://github.com/Inux71/MLSoundsClassification" onGithub={true} name="ML Sound Classification (Co-op)" languages="Python"></ProjectContainer>
                <ProjectContainer url="https://github.com/TheLukaszNs/AntSim" onGithub={true} name="Ant Simulation (Co-op)" languages="C++"></ProjectContainer>
                <ProjectContainer url="https://github.com/TheLukaszNs/MVVMShop" onGithub={true} name="MVVM Shop (Co-op)" languages="C#"></ProjectContainer>
                <ProjectContainer url="https://github.com/TheLukaszNs/WPFQuiz" onGithub={true} name="WPF Quiz (Co-op)" languages="C#"></ProjectContainer>
                <ProjectContainer url="https://github.com/TheLukaszNs/GDXFractals" onGithub={true} name="GDX Fractals (Co-op)" languages="Java"></ProjectContainer>
            </div>
        </section>
    );
}

export default Projects;