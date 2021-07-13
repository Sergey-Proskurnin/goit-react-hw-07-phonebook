import { connect } from 'react-redux';

import { deleteContact } from 'redux/contacts/contacts-operations';
import ElementContactList from './ElementContactList';
import { getVisibleContacts } from 'redux/contacts/contacts-selectors';

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ElementContactList);
