class Book {
  constructor(title, author, pages, read = false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
  }
  info() {
    return `${this.title}, ${this.author}, ${this.pages} pages`;
  }
}

class LibraryManager {
  constructor() {
    this.myLibrary = [];
    this.bookView = document.getElementById("showBooks");
    this.titleInput = document.getElementById('title');
    this.authorInput = document.getElementById('author');
    this.pagesInput = document.getElementById('pages');
    this.readInput = document.getElementById('read');
    this.submitButton = document.querySelector('.submitBtn');

    this.submitButton.addEventListener('click', this.addBookToLibrary.bind(this));
  }

  showBooks() {
    // Remove any existing data.
    if (this.bookView.children.length > 0) {
      while (this.bookView.firstChild) {
        this.bookView.removeChild(this.bookView.firstChild);
      }
    }

    // Add books to div.
    for (const book of this.myLibrary) {
      const newDiv = document.createElement("div");
      newDiv.textContent = book.info();
      newDiv.className = "p-4 md:p-6 max-w-md mx-auto bg-white rounded-lg shadow-md flex flex-col space-y-2 mb-4";
      this.bookView.appendChild(newDiv);
    }
  }

  // Function to handle the form submission
  addBookToLibrary() {
    // Get the form input values
    const title = this.titleInput.value;
    const author = this.authorInput.value;
    const pages = this.pagesInput.value;
    const read = this.readInput.checked;

    // Add the new book to the library
    if (this.validations(title, author, pages)) {
      // Create a new Book object with the input values
      const newBook = new Book(title, author, pages, read);

      // Add the book to the library.
      this.myLibrary.push(newBook);

      // Update display.
      this.showBooks();

      // Clear the form inputs
      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
      document.getElementById('pages').value = '';
      document.getElementById('read').checked = false;
    }
  }

  validations(title, author, pages) {
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');

    if (!title || !author || !pages || isNaN(pages)) {
      if (!title) {
        titleInput.setCustomValidity("Please enter a title.");
      } else {
        titleInput.setCustomValidity("");
      }

      if (!author) {
        authorInput.setCustomValidity("Please enter an author.");
      } else {
        authorInput.setCustomValidity("");
      }

      if (!pages || isNaN(pages)) {
        pagesInput.setCustomValidity("Please enter a valid number of pages.");
      } else {
        pagesInput.setCustomValidity("");
      }

      return false;
    }

    return true;
  }

}

// Create and run LibraryManager.
const libraryManager = new LibraryManager();
libraryManager.showBooks();
