import Icon from "@mdi/react";
import { useState } from "react";

function ProjectContainer({url, icons, name, languages, description}) {
    const [isDesriptionShown, setIsDescriptionShown] = useState(false);

    return (
        <a onMouseEnter={() => setIsDescriptionShown(true)} onMouseLeave={() => setIsDescriptionShown(false)} href={url} target="_blank" rel="noopener noreferrer">
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
                {!isDesriptionShown ? 
                <>
                    <div className="flex flex-row gap-2">
                    {icons.map((icon, index) => {
                        return <Icon  key={index} path={icon} size={1}/>
                    })}
                    </div>
                    <h5>{name}</h5>
                    <p className="text-base">{languages}</p>
                </> : 
                <p className="
                    text-center
                    text-xl
                    m-4">{description}</p>
                }
            </div>
        </a>
    );
}

export default ProjectContainer;