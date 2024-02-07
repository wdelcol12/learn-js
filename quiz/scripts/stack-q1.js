class PStack {
  #id;
  #persons
  constructor() {
    this.#id = 1;
    this.#persons = [];
  }

  showId() {
    return this.#id;
  }

  get persons(){
    return this.#persons;
  }

  set persons(newValue){
    this.#persons = newValue
  }
}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  push(p) {
    return this._persons.push(p)
  }

  pop() {
    return this._persons.pop().age
  }
}

let pstack = new PStackImpl();
pstack.persons = [{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}]
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.persons);
