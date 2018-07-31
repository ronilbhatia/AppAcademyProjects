import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

const TodoList = (({todos, receiveTodo, removeTodo}) => (
  <div>
    <ul>
      {todos.map( (todo) => <TodoListItem key={todo.id} todo={todo} removeTodo={removeTodo}/>)}
    </ul>
    <TodoForm receiveTodo={receiveTodo}/>
  </div>
));

export default TodoList;
