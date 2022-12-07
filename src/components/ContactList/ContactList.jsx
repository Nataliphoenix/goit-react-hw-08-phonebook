// import { toast } from 'react-toastify';
// import {
//   ContactListItems,
//   ContactListItem,
//   ContactListButton,
// } from './ContactList.styled';
// import {
//   useGetContactsQuery,
//   useDeleteContactMutation,
// } from 'redux/contactsSlice.js';
// import { useSelector } from 'react-redux';
// import { getFilterValue } from '../../redux/filterSlice.js';

// export const ContactList = () => {
//   const deleteContactId = async id => {
//     try {
//       await deleteContact(id);
//       toast.success(`Contact deleted `);
//     } catch (error) {
//       toast.error('Oops! Something went wrong. Please, try again!');
//     }
//   };

//   const filtersContacts = (contacts, filter) =>
//     contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );

//   const filter = useSelector(getFilterValue);

//   const { data: contacts = [], isLoading, error } = useGetContactsQuery();
//   const [deleteContact] = useDeleteContactMutation();
//   const contactsList = filtersContacts(contacts, filter);

//   return (
//     <ContactListItems>
//       {isLoading && <p>Loading contacts...</p>}
//       {error && <p>{error}</p>}

//       {contactsList ? (
//         <>
//           {contactsList.map(({ name, phone, id }) => (
//             <ContactListItem key={id}>
//               <p>
//                 <span>{name} :</span>
//                 {phone}
//               </p>
//               <ContactListButton
//                 type="button"
//                 onClick={() => deleteContactId(id)}
//               >
//                 Delete
//               </ContactListButton>
//             </ContactListItem>
//           ))}
//         </>
//       ) : null}
//     </ContactListItems>
//   );
// };

import { Loader } from '../Loader/Loader.jsx';
import { ContactItem } from '../ContactItem/ContactItem.jsx';
import { Filter } from '../Filter/Filter.js';
import { useSelector } from 'react-redux';
import {
  selectAllContacts,
  selectLoading,
} from '../../redux/contacts/selectors';

// import styles from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const isLoading = useSelector(selectLoading);

  const filter = useSelector(state => state.filter);
  const viewContacts = contacts
    .filter(cont => cont.name.toLowerCase().includes(filter))
    .sort((first, second) => first.name.localeCompare(second.name));

  return (
    <div>
      {isLoading && <Loader />}
      {contacts?.length > 0 ? (
        <div>
          <Filter />
          <ul>
            {viewContacts.map(({ id, name, number }) => (
              <ContactItem key={id} id={id} name={name} number={number} />
            ))}
          </ul>
        </div>
      ) : (
        <p>No contacts</p>
      )}
    </div>
  );
};
