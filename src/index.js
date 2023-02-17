import React from "react";
import ReactDOM from "react-dom/client";
import { CardList, Main, PlayerDetails } from "./components";
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Main/>}>
                <Route index element={<CardList/>}/>
                {/* <Route path="players">
                    <Route path=":id" element={<PlayerDetails/>}/>
                </Route> */}
            </Route>
        </>
    )
)

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router}/>);
