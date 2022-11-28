import { toast } from 'react-toastify';
import {
  ContactListItems,
  ContactListItem,
  ContactListButton,
} from './ContactList.styled';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from 'redux/contactsSlice.js';
import { useSelector } from 'react-redux';
import { getFilterValue } from '../../redux/filterSlice.js';

export const ContactList = () => {
  const deleteContactId = async id => {
    try {
      await deleteContact(id);
      toast.success(`Contact deleted `);
    } catch (error) {
      toast.error('Oops! Something went wrong. Please, try again!');
    }
  };

  const filtersContacts = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const filter = useSelector(getFilterValue);

  const { data: contacts = [], isLoading, error } = useGetContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  const contactsList = filtersContacts(contacts, filter);

  return (
    <ContactListItems>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}

      {contactsList ? (
        <>
          {contactsList.map(({ name, phone, id }) => (
            <ContactListItem key={id}>
              <p>
                <span>{name} :</span>
                {phone}
              </p>
              <ContactListButton
                type="button"
                onClick={() => deleteContactId(id)}
              >
                Delete
              </ContactListButton>
            </ContactListItem>
          ))}
        </>
      ) : null}
    </ContactListItems>
  );
};
