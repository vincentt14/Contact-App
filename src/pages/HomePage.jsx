import React from "react";
import ContactList from "../components/ContactList";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import { getContacts, deleteContact } from "../utils/api";
import { LocaleConsumer } from "../contexts/LocaleContext";

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get("keyword");

  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      keyword: props.defaultKeyword || "",
    };

    this.onDeleteEventHandler = this.onDeleteEventHandler.bind(this);
    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  async componentDidMount() {
    const { data } = await getContacts();

    this.setState({ contacts: data });
  }

  async onDeleteEventHandler(id) {
    await deleteContact(id);

    // update contacts state dari data.js
    const { data } = await getContacts();
    this.setState({ contacts: data });
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });
    this.props.keywordChange(keyword);
  }

  render() {
    const contacts = this.state.contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(this.state.keyword.toLowerCase());
    });

    return (
      <LocaleConsumer>
        {({ locale }) => {
          return (
            <section>
              <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
              <h2>{locale === "id" ? "Daftar Kontak" : "Contact List"}</h2>
              <ContactList contacts={contacts} onDelete={this.onDeleteEventHandler} />
            </section>
          );
        }}
      </LocaleConsumer>
    );
  }
}

export default HomePageWrapper;
