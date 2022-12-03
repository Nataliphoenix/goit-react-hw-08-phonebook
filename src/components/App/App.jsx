// import React from 'react';
// import { ToastContainer } from 'react-toastify';
// import { Container } from './App.styled';
// import { Section } from 'components/Section/Section';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList.jsx';
// import { Filter } from 'components/Filter/Filter';

// export const App = () => {
//   return (
//     <Container>
//       <Section title="Phonebook">
//         <ContactForm />
//       </Section>

//       <Section title="Contacts">
//         <Filter />
//         <ContactList />
//       </Section>

//       <ToastContainer position="top-right" autoClose={3000} />
//     </Container>
//   );
// };

import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations.js';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../../pages/Home.js'));
const RegisterPage = lazy(() => import('../../pages/Register.js'));
const LoginPage = lazy(() => import('../../pages/Login.js'));
// const TasksPage = lazy(() => import('../pages/Tasks'));
const ContactsPage = lazy(() => import('../../pages/Contacts.js'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
