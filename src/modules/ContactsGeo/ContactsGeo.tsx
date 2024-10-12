import React from 'react';
import './ContactsGeo.css';

interface IContactsGeo {
  location: string;
}

const ContactsGeo: React.FC<IContactsGeo> = ({ location }) => {
  const yandexMapsUrl = `https://yandex.ru/maps/org/endurokat/214295874518/?ll=37.762581%2C56.108571&mode=search&sctx=ZAAAAAgBEAAaKAoSCRyygXSx80JAEWb5ugz%2FC0xAEhIJjNr9KsB3mz8RSSpTzEHQgT8iBgABAgMEBSgKOABArIIGSAFiPnJlYXJyPXNjaGVtZV9Mb2NhbC9HZW8vTmVhcmJ5U2VhcmNoL1Jlc2V0SWZXaW5kb3dEcmFnZ2VkQXdheT0xYjhyZWFycj1zY2hlbWVfTG9jYWwvR2VvL05lYXJieVNlYXJjaC9EaXNwbGF5SW5GaWx0ZXJTZXQ9MWIucmVhcnI9c2NoZW1lX0xvY2FsL0dlby9OZWFyYnlTZWFyY2gvQXNGaWx0ZXI9MWIwcmVhcnI9c2NoZW1lX0xvY2FsL0dlby9FbXB0eVJlc3VsdFdpbmRvd0lmRHJhZz0xYkByZWFycj1zY2hlbWVfTG9jYWwvR2VvL05lYXJieVNlYXJjaC9Nb3ZlV2luZG93QXRGaXJzdEZpbHRlcmluZz0xYjJyZWFycj1zY2hlbWVfTG9jYWwvR2VvL05lYXJieVNlYXJjaC9Tb3J0RGlzdGFuY2U9MWoCcnWdAc3MzD2gAQCoAQC9AYKw3ZLCAQbWl56ongaCAhLQrdC90LTRg9GA0L7QutCw0YKKAgCSAgCaAgxkZXNrdG9wLW1hcHM%3D&sll=37.762581%2C56.108571&sspn=0.089603%2C0.029044&text=%D0%AD%D0%BD%D0%B4%D1%83%D1%80%D0%BE%D0%BA%D0%B0%D1%82&z=14.46`;

  return (
    <div className="contacts__geo">
      Мы находимся здесь
      <span role="img" aria-label="Геопозиция">
        📍
      </span>
      <a href={yandexMapsUrl}>{location}</a>
    </div>
  );
};

export default ContactsGeo;
