import React, { Component } from 'react';
import { Provider } from 'react-redux'  //Responsavel por atualizar os componentes da aplicação quando houver alteração no estado da aplicação.
import store from './store'
import TodoList from './TodoList'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoList />
          <Counter />
        </div>
      </Provider>

    )
  }
}

export default App