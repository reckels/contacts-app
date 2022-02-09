import './App.css';
import AddContact from './Components/AddContact';
import Contacts from './Components/Contacts';
import React from 'react';

class App extends React.Component {
  state = {
    contacts: [
      {name: "John Deer", email: "jdeer@email.com"},
      {name: "Jane Doe", email: "jdoe@email.com"}
    ]
  };
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h2>Contacts App</h2>
        </header>
        <div className="add-contact">
          <AddContact
            onCreateContact={contact => {
              this.contacts.push(contact);
            }}
          />
        </div>
        <div className="contact-list">
          <Contacts contacts={this.state.contacts}/>
        </div>
      </div>
    );
  }

}

export default App;
