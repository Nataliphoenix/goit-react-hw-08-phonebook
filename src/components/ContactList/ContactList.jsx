import { Loader } from '../Loader/Loader.jsx';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectAllContacts,
  selectLoading,
} from '../../redux/contacts/selectors';
import { selectFilterValue } from 'redux/filterSlice.js';
import { deleteContact } from 'redux/contacts/operations.js';
import {
  ContactListItems,
  ContactListItem,
  ContactListButton,
} from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const filter = useSelector(selectFilterValue);
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <>
      {isLoading && <Loader />}
      {contacts?.length > 0 ? (
        <>
          <ContactListItems>
            {filterContacts.map(({ id, name, number }) => (
              <ContactListItem key={id}>
                <p>
                  <span>{name} :</span>
                  {number}
                </p>
                <ContactListButton
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </ContactListButton>
              </ContactListItem>
            ))}
          </ContactListItems>
        </>
      ) : (
        <p>No contacts</p>
      )}
    </>
  );
};
