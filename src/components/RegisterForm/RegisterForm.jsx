import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations.js';
import { Form, Label, FormInput, RegisterBtn } from './RegisterForm.styled.js';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    dispatch(register({ name, email, password }));

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>Username</Label>
      <FormInput type="text" placeholder="Enter name" name="name" />
      <Label>Email</Label>
      <FormInput type="email" placeholder="Enter Email" name="email" />
      <Label>Password</Label>
      <FormInput type="password" placeholder="Enter Password" name="password" />
      <RegisterBtn type="submit">Register</RegisterBtn>
    </Form>
  );
};
