export function addTodo(text) {
  return {
    type: 'ADD_TODO', //variavel unica entre todos os reducers 
    text: text  //ES6 => text
  }
}