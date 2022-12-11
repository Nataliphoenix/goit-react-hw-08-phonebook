import styled from 'styled-components';

export const FilterFormInput = styled.input`
  padding: 1px 5px;
  margin-bottom: 12px;

  width: 300px;
  height: 30px;
  font-size: 14px;

  border: 1px solid #edc7b7;
  border-radius: 5px;
  outline: none;

  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    border-color: #2196f3;
  }
`;
