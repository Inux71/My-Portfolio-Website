import Icon from '@mdi/react';

function MailContainer({icon}) {
    const mail = "grabiec.kacper01@gmail.com";
    const subject = "Contact request";

    return (
        <a href={`mailto:${mail}?subject=${subject}&body=${"..."}`}>
            <div className="
                bg-dracula-orchid
                text-city-lights 
                w-32
                h-32
                flex 
                flex-col 
                justify-center 
                items-center
                cursor-pointer
                transition 
                duration-500
                hover:text-soothing-breeze">
                <Icon path={icon}/>
            </div>
        </a>
    );
}

export default MailContainer;