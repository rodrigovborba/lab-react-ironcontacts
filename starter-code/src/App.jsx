import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Property to get 5 contacts
      contacts: contacts.slice(0, 5)
    };
    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  addRandomContact() {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    const newContactList = [...this.state.contacts, randomContact];
    this.setState({
      contacts: newContactList
    });
  }

  sortByName() {
    const newArrContacts = [...this.state.contacts];
    newArrContacts.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    this.setState({
      contacts: newArrContacts
    });
  }

  sortByPopularity() {
    const newArrContacts = [...this.state.contacts];
    newArrContacts.sort(function(a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    });
    this.setState({
      contacts: newArrContacts
    });
  }

  deleteContact(contact) {
    // I need to splice the contact to the array contacts
    const newArrContacts = [...this.state.contacts];
    newArrContacts.splice(contact, 1);
    this.setState({
      contacts: newArrContacts
    });
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="d-flex justify-content-around buttons">
          <button className="btn btn-light" onClick={this.addRandomContact}>
            Add Random Contact
          </button>

          <button className="btn btn-light" onClick={this.sortByName}>
            Sort By Name
          </button>

          <button className="btn btn-light" onClick={this.sortByPopularity}>
            Sort By Popularity
          </button>
        </div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Popularity</th>
              <th scope="col">#</th>
            </tr>
          </thead>
          <tbody className="scale align-self-center">
            {this.state.contacts.map((contact, index) => (
              <tr key={index}>
                <td>
                  <img className="image" src={contact.pictureUrl} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>

                <td>
                  <button
                    className="btn btn-light"
                    onClick={() => this.deleteContact(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
