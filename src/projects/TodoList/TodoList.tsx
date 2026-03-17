import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'

interface Todo {
  id: number
  text: string
  completed: boolean
}

const STORAGE_KEY = 'todo-list-data'

const TodoItem = styled.li<{ $completed: boolean }>`
  background: white;
  padding: 16px 20px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : 'none')};
  color: ${({ $completed }) => ($completed ? '#b5b5b5' : '#333')};
  transition: background 0.2s;

  &:hover {
    background: #f5f5f5;
  }
`

const loadTodos = (): Todo[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>(loadTodos)
  const [input, setInput] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  const addTodo = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (!input.trim()) return
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), text: input.trim(), completed: false }
      ])
      setInput('')
    },
    [input]
  )

  const toggleTodo = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }, [])

  const deleteTodo = useCallback((id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <div className='min-h-screen flex items-start justify-center bg-[#f5f5f5] pt-20'>
      <div className='w-[400px]'>
        <h1 className='text-center text-3xl font-bold mb-6 text-[#4b0082]'>
          todos
        </h1>
        <form onSubmit={addTodo}>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Enter your todo'
            className='w-full px-5 py-3 border-none outline-none text-base shadow-md rounded-t-lg'
          />
        </form>
        <ul className='list-none p-0 m-0 shadow-md rounded-b-lg overflow-hidden'>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              $completed={todo.completed}
              onClick={() => toggleTodo(todo.id)}>
              <span>{todo.text}</span>
              <button
                type='button'
                className='bg-[#e74c3c] text-white border-none px-2 py-1 rounded text-xs cursor-pointer hover:bg-[#c0392b] transition-colors'
                onClick={(e) => {
                  e.stopPropagation()
                  deleteTodo(todo.id)
                }}>
                ✕
              </button>
            </TodoItem>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TodoList
