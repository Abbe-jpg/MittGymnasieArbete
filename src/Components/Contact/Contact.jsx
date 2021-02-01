import React from 'react';
import './Contact.css';

const Contact = props => {
  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Skulle du <br />
              vilja kontakta oss?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Skicka ett mail till oss från formuläret nedan {''}
              <span className="mail">
                Albin.bruggeman@hotmail.com
              </span>
              :
            </p>
          </div>
        </div>
        <form id="contact-form" action="#">
          <input placeholder="Namn" name="name" type="text" required />
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Meddelande" type="text" name="message" />
          <input className="button" id="submit" value="Submit" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
