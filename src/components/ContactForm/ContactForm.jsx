import { useState } from 'react';
import { BsJournalPlus } from 'react-icons/bs';
import { BsTelephone } from 'react-icons/bs';
import {
  Form,
  ContactFormInput,
  ContactFormLabel,
  ContactFormButton,
} from 'components/ContactForm/ContactForm.styled';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsSlice.js';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [addContact] = useAddContactMutation();
  const { data } = useGetContactsQuery();

  const reset = () => {
    setNewName('');
    setNewPhone('');
  };

  const addNumberContact = async ({ newName, newPhone }) => {
    const newContact = { name: newName, phone: newPhone };

    const isExistContact = data.find(
      contact => contact.name === newContact.name
    );

    if (!isExistContact) {
      try {
        await addContact(newContact);
        toast.success(`Contact ${newContact.name} added`);
      } catch (error) {
        toast.error('Oops! Something went wrong. Please, try again!');
      }
    } else {
      toast.error(`${newContact.name} is already in contacts`);
    }
  };

  const handleAddContacts = e => {
    e.preventDefault();
    addNumberContact({ newName, newPhone });
    reset();
  };

  return (
    <Form onSubmit={handleAddContacts}>
      <ContactFormLabel htmlFor="name">
        Name <BsJournalPlus />
        <ContactFormInput
          type="text"
          name="name"
          value={newName}
          onChange={e => setNewName(e.target.value)}
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
          value={newPhone}
          onChange={e => setNewPhone(e.target.value)}
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
