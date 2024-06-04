import Section from "./Section/Section";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./FilterContacts/FilterContacts";
import { selectContacts, selectError, selectIsLoading } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/operations";
import styles from './App.module.css'
export const App = () => {
  const users = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

 

  useEffect(() => {
    dispatch(fetchContacts()).then(response => console.log('Fetched contacts:', response));

  }, [dispatch])

  return (
    <>
      <Section title="PhoneBook">
        <ContactForm />
        <Filter />
        {isLoading && !isError ? (
          <b className={styles.loading}>Request in progress...</b>
        ) : (
          <>
            <ContactList />
            
          </>
        )}
      </Section>
    </>
  );
};