import React from 'react'
import { Header } from './Header/Header'
import Form from './Form/Form'
import List from './List/List'
import './App.scss'

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <main className="page">
        <section className="page__sc sc">
          <div
            className="sc__bg"
            style={{
              background: 'url(images/bg.jpg) center center / cover no-repeat',
            }}
          />
          <div className="sc__container _container">
            <div className="sc__body">
              <Header />
              <Form />
              <List />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
