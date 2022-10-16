import PropTypes from 'prop-types';
import { ContactList } from './List.styled';
import { ListItem } from '../ListItem/ListItem';

export const List = ({ contacts, onDeleteContact }) => {
  return (
    <ContactList>
        {contacts.map(({ id, name, number }) => (
          <ListItem 
            key={id}
            name={name}
            number={number}
            onClickRemove={() => onDeleteContact(id)}
          />
        ))}
    </ContactList>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func,
};






// export const List = ({ contacts, onDeleteContact }) => (
//     <ContactList>
//       {contacts.map(({ id, name, number }) => (
//           <ContactItem key={id}>
//             {name}: {number}
//             <Button type = "button" onClick={() => {onDeleteContact(id)}}>
//               Delete
//             </Button>
//           </ContactItem>
//       ))}
//     </ContactList>
// );

// List.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };