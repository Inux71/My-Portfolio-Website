import Icon from "@mdi/react";

function ProjectContainer(props) {
    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <div className="
                rounded
                bg-city-lights 
                text-dracula-orchid 
                w-96 
                h-96 
                flex 
                flex-col 
                justify-center 
                items-center
                cursor-pointer
                transition 
                duration-500
                hover:bg-soothing-breeze
                hover:text-city-lights">
                {<Icon path={props.icon} size={1}/>}
                <h5>{props.name}</h5>
                <p>{props.languages}</p>
            </div>
        </a>
    );
}

export default ProjectContainer;