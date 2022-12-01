import { Box } from '../PhoneBook.styled';
import { ContactItem } from './ContactList.styled';
// import PropTypes from 'prop-types';
import { Item } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);

  const normFilter = filter.toLocaleLowerCase();
  const renderContactsList = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(normFilter)
  );

  return (
    <Box mr="auto" ml="auto" mt="5px" pl="2" as="ul">
      {renderContactsList.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <Item name={name} number={number} />
        </ContactItem>
      ))}
    </Box>
  );
};

// ContactList.propTypes = {
//   data: PropTypes.arrayOf(PropTypes.object).isRequired,
//   handleOnDelete: PropTypes.func.isRequired,
// };
