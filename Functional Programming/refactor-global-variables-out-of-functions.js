// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add (passedArr, bookName) {
  let lbl = [...passedArr];
  lbl.push(bookName);
  return lbl;
  
  // Change code above this line
}

// Change code below this line
function remove (passedArr,bookName) {
  let lbl = [...passedArr];  //lbl = local book list
  var book_index = lbl.indexOf(bookName);
  if (book_index >= 0) {

    lbl.splice(book_index, 1);
    return lbl;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
console.log(newBookList);
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);
