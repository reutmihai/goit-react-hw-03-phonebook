import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {
  const [state, setState] = useState({
    contacts: [
      {
        id: nanoid(),
        name: 'Reut Mihai',
        number: '0753256355',
      },
      {
        id: nanoid(),
        name: 'Mironescu Andrei',
        number: '0752526526',
      },
      {
        id: nanoid(),
        name: 'Cretan Cosmin',
        number: '0746134620',
      },
    ],
    filter: '',
    name: '',
    number: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: state.name,
      number: state.number,
    };
    setState(prevState => ({
      ...prevState,
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
      filter: '',
    }));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          placeholder='Name'
          pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={state.name}
          onChange={handleChange}
        />
        <span>Number</span>
        <input
          type="tel"
          name="number"
          placeholder='Number'
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={state.number}
          onChange={handleChange}
        />
        <button type="submit">Add Contact</button>
      </form>
      <h2>Contacts</h2>
      <ul>
        {state.contacts.map(contact => (
          <li key={contact.id}>
            {contact.name} : {contact.number}
          </li>
        ))}
      </ul>
      <h3>Find contacts by name</h3>
      <input
      type='text'
      name="filter"
      placeholder='Type a name'
      value={state.filter}
      onChange={handleChange}
      />
      <ul>
        {state.contacts.filter(contact => contact.name.toLowerCase().includes(state.filter.toLowerCase())).map(contact => (
          <li key={contact.id}>
            {contact.name} : {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
