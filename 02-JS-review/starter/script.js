const data = [
  {
    id: 1,
    title: 'The Lord of the Rings',
    publicationDate: '1954-07-29',
    author: 'J. R. R. Tolkien',
    genres: [
      'fantasy',
      'high-fantasy',
      'adventure',
      'fiction',
      'novels',
      'literature'
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: 'El señor de los anillos',
      chinese: '魔戒',
      french: 'Le Seigneur des anneaux'
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452
      }
    }
  },
  {
    id: 2,
    title: 'The Cyberiad',
    publicationDate: '1965-01-01',
    author: 'Stanislaw Lem',
    genres: [
      'science fiction',
      'humor',
      'speculative fiction',
      'short stories',
      'fantasy'
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0
      }
    }
  },
  {
    id: 3,
    title: 'Dune',
    publicationDate: '1965-01-01',
    author: 'Frank Herbert',
    genres: ['science fiction', 'novel', 'adventure'],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: ''
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701
      }
    }
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: '1997-06-26',
    author: 'J. K. Rowling',
    genres: ['fantasy', 'adventure'],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: 'Harry Potter y la piedra filosofal',
      korean: '해리 포터와 마법사의 돌',
      bengali: 'হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন',
      portuguese: 'Harry Potter e a Pedra Filosofal'
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960
      }
    }
  },
  {
    id: 5,
    title: 'A Game of Thrones',
    publicationDate: '1996-08-01',
    author: 'George R. R. Martin',
    genres: ['fantasy', 'high-fantasy', 'novel', 'fantasy fiction'],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: '왕좌의 게임',
      polish: 'Gra o tron',
      portuguese: 'A Guerra dos Tronos',
      spanish: 'Juego de tronos'
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095
      }
    }
  }
]

function getBooks() {
  return data
}

function getBook(id) {
  return data.find(d => d.id === id)
}

// Destructuring

const book = getBook(1)
const { title, author, pages: bookPages, publicationDate } = book
console.log(title, author, bookPages, publicationDate)

// Rest Operator
const [genre1, ...otherGenres] = book.genres
console.log(genre1, otherGenres)

// Spread Operator (Add and Update Existing Properties)
const updatedBook = { ...book, moviePublicationDate: '2001-12-19', pages: 1222 }

// Arrow Functions
const getYear = str => str.split('-')[0]

// Template Literals
const msg = `The publication year is ${getYear(publicationDate)}.`
console.log(msg)

// Ternary Operator
console.log(`10 is an ${10 % 2 === 0 ? 'even' : 'odd'} number.`)

// Short Circuiting
console.log(true && 'Some string') // Some string
console.log(false && 'Some string') // false

console.log(true || 'Some string') // true
console.log(false || 'Some string') // Some string

// Falsy values includes 0 which can be a problem with ||
// Instead we can use ?? Nullish Coalescing Operator
console.log(0 || 'Some string') // Some string (Not what we want)
console.log(0 ?? 'Some string') // 0 (What we expect)

// Optional Chaining
const somebody = { name: 'Joe', age: 33 }
console.log(somebody?.email ?? 'No email')

// Array map() method
const books = getBooks()
const authorTitle = books.map(book => ({
  title: book.title,
  author: book.author
}))

// Array filter() method
const longBooks = books
  .filter(book => book.pages > 500)
  .map(book => book.reviews.goodreads.reviewsCount)
console.log(longBooks)

// Array reduce() method
const totalPages = books.reduce((total, book) => total + book.pages, 0)
console.log(totalPages)

// Array sort() method (mutates OG array unlike other Array methods)
// sort() mutates OG array unlike other Array methods
// Use slice() to make a copy of the Array first
const unsortedArr = [4, 1, 12, 5, 40]
const sortedArr = unsortedArr.slice().sort((a, b) => a - b)
console.log(sortedArr)

// Working with Immutable Arrays
