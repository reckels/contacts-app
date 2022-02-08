import React from 'react';

const Contact = ({contact}) => {
    return(
        <div className="Contact">
            <div className="Contact-name">{contact.name}</div>
        </div>
    );
}

export default Contact;