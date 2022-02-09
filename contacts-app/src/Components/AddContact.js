import React from 'react';
import './AddContact.css';

export default class AddContacts extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            contact: {
                name: props.name,
                email: props.email,
                phoneNumber: props.phoneNumber,
                address: props.address,
                city: props.city,
                stateLoc: props.stateLoc,
                zip: props.zip,
                status: props.status
            }
        }
    }

    handleNameChanged(event) {
        var contact        = this.state.contact;
        contact.name  = event.target.value;
    
        this.setState({ contact: contact });
      }
    
      handleEmailChanged(event) {
        var contact      = this.state.contact;
        contact.email = event.target.value;
    
        this.setState({ contact: contact });
      }
    
      handleStatusChanged(event) {
        var contact = this.state.contact;
        contact.status = event.target.value;
    
        this.setState({contact: contact});
      }

      handlePhoneNumberChanged(event) {
        var contact = this.state.contact;
        contact.status = event.target.value;
    
        this.setState({contact: contact});
      }

      handleAddressChanged(event) {
        var contact      = this.state.contact;
        contact.address = event.target.value;
    
        this.setState({ contact: contact });
      }
      
      handleCityChanged(event) {
        var contact      = this.state.contact;
        contact.city = event.target.value;
    
        this.setState({ contact: contact });
      }

      handleStateLocChanged(event) {
        var contact      = this.state.contact;
        contact.stateLoc = event.target.value;
    
        this.setState({ contact: contact });
      }
      
      handleZipChanged(event) {
        var contact      = this.state.contact;
        contact.zip = event.target.value;
    
        this.setState({ contact: contact });
      }

    handleClick() {
        console.log(this.state.contact);
        this.setState({
            contact: {
                name: '',
                email: '',
                phoneNumber: '',
                address: '',
                city: '',
                stateLoc: '',
                zip: '',
                status: ''
            }
        });
    }

    render(){
        return (
            <div className="form">
                <div className="name-input input">
                    <label>Name: </label>                
                    <input type="text" value={this.state.contact.name} onChange={this.handleNameChanged.bind(this)}/>
                </div>
                <div className="email-input input">
                    <label>Email: </label>
                    <input type="email" value={this.state.contact.email} onChange={this.handleEmailChanged.bind(this)}/>
                </div>
                <div className="phone-input input">
                    <label>Phone Number: </label>
                    <input type="text" value={this.state.contact.phoneNumber} onChange={this.handlePhoneNumberChanged.bind(this)}/> 
                </div>
                <div className="address-input input">
                    <label>Street Address: </label>
                    <input type="text" value={this.state.contact.address} onChange={this.handleAddressChanged.bind(this)}/>
                </div>
                <div className="city-input input">
                    <label>City: </label>
                    <input type="text" value={this.state.contact.city} onChange={this.handleCityChanged.bind(this)}/>
                </div>
                <div className="state-input input">
                    <label>State: </label>
                    <input type="text" value={this.state.contact.stateLoc} onChange={this.handleStateLocChanged.bind(this)}/>
                </div>
                <div className="zip-input input">
                    <label>Zip Code: </label>
                    <input type="text" value={this.state.contact.zip} onChange={this.handleZipChanged.bind(this)}/> 
                </div>
                <button className="addContact" onClick={this.handleClick.bind(this)}>Add Contact</button>
            </div>
        );
    }

}
