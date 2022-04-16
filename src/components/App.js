import React from "react";
import styled from "styled-components";
import ContactForm from "./ContactForm";
import shortid from 'shortid';
import ContactList from "./ContactList";
import Filter from './Filter';

const Div = styled.div`
padding-left: 10px;
`
class App extends React.Component {
    state = {
        contacts: [
    // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
      }
    
  addContact = (task) => {
      const searchSameName = this.state.contacts
      .some(({name}) => name === task.name)
      
    if (searchSameName) {
      alert(`${task.name} is already in contacts`);
    } else {
      const contact = {
        ...task,
        id: shortid.generate(),
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

   removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
    };
    changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  
  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }


  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <Div>
        <h1>Phonebook</h1>

        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>
        
          <Filter value={filter} onChangeFilter={this.changeFilter} />
       
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        
      </Div>
    );
  }
}
export default App;