import React from "react";

import ContactForm from "../components/ContactForm";

import SectionContainer from "./SectionContainer";
import emailIcon from "../assets/email-icon.svg";

const Contact = () => {
  return (
    <SectionContainer
      id="contact"
      title="Contact"
      maxWidth="sm"
      icon={emailIcon}
      reverse
    >
      <ContactForm />
    </SectionContainer>
  );
};

export default Contact;
