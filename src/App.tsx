import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <div className="grid grid-cols-4">
        <nav className="flex flex-col justify-start items-center h-screen col-span-1 bg-red-600">
          <ul>
            <li className="p-6 text-center border-b-2 hover:bg-red-100">
              <Link to="/pokemon">Pokemon</Link>
            </li>
            <li className="p-6 text-center border-b-2 hover:bg-red-100">
              <Link to="/moves">Moves</Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col justify-start items-center h-screen col-span-3 bg-gray-200">
          <Routes />
        </div>
      </div>
    </Router>
  );
}

export default App;
