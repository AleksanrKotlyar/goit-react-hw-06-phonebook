import React, { useState, useEffect } from 'react';
import { Box, Title, SubTitle, Plug } from './PhoneBook.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactsSkeleton } from 'components/ContactsSkeleton/ContactsSkeleton';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from 'redux/contactsSlice';
import { getValue } from 'redux/filterSlice';
import '../Utils/index.css';

export const PhoneBook = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const onClickBtnAddContact = data => {
    const normalizeName = data.name.toLocaleLowerCase();
    const renderContactsList = contacts.find(
      contact => contact.name.toLocaleLowerCase() === normalizeName
    );
    renderContactsList
      ? alert(`${data.name} is already in contacts`)
      : dispatch(add({ ...data, id: nanoid(5) }));
  };

  const handleFilterOnInputChange = inform => {
    dispatch(getValue(inform));
  };

  const handleOnDelete = id => {
    dispatch(remove(id));
  };

  const normFilter = filter.toLocaleLowerCase();
  const renderContactsList = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normFilter)
  );

  return (
    <Box
      bg="mainBg"
      p="4"
      mr="auto"
      ml="auto"
      mt="3"
      width="400px"
      max-height="100vh"
      border="normal"
      borderRadius="normal"
      borderColor="#3d341aba"
      boxShadow="base"
      // boxShadow="0px 5px 15px rgba(0, 0, 0, 0.75)"
      as="section"
    >
      <Title>Phonebook</Title>
      <ContactForm onSubmitForm={onClickBtnAddContact} />

      <SubTitle>Contacts</SubTitle>
      <Filter
        handleFilterOnInputChange={handleFilterOnInputChange}
        value={filter}
      />
      {isLoading && <ContactsSkeleton />}
      {contacts.length === 0 && <Plug> No contacts</Plug>}
      {!isLoading && contacts && (
        <ContactList
          data={renderContactsList}
          handleOnDelete={handleOnDelete}
        />
      )}
    </Box>
  );
};
