import React from 'react';
import './Contacts.css';
import ContactList from '../../modules/ContactList/ContactList';
import ContactsGeo from '../../modules/ContactsGeo/ContactsGeo';

const Contacts: React.FC = () => {
  return (
    <article className="contact">
      <div className="container">
        <div className="contacts">
          <h1 className="contacts__title">
            Контактная информация
            <br />
            Прокат эндуро, мотоциклов и питбайков EndurocaTTT
          </h1>
          <ContactsGeo location="Эндурокат" />
          <ContactList />
        </div>
      </div>
    </article>
  );
};

export default Contacts;
