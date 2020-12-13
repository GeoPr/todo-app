import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { todosStore } from '../../state/todos'
import './Form.scss'

const Form: React.FC = () => {
  const [value, setValue] = useState('')
  
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (value.trim().length) {
      todosStore.create(value)
    }

    setValue('')
  } 

  return (
    <form action="#" className="form" onSubmit={submitHandler}>
      <input
        className="form__input"
        autoComplete="off"
        value={value}
				onChange={e => setValue(e.target.value)}
        placeholder="Create a new todo..."
      />
    </form>
  )
}

export default observer(Form)
