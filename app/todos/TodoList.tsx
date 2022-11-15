import Link from 'next/link'
import React from 'react'
import { Todo } from '../../typing'

const fetchTodos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const todos: Todo[] = await res.json()
  return todos
}

async function Todolist() {
  const todos = await fetchTodos()
  return (
    <>
      {todos.map(todo => (
        <p key={todo.id}>
          <input type="checkbox" checked={todo.completed} />
          <span>{todo.title}</span>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  )
}

export default Todolist
