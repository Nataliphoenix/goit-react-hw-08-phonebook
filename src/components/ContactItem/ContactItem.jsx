import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations.js';

// import styles from './ContactItem.module.css';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <p>
        <span>{name}: </span>
        {number}
      </p>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        ⛌
      </button>
    </li>
  );
};
