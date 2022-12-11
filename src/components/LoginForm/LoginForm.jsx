import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Form, Label, FormInput, LogInBtn } from './LoginForm.styled.js';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if ((email && password) === '') {
      return;
    } else {
      dispatch(logIn({ email, password }));
      form.reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>Email</Label>
      <FormInput type="email" name="email" />
      <Label>Password</Label>
      <FormInput type="password" name="password" />
      <LogInBtn type="submit">Log In</LogInBtn>
    </Form>
  );
};
