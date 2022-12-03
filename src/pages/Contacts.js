// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
// import { TaskList } from 'components/TaskList/TaskList';
// import { TaskEditor } from 'components/TaskEditor/TaskEditor';
// import { fetchTasks } from 'redux/tasks/operations';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/tasks/selectors';

import { ToastContainer } from 'react-toastify';
import { Container } from '../components/App/App.styled.js';
import { Section } from '../components/Section/Section.jsx';
import { ContactForm } from '../components/ContactForm/ContactForm.jsx';
import { ContactList } from '../components/ContactList/ContactList.jsx';
import { Filter } from '../components/Filter/Filter.js';

export default function Contacts() {
  //   const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  //   useEffect(() => {
  //     dispatch(fetchTasks());
  //   }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Helmet>
          <title>Your contacts</title>
        </Helmet>
        <Filter />
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactList />
      </Section>
      <ToastContainer position="top-right" autoClose={3000} />
    </Container>

    // <>
    //   <Helmet>
    //     <title>Your contacts</title>
    //   </Helmet>
    //   <TaskEditor />
    //   <div>{isLoading && 'Request in progress...'}</div>
    //   <TaskList />
    // </>
  );
}
