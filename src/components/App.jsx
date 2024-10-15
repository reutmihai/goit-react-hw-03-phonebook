import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import styles from './App.module.css';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const contactNames = contacts.map(contact => contact.name.toLowerCase());

    if (contactNames.includes(name.toLowerCase())) {
      alert(`${name} already exists in contacts.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Search by name</h2>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <h2>Contacts</h2>
        {contacts.length < 1 ? (
          <span>Contact list are empty.</span>
        ) : (
          <ContactList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}

export default App;
