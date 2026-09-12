const books = [
  {
    title: "The Fellowship of the Ring",
    authorName: "J. R. R. Tolkien",
    releaseYear: 1954
  },
  {
    title: "The Lion, the Witch, and the Wardrobe",
    authorName: "C. S. Lewis",
    releaseYear: 1950
  },
  {
    title: "Fahrenheit 451",
    authorName: "Ray Bradbury",
    releaseYear: 1953
  },
  {
    title: "Anna Karenina",
    authorName: "Leo Tolstoy",
    releaseYear: 1878
  },
];

function sortByYear (book1, book2) {
  let difference = book1.releaseYear - book2.releaseYear;
  if (difference === 0) {
    return difference;
  } else if (difference < 0) {
    return -1
  } else if (difference > 0) {
    return 1
  }
}

const filteredBooks = books.filter(book => book.releaseYear <= 1950)

console.log(sortByYear (books[0], books[1]))
console.log(filteredBooks);

filteredBooks.sort(sortByYear)

console.log("Sorted: ")
console.log(filteredBooks);