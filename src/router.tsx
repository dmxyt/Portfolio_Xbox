import {createBrowserRouter }from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import MyProjectsPage from './pages/myProjects/myProjects'
import Typescript_projects from './components/myProjectsPage/typescript_projects/Typescript_projects'
import Contacts from './components/contactsOffCanva/Contacts'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: 'homepage',
        element: <HomePage />,
    },
    {
        // path: 'contacts',
        // element: <Contacts />,
    },
    {
        path: 'myProjects',
        element: <MyProjectsPage/>,
        children: [
            {index: true, element: <MyProjectsPage/>},
            {path: 'typescript_projects', element: < Typescript_projects />}
        ]
    }
])

export {routes}