class Stack{
    constructor(){
      this.stackArray = []
    }
  
    check(){
      return this.stackArray
    }
  
    push(queueItem){
          this.stackArray.push(queueItem)
    }
  
    pop(){
          this.stackArray.pop()
    }
  
  }
  
  const shape = new Stack()
  shape.push("Square")
  shape.push("Circle")
  shape.push("Rhombus")
  console.log(shape.check())
  shape.pop()
  console.log(shape.check())
  shape.pop()
  console.log(shape.check())
  shape.pop()
  console.log(shape.check())
  