import React, {Component} from 'react'
import {connect} from 'react-redux'
import  {Todo, fetchTodos, clearTodos} from '../actions'
import {StoreState} from '../reducers'

interface AppProps {
  todos: Todo[];
  fetchTodos: Function; // (Function is?) only for Action creaters
  clearTodos: Function;
}

interface AppState {
  fetching: boolean
}

class _App extends Component<AppProps, AppState> {
  // state = {fetching: false}  // --> パターン1
  constructor(props: AppProps){
    super(props)

    this.state = {fetching: false} // --> パターン2
  }

  componentDidUpdate(prevProps: AppProps) {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({fetching: false})
    }
  }
  
  onButtonClick = (): void => {
    this.props.clearTodos()
    this.props.fetchTodos()
    this.setState({fetching: true})
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id}>
          {todo.title}
        </div>
      )
    })
  }

  render() {  
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? "Loading..." : null}
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = ({todos}: StoreState): {todos: Todo[]} => {
  return {todos}
}


export const App = connect(mapStateToProps, {fetchTodos, clearTodos})(_App)