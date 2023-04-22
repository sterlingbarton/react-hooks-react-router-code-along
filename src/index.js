import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  NavLink,
  Outlet,
  RouterProvider
} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import ProductsList from './components/products/ProductsList'
import Product from "./components/products/Product";


function App() {
  //naming variable specific to react-router-dom, so router-provider can call it
  const router = createBrowserRouter(
    createRoutesFromElements(
      //defining the root path then paths to the other components of the application
      // -contains nested routes 
      <Route path="/" element={<Root />}>
          <Route index element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/productlist' element={<ProductsList />}>
            {/* no longer need '/' in front of path when nested */}
            <Route path='products' element={<Product />}/>
          </Route>
      </Route>
    )
  )
  return <div>
    {/* calling router variable that contains all routes */}
    <RouterProvider router={router}/>
  </div>;
}

//the root stays on every single page
const Root = () => {
  return <>
    <div>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/productlist'>Products</NavLink>
    </div>
    <div>
      {/*  */}
      <Outlet/>
    </div>
  </>
}

ReactDOM.render(<App />, document.getElementById("root"));
