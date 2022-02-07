import React, {Component} from 'react';

class AddContacts extends React.Component {
    render(){
        return (
            <div>
                <form>
                    <input type="text" name="name" placeholder="Name"/>
                    <input type="email" name="email" placeholder="Email"/>
                    
                    {/*<input type="tel" name="phoneNumber" placeholder="(   )   -    "/>
                    <input type="text" name="address1" placeholder="Address"/>
                    <input type="text" name="city" placeholder="City"/>
                    <input type="text" name="state" placeholder="State"/>
                    <input type="text" name="zip" placeholder="Zip Code"/> */}
                    
                    <button className="addContact">Add Contact</button>
                </form>
            </div>
        );
    }

}

export default AddContacts;