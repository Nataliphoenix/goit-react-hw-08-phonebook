import { useState, useEffect } from 'react';
import { BsJournalPlus } from 'react-icons/bs';
import { BsTelephone } from 'react-icons/bs';
import { nanoid } from 'nanoid';
import {
  Form,
  ContactFormInput,
  ContactFormLabel,
  ContactFormButton,
} from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice.js';
import { getContactValue } from '../../redux/contactsSlice.js';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contactsItem = useSelector(getContactValue);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  useEffect(() => {
    return setId(nanoid());
  }, [name, number]);

  const addNumberContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    const isExistContact = contactsItem.find(
      contact => contact.name === newContact.name
    );

    isExistContact
      ? alert(`${newContact.name} is already in contacts`)
      : dispatch(addContact({ name, number, id }));
  };

  const handleAddContacts = e => {
    e.preventDefault();
    addNumberContact({ name, number });
    reset();
  };

  return (
    <Form onSubmit={handleAddContacts}>
      <ContactFormLabel htmlFor="name">
        Name <BsJournalPlus />
        <ContactFormInput
          type="text"
          name="name"
          id={nameId}
          value={name}
          onChange={handleChangeName}
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContactFormLabel>
      <ContactFormLabel htmlFor="number">
        Number <BsTelephone />
        <ContactFormInput
          type="tel"
          name="number"
          id={numberId}
          value={number}
          onChange={handleChangeNumber}
          placeholder="Enter number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </ContactFormLabel>
      <ContactFormButton type="submit">Add contact</ContactFormButton>
    </Form>
  );
};
