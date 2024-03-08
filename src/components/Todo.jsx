import React from 'react'

function Todo({ todo, removeTodo }) {
  return (
    <div className="todo">
        <div className="content">
            <p>{ todo.text }</p>
            <p className="category">
            ({ todo.category })
            </p>
        </div>
        <div>
            <button className='complete'>Feito</button>
            <button className='remove' onClick={() => removeTodo(todo.id)}>Deletar</button>
        </div>
    </div>
  )
}

export default Todo