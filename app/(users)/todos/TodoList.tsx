import Link from 'next/link'
import React from 'react'
import { Todo } from '../../../typing'

const fetchTodos = async () => {
  // thime out for random number between 1 and 5 seconds
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000
  await new Promise(resolve => setTimeout(resolve, timeout))

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
          <input type="checkbox" checked={todo.completed} readOnly />
          <span>{todo.title}</span>
          <Link href={`/todos/${todo.id}`}>Todo: {todo.id}</Link>
        </p>
      ))}
    </>
  )
}

export default Todolist
