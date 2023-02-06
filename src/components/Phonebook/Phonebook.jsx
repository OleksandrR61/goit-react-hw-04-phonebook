import { useState, useEffect } from "react";
import { nanoid } from 'nanoid'

import { ContactForm, Filter, ContacList } from "components/";

export const Phonebook = () => {
    const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? []);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const handleAddContacts = (newContact) => {
        const isNew = contacts.every(contact => contact.name !== newContact.name);
        if (isNew) {
            setContacts(prev => (
                [...prev,
                    {
                        ...newContact,
                        id: nanoid(),
                    }
                ]
            ));
        } else {
            alert(`${newContact.name} is already in contacts.`);
        };
    };

    const handleSetFilter = ({target}) => {
        setFilter(target.value);
    };

    const handleDelete = ({target}) => {
        setContacts(prev => contacts.filter(contact => contact.id !== target.id));
    }

    return (
        <>
            <h1>Phonebook</h1>
            <ContactForm onSubmit={handleAddContacts}/>

            <h2>Contacts</h2>
            <Filter onChange={handleSetFilter} value={filter}/>
            <ContacList contacts={contacts} filter={filter} onHandleDelete={handleDelete}/>
        </>
    );
};