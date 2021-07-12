import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Container from 'components/Container';
import { fetchContacts } from 'redux/contacts/contacts-operations';

class App extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.string,
  };
  componentDidMount() {
    this.props.onFetchContacts();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   const nextContacts = this.props.contacts;
  //   const prevContacts = prevProps.contacts;

  //   if (nextContacts !== prevContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  // }

  render() {
    return (
      <Container title="Phonebook">
        <ContactForm />
        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.items,
});

const mapDispatchToProps = dispatch => ({
  onFetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
