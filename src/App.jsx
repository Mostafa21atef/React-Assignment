import './App.css'
import { Home } from './Home/Home'
import {About} from './About/About'
import { Contact } from './Contact/Contact'
import Portfolio from './Portfolio/Portfolio'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import Notfound from './Notfound/Notfound'

let routs = createHashRouter([
  {path:"" , element:<Layout /> ,
  children:[
  {index:true, element:<Home />},
  {path:"about" , element:<About />},
  {path:"portfolio" , element:<Portfolio />},
  {path:"contact" , element:<Contact />},
  {path:"*" , element:<Notfound />},
  ]},
]);

function App() {
  return (
    <RouterProvider router={routs}></RouterProvider>
  )
}
export default App
