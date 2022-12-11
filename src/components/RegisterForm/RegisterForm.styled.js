import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  margin-top: 40px;
  padding: 20px;
  border: 1px solid #808080;
  border-radius: 8px;
  width: 320px;
`;

export const Label = styled.label`
  margin-top: 8px;
`;

export const FormInput = styled.input`
  width: 280px;
  padding: 15px;
  margin: 5px 0 22px 0;
  display: inline-block;
  border: none;
  border-radius: 8px;
  background: #f1f1f1;

  &:focus {
    background-color: #ddd;
    outline: none;
  }
`;

export const RegisterBtn = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;

  &:hover {
    opacity: 1;
  }
`;
