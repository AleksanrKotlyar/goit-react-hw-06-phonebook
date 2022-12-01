import { ContactNumber, DeleteBtn } from './ContactItem.styled';
import { AiOutlineUserDelete } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from 'redux/contactsSlice';

export const Item = ({ name, number }) => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  return (
    <>
      {name}: <ContactNumber>{number}</ContactNumber>
      <DeleteBtn type="button" onClick={() => dispatch(remove(contacts.id))}>
        <AiOutlineUserDelete />
        Delete
      </DeleteBtn>
    </>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
