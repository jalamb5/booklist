class Book {
  constructor(title, author, pages, read = false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
  info() {
    return this.title + ", " + this.author + ", " + this.pages + " pages";
  }
}

let myLibrary = [];

function showBooks() {
  let bookView = document.getElementById("showBooks");

  for (let book of myLibrary) {
    let newBook = document.createTextNode(book.info());
    bookView.appendChild(newBook);
  }
}

// Add an event listener to the submit button
const submitButton = document.querySelector('.submitBtn');
submitButton.addEventListener('click', addBookToLibrary);

// Function to handle the form submission
function addBookToLibrary(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the form input values
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('read').checked;

  // Create a new Book object with the input values
  let newBook = new Book(title, author, pages, read);

  // Add the new book to the library
  myLibrary.push(newBook);

  // Call any other functions or perform additional actions as needed
  console.log(myLibrary);
  showBooks();

  // Clear the form inputs
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('pages').value = '';
  document.getElementById('read').checked = false;
}
