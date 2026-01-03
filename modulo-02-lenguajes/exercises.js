// 1. Array operations

// Head
const head = ([first]) => first;

// Tail
const tail = ([, ...rest]) => rest;

// Init
const init = (arr) => arr.slice(0, -1);

// Last
const last = (arr) => arr[arr.length - 1];

// 2. Concat
const concat = (a, b) => [...a, ...b];

// Optional: Multiple arrays
const concatMultiple = (...arrays) => arrays.flat();

// 3. Clone Merge

// Clone
function clone(source) {
  return { ...source };
}

// Merge
function merge(source, target) {
  return { ...target, ...source };
}

// 4. Read Books
function isBookRead(books, titleToSearch) {
  const book = books.find(book => book.title === titleToSearch);
  return book ? book.isRead : false;
}

// Optional: With TypeScript types (but in JS, just comments)
/*
interface Book {
  title: string;
  isRead: boolean;
}

function isBookRead(books: Book[], titleToSearch: string): boolean {
  const book = books.find(book => book.title === titleToSearch);
  return book ? book.isRead : false;
}
*/

// Example usage
const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

// 5. Slot Machine
class SlotMachine {
  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;
    const reel1 = Math.random() >= 0.5;
    const reel2 = Math.random() >= 0.5;
    const reel3 = Math.random() >= 0.5;
    if (reel1 && reel2 && reel3) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

// Example usage
const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"