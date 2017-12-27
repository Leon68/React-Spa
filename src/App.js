import React ,{Component} from 'react'
import { HashRouter as Router,Route, Link} from 'react-router-dom'

import Author from './components/author'
import Category from './components/category'
import Book from './components/book'

import './styles/index.scss'

function App(){
    return (
        <Router>
            <div>
                <div>
                    <Link to = "/author">作者</Link>
                    <Link to = "/category">分类</Link>
                    <Link to = "/book">书籍</Link>
                </div>

                <div>
                    <Route to = "/author" component={Author} />
                    <Route to = "/category" component={Category} />
                    <Route to = "/book" component={Book} />
                </div>
            </div>
        </Router>
    )

}

export default App