class Person {
  #namePerson
  #agePerson
  #weightPerson
  constructor (namePerson, agePerson, weightPerson) {
    this.#namePerson = namePerson;
    this.#agePerson = agePerson;
    this.#weightPerson = weightPerson;
  }
  getInfo () {
    let info = `
      My name is ${this.#namePerson}
      I have ${this.#agePerson} years old
      I weight ${this.#weightPerson} kilos
    `;
    console.log(info)
  }
}

class Employed extends Person {
  #salaryEmpoyed
  #keyAccessEmployed
  constructor (namePerson, agePerson, weightPerson, salaryEmpoyed, keyAccessEmployed) {
    super (namePerson, agePerson, weightPerson);
    this.#salaryEmpoyed = salaryEmpoyed;
    this.#keyAccessEmployed = keyAccessEmployed
  }

  getInfo () {
    let info = `
      My salary is ${this.#salaryEmpoyed} 
    `
    super.getInfo();
    console.log(info);

  }
  
}

const person1 = new Person('Marlon', 48, 68.9)
console.log(person1)
person1.getInfo();

const employed1 = new Employed('Aurelio', 50, 68.9, 10000)
employed1.getInfo()