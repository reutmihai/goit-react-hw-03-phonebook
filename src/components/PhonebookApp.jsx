import React from 'react';
import { nanoid } from 'nanoid';

class PhonebookApp extends React.Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Reut Mihai', number: '0753256355' },
      { id: nanoid(), name: 'Mironescu Andrei', number: '0752526526' },
      { id: nanoid(), name: 'Cretan Cosmin', number: '0746134620' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addContact = e => {
    e.preventDefault();
    const { name, number, contacts } = this.state;
    const contactNamesLowerCase = contacts.map(contact => contact.name.toLowerCase());
    console.log(name, contactNamesLowerCase);

    if (contactNamesLowerCase.includes(name.toLowerCase())) {
      alert(`${name} already exists in contacts.`);
      return;
    }
    const newContact = { id: nanoid(), name, number };
    
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
      filter: '',
    }));
  };

  filterContacts = contacts => {
    const { filter } = this.state;

    if (!filter) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  displayContacts = contacts => {
    return contacts.map(contact => (
      <li key={contact.id}>
        {contact.name} : {contact.number}
        <button onClick={() => this.deleteContact(contact.id)}>Delete</button>
      </li>
    ));
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts.filter(contact => contact.id !== contactId)],
    }));
  };

  render() {
    const { contacts } = this.state;
    const filteredContacts = this.filterContacts(contacts);

    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.addContact}>
          <span>Name</span>
          <input
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
          <span>Number</span>
          <input
            type="tel"
            name="number"
            placeholder="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +."
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button type="submit">Add Contact</button>
        </form>
        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="filter"
          placeholder="Type a name"
          value={this.state.filter}
          onChange={this.handleChange}
        />
        <ul>{this.displayContacts(filteredContacts)}</ul>
      </div>
    );
  }
}

export default PhonebookApp;
