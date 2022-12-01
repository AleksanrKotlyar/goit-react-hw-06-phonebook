import { FilterLabelForm, FilterInputForm } from './Filter.styled';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getValue } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  return (
    <>
      <FilterLabelForm>
        Find contacts by name
        <FilterInputForm
          type="text"
          name="filter"
          value={value}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={e => dispatch(getValue(e.target.value))}
        />
      </FilterLabelForm>
    </>
  );
};

// Filter.propTypes = {
//   handleFilterOnInputChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };
