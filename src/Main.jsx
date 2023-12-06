import "./styles/globals.css";
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {MainPage} from "./views/MainPage/MainPage"
import { Layout } from "./components/Layout/Layout";
import { Informations } from "./components/Informations/Informations";
import { Players } from "./views/Players/Players";
import { Rules } from "./views/Rules/Rules";
import { Surface } from "./views/Surface/Surface";
// import { TrackMatch } from './views/TrackMatch.jsx';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <MainPage />, 
      },
      {
        path: "/informations",
        element: <Informations />,
        children: [
          {
            path: "/informations/players",
            element: <Players />, 
        },
        {
          path: "/informations/rules",
          element: <Rules />, 
        },
        {
          path: "/informations/surface",
          element: <Surface />, 
        },
        
        ] 
    },
      ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
