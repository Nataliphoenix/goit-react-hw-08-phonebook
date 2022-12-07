import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations.js';
import { Form, Label } from './RegisterForm.styled.js';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    dispatch(register({ name, email, password }));

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <input type="text" name="name" />
      </Label>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <button type="submit">Register</button>
    </Form>
  );
};
