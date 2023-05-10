let myLibrary = ["Book 1", "Book 2", "Book 3", "Book 4"];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return title + author + ", " + pages + " pages"
  }
}

function addBookToLibrary() {

}

function showBooks() {
  let bookView = document.getElementById("showBooks");

  for (let i of myLibrary) {
    let newBook = document.createTextNode(i);
    bookView.appendChild(newBook);
  }
}

showBooks()

// document.body.onload = addElement;

// function addElement() {
//   // create a new div element
//   const newDiv = document.createElement("div");

//   // and give it some content
//   const newContent = document.createTextNode("Hi there and greetings!");

//   // add the text node to the newly created div
//   newDiv.appendChild(newContent);

//   // add the newly created element and its content into the DOM
//   const currentDiv = document.getElementById("div1");
//   document.body.insertBefore(newDiv, currentDiv);
// }
