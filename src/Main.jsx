import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "./views/MainPage/MainPage";
import { Layout } from "./components/Layout/Layout";
import { Information } from "./views/Information/Information";
import { Players } from "./views/Information/Players/Players";
import { Rules } from "./views/Information/Rules/Rules";
import { Surface } from "./views/Information/Surface/Surface";
import { TrackMatch } from "./views/TrackMatch/TrackMatch";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <MainPage />
            </Layout>
        ),
    },
    {
        path: "/information",
        element: (
            <Layout>
                <Information />
            </Layout>
        ),
        children: [
            {
                path: "/information/players",
                element: <Players />,
            },
            {
                path: "/information/rules",
                element: <Rules />,
            },
            {
                path: "/information/surface",
                element: <Surface />,
            },
        ],
    },
    {
        path: "/track-match",
        element: (
            <Layout>
                <TrackMatch />
            </Layout>
        ),
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
