import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm.jsx';
import { ContactList } from 'components/ContactList/ContactList.jsx';
import { Filter } from 'components/Filter/Filter.jsx';
import { Section } from 'components/Section/Section.jsx';
import { fetchContacts } from 'redux/contacts/operations.js';
import { Container } from './Contacts.styled.js';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
}
