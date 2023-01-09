import React from "react";
import ContactLanding from "./sections/contactLanding/ContactLanding";
import ContactItems from "./sections/contactItems/ContactItems";
import ContactForm from "./sections/contactForm/ContactForm";

function ContactUs({onHandleLinksActiveClosed}) {
  return (
    <main className="contact-page" onClick={onHandleLinksActiveClosed}>
      <ContactLanding />
      <ContactItems />
      {/* <ContactForm /> */}
    </main>
  );
}
export default ContactUs;
