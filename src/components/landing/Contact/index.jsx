import React from 'react';
import { Container } from '../../../components/common';
import contact from '../../../assets/illustrations/contact.svg';
import { Details, Thumbnail, Wrapper } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
    </Thumbnail>
  </Wrapper>
);
