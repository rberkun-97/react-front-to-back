import React from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";

export const Contacts = () => {
  const contactContext = React.useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <React.Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </React.Fragment>
  );
};

export default Contacts;
