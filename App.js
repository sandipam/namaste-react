// const header = React.createElement('h1', {id: 'header'}, 'Hello World from React !');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log('--header--', header);

// root.render(header);

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import {Header} from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import RestaurantMenu from "./component/RestaurantMenu";
//import ToDoList from "./component/ToDoList";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            {/* <ToDoList /> */}
        </div>
    );
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    children: [
      {
        path: '/',
        element: <Body />
      }, {
        path: '/about',
        element: <About />
      }, {
        path: '/contact',
        element: <Contact />
      }, {
        path: '/Restaurants/:resId',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);