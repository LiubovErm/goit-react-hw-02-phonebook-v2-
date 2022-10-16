import { Component } from 'react';
import { FormContacts } from './Form/Form';
import { Filter } from './Filter/Filter';
import { List } from './List/List';
import { Box } from './Box/Box';
import { nanoid } from 'nanoid'
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

 
  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.find(contact => contact.name === name)) {
       Notiflix.Notify.failure(`${name} is already in contacts`);
      return;
    }
    this.setState({ contacts: [newContact, ...contacts] });
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      }
    })
  };

  filterContact = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContact = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContact();

    return (
      <Box mx='auto' maxWidth={500} >
        <h2>Phonebook</h2>
        <FormContacts onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onChange={this.filterContact} value={filter} />
        <List contacts={visibleContact}
          onDeleteContact={this.deleteContact}/>
      </Box>
    );
  }
}











// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
