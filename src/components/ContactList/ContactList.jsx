import React from 'react';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul className={styles.contacts}>
        {contacts.map(contact => (
          <li key={contact.id} className={styles['contact-name']}>
            {contact.name}: {contact.number}
            <button
              className={styles.deleteBtn}
              onClick={() => deleteContact(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
