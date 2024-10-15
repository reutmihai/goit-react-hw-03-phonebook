import React from 'react';
import styles from '../ContactList/ContactList.module.css';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul className={styles.contacts}>
        {contacts.map(contact => (
          <li className={styles['contact-name']} key={contact.id}>
            {contact.name} | {contact.number}
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
