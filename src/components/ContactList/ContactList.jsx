import {
  ContactListItems,
  ContactListItem,
  ContactListButton,
} from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice.js';
import { useDispatch, useSelector } from 'react-redux';
import { getContactValue } from '../../redux/contactsSlice.js';
import { getFilterValue } from '../../redux/filtersSlice.js';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsItem = useSelector(getContactValue);
  const filter = useSelector(getFilterValue);

  const filterToLowerCase = filter.toLowerCase();
  const filterContact = contactsItem.filter(contact =>
    contact.name.toLowerCase().includes(filterToLowerCase)
  );

  return (
    <ContactListItems>
      {filterContact ? (
        <>
          {filterContact.map(contact => {
            return (
              <ContactListItem key={contact.id}>
                <p>
                  <span>{contact.name} :</span>
                  {contact.number}
                </p>
                <ContactListButton
                  type="button"
                  onClick={() => {
                    dispatch(deleteContact(contact.id));
                  }}
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
