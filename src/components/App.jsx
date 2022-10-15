import React, { Component } from 'react';
import { initialState, storageKey } from './constants/Constants';
import { load, save, remove } from './utils/localstorage';

// import Section from './Section/Section';
// import ButtonsDiv from './ButtonsDiv/ButtonsDiv';
// import Statistics from './Statistics/Statistics';
// import Notification from './Notification/Notification';

import { GlobalStyle } from './GlobalStyle/GlobalStyle.styled';

export class App extends Component {
  state = { contacts: [], filter: '' };

  render() {
    return (
      <>
        <GlobalStyle />
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
// import ContactForm from './ContactForm';
// import ContactList from './ContactsList';
// import debounce from 'lodash.debounce';
// import * as storage from '../utils/storage';

// export class App extends Component {
//   state = { contacts: [], filter: '' };
//   STORAGE_KEY = 'contacts';

//   componentDidMount() {
//     const contacts = storage.load(this.STORAGE_KEY);
//     if (contacts) {
//       this.setState({ contacts: contacts });
//     } else {
//       this.setState({ contacts: INITIAL_STATE.contacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     const nextContacts = this.state.contacts;
//     const prevContacts = prevState.contacts;

//     if (nextContacts !== prevContacts) {
//       storage.save(this.STORAGE_KEY, nextContacts);
//     }
//   }

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
