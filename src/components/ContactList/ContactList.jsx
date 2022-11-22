import {
  ContactListItems,
  ContactListItem,
  ContactListButton,
} from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { getContactValue } from '../../redux/contactsSlice.js';
import { getFilterValue } from '../../redux/filterSlice.js';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactValue);
  const filter = useSelector(getFilterValue);

  const filterToLowerCase = filter.toLowerCase();
  const contactsItems = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterToLowerCase)
  );

  return (
    <ContactListItems>
      {contactsItems ? (
        <>
          {contactsItems.map(contact => {
            return (
              <ContactListItem key={contact.id}>
                <p>
                  <span>{contact.name} :</span>
                  {contact.number}
                </p>
                <ContactListButton
                  type="button"
                  onClick={() => dispatch(deleteContact(contact.id))}
                >
                  Delete
                </ContactListButton>
              </ContactListItem>
            );
          })}
        </>
      ) : null}
    </ContactListItems>
  );
};
