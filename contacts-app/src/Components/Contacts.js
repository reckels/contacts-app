import React from 'react';
import Contact from './Contacts';
import PropTypes from 'prop-types';

class Contacts extends React.Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired
    }
    render(){
        const {contacts} = this.props;
        return(
            <div className="Contacts">
                <header>Contact List</header>
                <ul className="contact-list">
                    {contacts.map((contact) => 
                        <li key={contact.name} className="contact-list-item">
                            <p>{contact.name}</p>
                            <p>{contact.email}</p>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Contacts;