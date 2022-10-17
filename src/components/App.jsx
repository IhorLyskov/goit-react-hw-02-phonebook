import React, { Component } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';

import { initialState, storageKey } from './constants/Constants';
import { load, save } from './utils/localstorage';
import * as Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';

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

  handleSubmit = ({ id, name, number }) => {
    const contact = {
      id,
      name,
      number,
    };
    if (this.state.contacts.find(contact => contact.name === name)) {
      Notify.info(`${name} is already in contacts`);
      return false;
    }
    this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
    return true;
  };

  handleContactDelete = ({ id }) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = ({ value }) => {
    this.setState({ filter: value });
  };

  handleFilterChangeDebounced = debounce(this.handleFilterChange, 500);

  handleDeleteContact = ({ id }) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    let filteredContacts = contacts;
    if (filter) {
      filteredContacts = contacts.filter(({ name }) => {
        return name.toLowerCase().includes(filter.toLowerCase());
      });
    }
    return (
      <>
        <GlobalStyle />
        <Section.H1 title="Phonebook">
          <ContactForm onSubmit={this.handleSubmit} />
        </Section.H1>
        <Section.H2 title="Contacts">
          <Filter onInput={this.handleFilterChangeDebounced} />
          <ContactsList
            contacts={filteredContacts}
            onDelete={this.handleContactDelete}
          />
        </Section.H2>
      </>
    );
  }
}
