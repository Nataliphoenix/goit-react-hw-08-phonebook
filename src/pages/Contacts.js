import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { PhoneBook } from 'components/Phonebook/Phonebook.jsx';
import { ContactForm } from '../components/ContactForm/ContactForm.jsx';
import { ContactList } from '../components/ContactList/ContactList.jsx';
import { fetchContacts } from 'redux/contacts/operations.js';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <ContactList />
      {/* <PhoneBook /> */}
    </div>
  );
}
