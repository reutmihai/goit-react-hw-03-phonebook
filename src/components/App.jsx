import React from 'react';
import { nanoid } from 'nanoid';

class App extends React.Component {
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

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const newContact = { id: nanoid(), name, number };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
      filter: '',
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleSubmit}>
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
        <ul>
          {this.state.contacts.map(contact => (
            <li key={contact.id}>
              {contact.name} : {contact.number}
            </li>
          ))}
        </ul>
        <h3>Find contacts by name</h3>
        <input
          type="text"
          name="filter"
          placeholder="Type a name"
          value={this.state.filter}
          onChange={this.handleChange}
        />
        <ul>
          {this.state.contacts
            .filter(contact =>
              contact.name
                .toLowerCase()
                .includes(this.state.filter.toLowerCase())
            )
            .map(contact => (
              <li key={contact.id}>
                {contact.name} : {contact.number}
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
