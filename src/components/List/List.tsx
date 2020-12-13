import React from 'react'
import { observer } from 'mobx-react'
import { todosStore } from '../../state/todos'
import './List.scss'

const List: React.FC = () => {
  const { state } = todosStore

  return (
    <div className="list">
      {state.todos.length ? (
        <>
          <ul className="list__body">
            {state.filteredTodos.map(({ id, completed, title }) => {
              return (
                <li className="list__item" key={id}>
                  <div>
                    <label>
                      <input
                        type="checkbox"
                        onChange={() => todosStore.toggleCompleted(id)}
                        checked={completed}
                      />
                      <span
                        style={{
                          background: completed
                            ? 'linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))'
                            : '',
                        }}>
                        {completed && (
                          <img src="images/icon-check.svg" alt="" />
                        )}
                      </span>
                    </label>
                    <span className={completed ? '_completed' : ''}>
                      {title}
                    </span>
                  </div>
                  <button onClick={() => todosStore.remove(id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18">
                      <path
                        fill="red"
                        fillRule="evenodd"
                        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                      />
                    </svg>
                  </button>
                </li>
              )
            })}
          </ul>
          <div className="list__actions actions-list">
            <div className="actions-list__length">
              {state.filteredTodos.length} items left
            </div>
            <div className="actions-list__buttons">
              <button
                className="actions-list__button"
                onClick={() => todosStore.filterByAll()}>
                All
              </button>
              <button
                className="actions-list__button"
                onClick={() => todosStore.filterByCompleted()}>
                Completed
              </button>
            </div>
            <button
              className="actions-list__button"
              onClick={() => todosStore.clearCompleted()}>
              Clear Completed
            </button>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  )
}

export default observer(List)
