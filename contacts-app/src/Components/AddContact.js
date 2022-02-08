import React from 'react';
import PropTypes from 'prop-types';


export default class AddContacts extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            contact: {
                name: props.name,
                email: props.email
            }
        }
    }


    handleClick() {
        console.log(this.state.contact);
    }

    render(){
        return (
            <div>
                <input type="text" placeholder="Name" value={this.state.contact.name}/>
                <input type="email" placeholder="Email" value={this.state.contact.email}/>
                    
                    {/*<input type="tel" name="phoneNumber" placeholder="(   )   -    "/>
                    <input type="text" name="address1" placeholder="Address"/>
                    <input type="text" name="city" placeholder="City"/>
                    <input type="text" name="state" placeholder="State"/>
                    <input type="text" name="zip" placeholder="Zip Code"/> */}
                    
                <button className="addContact" onClick={this.handleClick.bind(this)}>Add Contact</button>
            </div>
        );
    }

}
