import {
  ContactListItems,
  ContactListItem,
  ContactListButton,
} from './ContactList.styled';
import { deleteContact } from 'redux/contactsSlice.js';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filterToLowerCase = filter.toLowerCase();
  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterToLowerCase)
  );

  return (
    <ContactListItems>
      {filterContact.map(({ id, name, number }) => (
        <ContactListItem key={id}>
          <p>
            <span>{name} :</span>
            {number}
          </p>
          <ContactListButton
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </ContactListButton>
        </ContactListItem>
      ))}
    </ContactListItems>
  );
};
