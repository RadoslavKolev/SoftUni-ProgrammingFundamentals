const phonebook = require('../phonebook');
const Contact = require('../models/Contact');

module.exports = {
  index: (req, res) => {
    res.render('index', {
      contacts: phonebook.getPhonebook(),
    });
  },
  addPhonebookPost:(req, res) => {
    const name = req.body.name;
    const number = req.body.number;
    const contact = new Contact(name, number);
    phonebook.addContact(contact);
    res.redirect('/');
  }
}