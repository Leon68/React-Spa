import React,{ Component } from 'react'
import ReactDom from 'react-dom'
import './styles/index.scss'


class App extends Component {
  render(){
    return (
      <div>Hello world.</div>,
      <p>hello</p>
    )
  }
}

ReactDom.render(
  <App />,
    document.getElementById('root')
)
