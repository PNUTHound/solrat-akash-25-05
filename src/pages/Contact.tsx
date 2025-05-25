import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '../components/contact/ContactForm';

const Contact: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Contact SolRat | Get in Touch</title>
        <meta name="description" content="Contact the SolRat team or join our community on social media." />
      </Helmet>
      
      <div className="pt-20">
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;