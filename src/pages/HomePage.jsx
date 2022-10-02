import React from "react";
import ContactList from "../components/ContactList";
import { deleteContact, getContacts } from "../utils/data";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: getContacts(),
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
  }

  onDeleteEventHandler(id) {
    deleteContact(id);

    // update contacts state dari data.js
    this.setState(() => {
      return {
        contacts: getContacts(),
      };
    });
  }

  render() {
    return (
      <section>
        <h2>Daftar Kontak</h2>
        <ContactList contacts={this.state.contacts} onDelete={this.onDeleteEventHandler} />
      </section>
    );
  }
}

export default HomePage;
