import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllContacts, selectLoading, selectError } from '../redux/contacts/contactsSelectors';
import styled from 'styled-components';

const ContactsWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ContactItem = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 10px;
`;

const ErrorMessage = styled.div`
  text-align: center;
  color: red;
`;

const Contacts = () => {
  const contacts = useSelector(selectAllContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <ContactsWrapper>
      {loading ? (
        <div>Loading contacts...</div>
      ) : error ? (
        <ErrorMessage>An error occurred: {error}</ErrorMessage>
      ) : (
        contacts.map((contact) => (
          <ContactItem key={contact.id}>
            <h3>{contact.name}</h3>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
          </ContactItem>
        ))
      )}
    </ContactsWrapper>
  );
};

export default Contacts;






