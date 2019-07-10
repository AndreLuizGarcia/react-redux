export default function todos(state = [], action) { //primeiro parametro é o estado naquele momento da aplicação, 
                                                    //nesse caso ele sempre vai iniciar com um array vazio. 
                                                    //action recebe o todo que está la na pasta actions
  switch(action.type) {
    case 'ADD_TODO':
      //ADICIONAR NOVO TODO
      return [ ...state, { id: Math.random(), text: action.text }]  // '...' copia todas as informações que tem dentro do estado e passa para o array
    case 'REMOVE_TODO':
      //REMOVE TODO
      break;
    default:
      return state;
  }
  
}