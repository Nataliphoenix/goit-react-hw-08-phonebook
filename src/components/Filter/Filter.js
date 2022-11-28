import { ContactFormInput } from 'components/ContactForm/ContactForm.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';
import { getFilterValue } from '../../redux/filterSlice.js';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterValue);

  const onInputChange = e => {
    e.preventDefault();
    dispatch(setStatusFilter(e.currentTarget.value));
  };

  return (
    <ContactFormInput
      type="text"
      name="filter"
      value={filter}
      onChange={onInputChange}
      placeholder="Enter name for Search"
    />
  );
};
