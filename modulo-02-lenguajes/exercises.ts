// 1. Array operations

// Head
const head = <T,>([first]: T[]): T => first;

// Tail
const tail = <T,>([, ...rest]: T[]): T[] => rest;

// Init
const init = <T,>(arr: T[]): T[] => arr.slice(0, -1);

// Last
const last = <T,>(arr: T[]): T => arr[arr.length - 1];

// 2. Concat
const concat = <T,>(a: T[], b: T[]): T[] => [...a, ...b];

// Optional: Multiple arrays
const concatMultiple = <T,>(...arrays: T[][]): T[] => arrays.flat();

// 3. Clone Merge

// Clone
function clone<T>(source: T): T {
  return { ...source } as T;
}

// Merge
function merge<T>(source: T, target: T): T {
  return { ...target, ...source };
}

// 4. Read Books
interface Book {
  title: string;
  isRead: boolean;
}

function isBookRead(books: Book[], titleToSearch: string): boolean {
  const book = books.find((book) => book.title === titleToSearch);
  return book ? book.isRead : false;
}

// Example usage
const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

// 5. Slot Machine
class SlotMachine {
  private coins: number = 0;

  play(): void {
    this.coins++;
    const reel1 = Math.random() >= 0.5;
    const reel2 = Math.random() >= 0.5;
    const reel3 = Math.random() >= 0.5;
    if (reel1 && reel2 && reel3) {
      console.log(
        `Congratulations!!!. You won ${this.coins} coins!!`
      );
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
