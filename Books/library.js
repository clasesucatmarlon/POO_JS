class Book {
  #id
  #title
  #author
  #price
  #stock
  constructor(id, title, author, price, stock) {
    this.#id = id; //Private
    this.#title = title; //Private
    this.#author = author; //Private
    this.#price = price; //Private
    this.#stock = stock; //Private
  }

  getInfo () {
    let info = `
      Id = ${this.#id}
      Title = ${this.#title}
      Author = ${this.#author}
      Price = ${this.#price}
    `;
    (this.#stock > 0) ? (info += '  Stock = ' + this.#stock) : (info += '  Stock = Not available');
    console.log(info);
  }

  // Getters (read) - Setter (write)
  get title () {
    return this.#title
  }
  set title (newTitle) {
    this.#title = newTitle;
  }
}


class Comic extends Book {
  #ilustrators
  #volumen
  constructor (id, title, author, price, stock, ilustrators, volumen) {
    super (id, title, author, price, stock)
    this.#ilustrators = ilustrators;
    this.#volumen = volumen;
  }

  getInfo() {
    let info = `
      Ilustrators = ${this.#ilustrators.toString()}
      Volumen = ${this.#volumen}
    `
    super.getInfo();
    console.log(info)
  }
}



// BOOKS
// *******************************************************************
const book1 = new Book(1, "title book 1", "author book 1", 1000, 0);
const book2 = new Book(2, "title book 2", "author book 2", 2000, 10);
book1.getInfo()
book2.getInfo()
console.log('Original title: ', book1.title);
book1.title = 'changed title';
console.log('New title: ', book1.title);

// COMICS
// *******************************************************************
const comic1 = new Comic(10, 'title comic 1', 'author comics 1', 10000, 0, ['ilustrator 1', 'ilustrator 2'], 10);
console.log(comic1)
comic1.getInfo();