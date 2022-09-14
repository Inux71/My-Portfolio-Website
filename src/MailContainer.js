import Icon from '@mdi/react';

function MailContainer({mail, subject, icon}) {
    return (
        <a href={`mailto:${mail}?subject=${subject}&body=${""}`}>
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
                hover:text-sour-lemon">
                <Icon path={icon}/>
            </div>
        </a>
    );
}

export default MailContainer;