import Icon from '@mdi/react';

function ContactContainer(props) {
    return (
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            <div className="
                bg-dracula-orchid
                text-city-lights 
                w-28
                h-28
                md:w-32
                md:h-32
                flex 
                flex-col 
                justify-center 
                items-center
                cursor-pointer
                transition 
                duration-500
                hover:text-soothing-breeze">
                <Icon path={props.icon}/>
            </div>
        </a>
    );
}   

export default ContactContainer;