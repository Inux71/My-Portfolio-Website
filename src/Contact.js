import ColourBoldText from "./ColourBoldText";
import {mdiFacebookMessenger, mdiLinkedin, mdiEmail} from '@mdi/js'
import ContactContainer from "./ContactContainer";
import MailContainer from "./MailContainer";

function Contact() {
    return (
        <section id="contact" className="
            h-screen
            flex
            flex-col
            justify-center
            items-center
            text-city-lights">
            <div className="w-full">
                <h1 className="
                    text-center
                    text-sour-lemon">
                    Contact
                </h1>
                <p className="text-center">
                    If you want to contact me you can do so via 
                    <ColourBoldText> messenger</ColourBoldText>, 
                    <ColourBoldText> linkedin </ColourBoldText> 
                    or <ColourBoldText>e-mail.</ColourBoldText>
                </p>
            </div>
            <div className="
                mt-4
                w-full
                flex 
                flex-wrap
                justify-center
                items-center
                gap-4">
                <ContactContainer url="#" icon={mdiFacebookMessenger}/>
                <ContactContainer url="https://www.linkedin.com/in/kacper-grabiec-878190202/" icon={mdiLinkedin}/>
                <MailContainer icon={mdiEmail}/>
            </div>
        </section>
    );
}

export default Contact;