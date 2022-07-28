// Class for the book submitted by user

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read; 
    }

    // Opens the popup for user input
    newBookPopup() {
        overlay.classList.add("active");
        newBookForm.classList.add("active");
        newBookTitle.focus();
    }

    // Closes the user input popup
    closeBookPopup() {
        overlay.classList.remove("active");
        newBookForm.classList.remove("active"); 
    }

    // Resets the fields to falsy values for new book creation
    resetBookFields() {
        newBookTitle.value = "";
        newBookAuthor.value = "";
        newBookPages.value = null;
        newBookReadStatus.checked = false;
    }

    // Appends newly created "Book" into the library grid
    appendNewBook() {
        this.createBookCard();
        this.resetBookFields();
    }

    // Creates the HTML elements and inputs the passed in data to be appended
    createBookCard() {
        if (this.title && this.author && this.pages){
            console.log(bookList);
            const newBookCard = document.createElement("div");
            newBookCard.classList.add("book");
            const newTitle = document.createElement("h3");
            newTitle.classList.add("book-title");
            newTitle.innerText = `${this.title}`;
            newBookCard.appendChild(newTitle);
            const newAuthor = document.createElement("address");
            newAuthor.classList.add("author");
            newAuthor.innerText = `by ${this.author}`;
            newBookCard.appendChild(newAuthor);
            const newPages = document.createElement("div");
            newPages.classList.add("num-pages");
            newPages.innerText = `${this.pages} pages`;
            newBookCard.appendChild(newPages);
            const newBookReadContainer = document.createElement("div");
            newBookReadContainer.classList.add("book-read");
            const newReadLabel = document.createElement("label");
            newReadLabel.htmlFor = "read";
            newReadLabel.innerText = "Read?"
            const newCheckbox = document.createElement("input");
            newCheckbox.type = "checkbox";
            newCheckbox.name = "read";
            newCheckbox.id = "read";
            if (this.read) newCheckbox.checked = "true";
            newBookReadContainer.appendChild(newReadLabel);
            newBookReadContainer.appendChild(newCheckbox);
            newBookCard.appendChild(newBookReadContainer);
            bookList.appendChild(newBookCard); 
        }
    }

}

// Selectors

const addBook = document.querySelector(".add-book");
const overlay = document.querySelector(".overlay");
const bookList = document.querySelector(".book-list");
const newBookForm = document.querySelector(".book-popup");
const newBookSubmit = document.querySelector(".new-book");

const newBookTitle = document.querySelector("#title");
const newBookAuthor = document.querySelector("#author");
const newBookPages = document.querySelector("#pages");
const newBookReadStatus = document.querySelector("#new-book-read");

// Class-Object Invocation

let newBook = new Book(newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookReadStatus.checked);

// Events 

addBook.addEventListener('click', newBook.newBookPopup);

overlay.addEventListener('click', newBook.closeBookPopup);

newBookSubmit.addEventListener('click', function() {
    newBook = new Book(newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookReadStatus.checked);
    newBook.appendNewBook(); 
    return newBook; // I think this is necessary to read the new "this." values
});






// OLD CODE FROM PREVIOUS PROJECT ASSIGNMENT


// // Constructors

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

// Book.prototype.createBookCard = function() {
//     console.log(bookList);
//     const newBookCard = document.createElement("div");
//     newBookCard.classList.add("book");
//     const newTitle = document.createElement("h3");
//     newTitle.classList.add("book-title");
//     newTitle.innerText = `${this.title}`;
//     newBookCard.appendChild(newTitle);
//     const newAuthor = document.createElement("address");
//     newAuthor.classList.add("author");
//     newAuthor.innerText = `by ${this.author}`;
//     newBookCard.appendChild(newAuthor);
//     const newPages = document.createElement("div");
//     newPages.classList.add("num-pages");
//     newPages.innerText = `${this.pages} pages`;
//     newBookCard.appendChild(newPages);
//     const newBookReadContainer = document.createElement("div");
//     newBookReadContainer.classList.add("book-read");
//     const newReadLabel = document.createElement("label");
//     newReadLabel.htmlFor = "read";
//     newReadLabel.innerText = "Read?"
//     const newCheckbox = document.createElement("input");
//     newCheckbox.type = "checkbox";
//     newCheckbox.name = "read";
//     newCheckbox.id = "read";
//     if (this.read) newCheckbox.checked = "true";
//     newBookReadContainer.appendChild(newReadLabel);
//     newBookReadContainer.appendChild(newCheckbox);
//     newBookCard.appendChild(newBookReadContainer);
//     bookList.appendChild(newBookCard);
// }

// // Selectors

// const addBook = document.querySelector(".add-book");
// const overlay = document.querySelector(".overlay");
// const bookList = document.querySelector(".book-list");
// const newBookForm = document.querySelector(".book-popup");
// const newBookSubmit = document.querySelector(".new-book");

// const newBookTitle = document.querySelector("#title");
// const newBookAuthor = document.querySelector("#author");
// const newBookPages = document.querySelector("#pages");
// const newBookReadStatus = document.querySelector("#new-book-read");

// // Events 

// addBook.addEventListener('click', newBookPopup);
// overlay.addEventListener('click', closeBookPopup)
// newBookSubmit.addEventListener('click', appendNewBook);

// // Functions

// function newBookPopup() {
//     overlay.classList.add("active");
//     newBookForm.classList.add("active");
//     newBookTitle.focus();
// }

// function closeBookPopup() {
//     overlay.classList.remove("active");
//     newBookForm.classList.remove("active"); 
// }

// function resetBookFields() {
//     newBookTitle.value = "";
//     newBookAuthor.value = "";
//     newBookPages.value = null;
//     newBookReadStatus.checked = false;
// }

// function appendNewBook() {
//     let newBook = new Book(newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookReadStatus.checked);
//     console.log(newBook);
//     newBook.createBookCard();
//     resetBookFields();
// }