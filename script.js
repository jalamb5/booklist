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

  // Remove any existing data.
  if (bookView.children.length > 0) {
    while (bookView.firstChild) {
      bookView.removeChild(bookView.firstChild);
    }
  }

  // Add books to div.
  for (let book of myLibrary) {
    let newDiv = document.createElement("div");
    let newBook = document.createTextNode(book.info());
    newDiv.appendChild(newBook);
    newDiv.className = "p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4";
    bookView.appendChild(newDiv);
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
