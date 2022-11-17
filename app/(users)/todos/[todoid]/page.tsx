import { NOTFOUND } from 'dns'
import React from 'react'
import { Todo } from '../../../../typing'
import NotFound from './not-found'

export const dynamicParams = true

type PageProps = {
  params: {
    todoid: string
  }
}

const fetchTodo = async (todoid: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoid}`,
    { next: { revalidate: 60 } },
  )
  const todo = await res.json()
  return todo
}

async function TodoPage({ params: { todoid } }: PageProps) {
  const todo: Todo = await fetchTodo(todoid)

  if (!todo.id) {
    return <NotFound />
  }

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  )
}

export default TodoPage

// 빌드시에 해당 내용을 미리 펫칭하여 정적 파일(ssg)로 만들어놓는다(이번경우는 0~10까지의 todoid)
export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const todos: Todo[] = await res.json()
  const trimmedTodos = todos.splice(0, 10)
  return trimmedTodos.map(todo => ({ todoid: todo.id.toString() }))
}
