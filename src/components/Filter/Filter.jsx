import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filterSlice.js';
import { FilterFormInput } from 'components/Filter/Filter.styled.js';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = e => {
    e.preventDefault();
    const value = e.currentTarget.value;
    dispatch(filterContacts(value));
  };

  return (
    <FilterFormInput
      type="text"
      onChange={changeFilter}
      placeholder="Enter name for Search"
    />
  );
};
