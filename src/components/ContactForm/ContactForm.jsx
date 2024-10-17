import React, { Component } from 'react';
import styles from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
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

    if (!name || !number) return;

    const isDuplicate = this.props.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert('Contact already exists!');
      return;
    }

    const newContact = {
      id: Date.now(),
      name,
      number,
    };

    this.props.addContact(newContact);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div>
        <form className={styles['contact-form']} onSubmit={this.handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label>Number</label>
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Add Contact</button>
        </form>
      </div>
    );
  }
}
