import React, { Component } from 'react'

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

    this.props.addContact(name, number);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}
