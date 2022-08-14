import './App.scss'
import { NavLink, BrowserRouter } from 'react-router-dom'
import { Routing } from 'pages/routes'
import { useEffect } from 'react'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <NavLink to='asd'>asd</NavLink>
                <NavLink to='qwe/1233'>qwe</NavLink>
                <Routing />
            </BrowserRouter>
        </>
    )
}

export default App
