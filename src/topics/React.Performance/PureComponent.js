import React, { PureComponent, Component } from 'react';

export default class Todos extends Component {
  state = {
    todos: [
      { title: 'take out the trash', done: false, notes: ['boring'] },
      { title: 'walk dog', done: true, notes: ['exercise'] },
      { title: 'read about React', done: false, notes: ['fun!'] },
      // { title: 'read about React', done: false, notes: ['fun!'] },
    ]
  };


  componentDidMount() {
    setInterval(() => {
      this.setState(oldState => ({ todos: [...oldState.todos] }));
    }, 1000);
  }

  render() {
    console.log('Todos render called');
    return (<div>
      {this.state.todos.map((todo, i) => {
        return (<TodoItem
          key={i}
          title={todo.title}
          done={todo.done}
          notes={todo.notes}
        />);
      })}
    </div>);
  }
}

class TodoItem extends PureComponent {
  render() {
    console.log('TodoItem render called');
    return (<div>
      {/*<TodoItemFuck />*/}
      {this.props.done ? '✓': '▢'} {this.props.title}
      ({this.props.notes.join(', ')})
    </div>);
  }
}

// class TodoItemFuck extends PureComponent {
//   render() {
//     console.log('TodoItemFuck render called');
//     return <h1>Fuck</h1>;
//   }
// }

// Shallow!!!
// const value = 'cat';
//
// const item1 = value;
// const item2 = value;
//
// console.log(item1 === item2); // true

// const value = 'cat';
//
// const array1 = [value];
// const array2 = [value];
//
// console.log(array1 === array2); // false

// const value = 'cat';

// Deep!!!
// const array1 = [value];
// const array2 = [value];
//
// let equal = true;
// array1.forEach((item, index) => {
//   equal = equal && array1[index] === array2[index];
// });
//
// console.log(equal); // true