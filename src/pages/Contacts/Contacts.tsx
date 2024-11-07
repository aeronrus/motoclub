import React from 'react';
import './Contacts.css';
import ContactList from '../../modules/ContactsList/ContactsList';
import ContactsGeo from '../../modules/ContactsGeo/ContactsGeo';
import Title from '../../ui-kit/Title/Title';

const Contacts: React.FC = () => {
  return (
    <article className="contact">
      <div className="container">
        <div className="contacts">
          <Title key="contact-info" title="Контактная информация" />
          <Title key="enduro-rental" title="Прокат эндуро, мотоциклов и питбайков EndurocaTTT" />
          <ContactsGeo location="Эндурокат" />
          <ContactList />
        </div>
      </div>
    </article>
  );
};

export default Contacts;
