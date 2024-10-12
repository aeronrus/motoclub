import React from 'react';

interface IContactItemProps {
  phoneNumber: string;
}

const ContactItem: React.FC<IContactItemProps> = ({ phoneNumber }) => {
  return (
    <div className="contact-item">
      <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
      <span role="img" aria-label="phone">
        📞
      </span>
    </div>
  );
};

export default ContactItem;
