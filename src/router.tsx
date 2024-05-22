import {createBrowserRouter }from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import MyProjectsPage from './pages/myProjects/myProjects'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: 'myProjects',
        element: <MyProjectsPage/>
    }
])

export {routes}