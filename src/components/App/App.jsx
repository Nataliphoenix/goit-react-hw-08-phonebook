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
import { Layout } from '../Layout/Layout.js';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute.js';
import { RestrictedRoute } from '../RestrictedRoute/RestrictedRoute.js';
import { refreshUser } from 'redux/auth/operations.js';
import { useAuth } from 'hooks';
import { Loader } from 'components/Loader/Loader.jsx';

const HomePage = lazy(() => import('../../pages/Home/Home.jsx'));
const RegisterPage = lazy(() => import('../../pages/Register/Register.js'));
const LoginPage = lazy(() => import('../../pages/Login/Login.js'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts.jsx'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
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
