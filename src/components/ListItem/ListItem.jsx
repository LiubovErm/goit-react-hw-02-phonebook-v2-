import PropTypes from 'prop-types';
import { ContactItem, Button, TextName } from './ListItem.styled';

export const ListItem = ({ name, number, onClickRemove }) => {
  return (
    <ContactItem>
       <TextName>{name}: </TextName> {number}
      <Button type="button" onClick={onClickRemove}>
        Delete
      </Button>
    </ContactItem>
  );
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

