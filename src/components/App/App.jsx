import React from 'react';
import { Container } from './App.styled';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filtersSlice';
import { getFilterValue } from '../../redux/filtersSlice.js';

export const App = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const onInputChange = e => {
    dispatch(setStatusFilter(e.currentTarget.value));
  };

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter filter={filter} onChange={onInputChange} />
        <ContactList />
      </Section>
    </Container>
  );
};
