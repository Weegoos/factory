console.log("---- Observer ----");

class Subject {
  constructor() {
    this.observers = []
  }

  subscribe(observer) {
    this.observers.push(observer)
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer)
  }

  fire(action) {
    this.observers.forEach(observer => {
      observer.update(action)
    })
  }
}

class Observer {
  constructor(state = 1) {
    this.state = amountParse
    this.initialState = state
  }

  update(action) {
    switch (action.type) {
      case 'INCREMENT':
        this.state= ++this.state
        break
      case 'DECREMENT':
        this.state = --this.state
        break
      case 'ADD':
        this.state += action.payload
        break
      default:
        this.state = this.initialState
    }
  }
}

const main = new Subject()

const obs1 = new Observer()
const obs2 = new Observer(amountParse)

main.subscribe(obs1)
main.subscribe(obs2)

main.fire({type: 'ADD', payload: change_parse})

// console.log(obs1.state)
console.log("The amount of money has been changed: $" + obs2.state)
