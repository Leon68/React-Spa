import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Author from './components/author'
import Category from './components/category'
import Book from './components/book'

import './styles/index.scss'

import _header from './styles/menu.scss'
import _menu from './styles/header.scss'

function App() {
  return (
    <Router>
      <div>
        <div className={_header.container}>
          <Link to="/author">作者</Link>
          <Link to="/category">分类</Link>
          <Link to="/book">书籍</Link>
        </div>

        <div className={_menu.container}>
          <Route to="/author" component={Author} />
          <Route to="/category" component={Category} />
          <Route to="/book" component={Book} />
        </div>
      </div>
    </Router>
  )
}

export default App
