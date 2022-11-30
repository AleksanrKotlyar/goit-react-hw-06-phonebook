import React, { useState, useEffect } from 'react';
import { Box, Title, SubTitle } from './PhoneBook.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactsSkeleton } from 'components/ContactsSkeleton/ContactsSkeleton';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from 'redux/contactsSlice';
import { getValue } from 'redux/filterSlice';

export const PhoneBook = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (contacts.length > 0) {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 1000);
    }
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
      borderColor="green"
      as="section"
    >
      <Title>Phonebook</Title>
      <ContactForm onSubmitForm={onClickBtnAddContact} />

      <SubTitle>Contacts</SubTitle>
      <Filter
        handleFilterOnInputChange={handleFilterOnInputChange}
        value={filter}
      />
      {/* {isLoading && hasLocalStorageData && <ContactsSkeleton />} */}
      {isLoading && <ContactsSkeleton />}
      {!isLoading && contacts && (
        <ContactList
          data={renderContactsList}
          handleOnDelete={handleOnDelete}
        />
      )}
    </Box>
  );
};
