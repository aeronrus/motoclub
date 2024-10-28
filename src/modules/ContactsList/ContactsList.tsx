import React from 'react';
import './ContactsList.css';
import ContactItem from '../../components/ContactItem/ContactItem';

const ContactsList: React.FC = () => {
  const phoneNumbers = ['+7 911 196-15-20', '+7 911 659-76-74'];

  return (
    <div className="contacts__list">
      {phoneNumbers.map((number, index) => (
        <ContactItem key={index} phoneNumber={number} />
      ))}
    </div>
  );
};

export default ContactsList;
