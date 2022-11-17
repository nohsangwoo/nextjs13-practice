import React, { Suspense } from 'react'
import Todolist from './(users)/todos/TodoList'

function Home() {
  return (
    <div className="">
      <Suspense fallback={<div className="text-red-500">Loading Todos...</div>}>
        <h1>Loading Todos..</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <Todolist />
        </div>
      </Suspense>
      <Suspense
        fallback={
          <div className="text-blue-500">Loading Shopping Trolley...</div>
        }
      >
        <h1>Loading Shopping Trolley</h1>
        <div className="flex space-x-2">
          {/* @ts-ignore */}
          <Todolist />
        </div>
      </Suspense>
    </div>
  )
}

export default Home
