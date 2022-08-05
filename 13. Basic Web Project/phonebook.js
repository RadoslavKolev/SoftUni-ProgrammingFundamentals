/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/

const phoneBook = [];

function getPhoneBook() {
	return phoneBook;
}

function addContact(contact) {
	phoneBook.push(contact);
}

export default {
	getPhoneBook,
	addContact
};