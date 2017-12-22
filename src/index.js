import React from 'react'
import ReactDom from 'react-dom'
import './styles/index.scss'


class App extends React.Component {
    render() {
        return (
            <div>Hello world.</div>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
)
