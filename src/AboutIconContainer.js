import Icon from "@mdi/react";

function AboutIconContainer({icon}) {
    return (
        <div className="
            bg-dracula-orchid
            text-city-lights 
            w-20
            h-20
            md:w-32
            md:h-32
            flex 
            flex-col 
            justify-center 
            items-center">
            <Icon path={icon}/>
        </div>
    );
}

export default AboutIconContainer;