import { Component } from "react";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Country } from "./components/Country";
import { FetchAction } from "./components/FetchAction";
import { Continent } from "./components/Continent";
import { Detail } from "./components/Detail";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
        path: '/country',
        element: <Country />
  },

  {
        path: '/fetch-action',
        element: <FetchAction />
  },

    {
        path: '/continents',
        element: <Continent />
    },

    {
        path: '/detail',
        element: <Detail />
    },
];

export default AppRoutes;
