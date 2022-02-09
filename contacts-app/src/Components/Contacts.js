import React from 'react';
import PropTypes from 'prop-types';
import './Contacts.css'

class Contacts extends React.Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired
    }
    render(){
        const {contacts} = this.props;
        return(
            <div className="Contacts">
                <h3>Contact List</h3>
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