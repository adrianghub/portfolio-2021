import React from 'react';
import ContactForm from '../components/ContactForm';

import SectionContainer from "./SectionContainer"


const Contact = () => {
    return (
        <SectionContainer id="contact" title="Contact" maxWidth="sm" reverse>
            <ContactForm />
        </SectionContainer>
    )
}

export default Contact;