import React, { Component } from 'react';
import { initialState, storageKey } from './constants/Constants';
import { load, save } from './utils/localstorage';
import ContactForm from './ContactForm/ContactForm';

import { GlobalStyle } from './GlobalStyle/GlobalStyle.styled';

export class App extends Component {
  state = { contacts: [], filter: '' };

  componentDidMount() {
    const contacts = load(storageKey);
    this.setState(
      contacts ? { contacts: contacts } : { contacts: initialState.contacts }
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const newContacts = this.state.contacts;
    if (newContacts !== prevState.contacts) {
      save(storageKey, newContacts);
    }
  }
  onSubmit = ({ id, name, number }) => {
    const contact = {
      id,
      name,
      number,
    };
    console.log(contact);
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <div style={{ marginLeft: '30px' }}>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.onSubmit} />
        </div>
        {/* <Section title="Please live feedback">
          <ButtonsDiv
            actions={Object.keys(this.state)}
            onClick={this.incrementActionState}
          />
        </Section>
        <Section title="Statistics">{statistics}</Section> */}
      </>
    );
  }
}

// import Filter from './Filter/Filter';
// import ContactList from './ContactsList';
// import debounce from 'lodash.debounce';
// import * as storage from '../utils/storage';

//   onSubmit = ({ id, name, number }) => {
//     const contact = {
//       id,
//       name,
//       number,
//     };
//     if (this.state.contacts.find(contact => contact.name === name)) {
//       alert(`${name} is already in contacts`);
//       return false;
//     }
//     this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
//     return true;
//   };

//   onFilterChange = ({ value }) => {
//     this.setState({ filter: value });
//   };

//   onFilterChangeDebounced = debounce(this.onFilterChange, 500);

//   onDeleteContact = ({ id }) => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     let filteredContacts = contacts;
//     if (filter) {
//       filteredContacts = contacts.filter(({ name }) => {
//         return name.toLowerCase().includes(filter.toLowerCase());
//       });
//     }
//     return (
//       <div style={{ marginLeft: '30px' }}>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.onSubmit} />

//         <h2>Contacts</h2>
//         <Filter onInput={this.onFilterChangeDebounced} />
//         <ContactList
//           contacts={filteredContacts}
//           onDelete={this.onDeleteContact}
//         />
//       </div>
//     );
//   }
// }
