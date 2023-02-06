import PropTypes from 'prop-types';
import { useState } from "react";

import styles from "./ContactForm.module.css"

export const ContactForm = ({onSubmit}) =>  {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit({name, number});

        handleFormReset(event.target);
    }

    const handleFormReset = (form) => {
        setName("");
        setNumber("");
        
        form.elements.submit.blur();
    }

    const handleChange = ({target}) => {
        switch (target.name) {
            case 'name': setName(target.value);
                break;
            case 'number': setNumber(target.value);
                break;
            default: break;
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name" className={styles.label}>Name</label>

            <input
                type="text"
                id="name"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                className={styles.input}
                onChange={handleChange}
                value={name}
            />

            <label htmlFor="number" className={styles.label}>Number</label>

            <input
                type="tel"
                id="number"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                className={styles.input}
                onChange={handleChange}
                value={number}
            />

            <button type="submit" name="submit" className={styles.button}>Add contact</button>
        </form>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}