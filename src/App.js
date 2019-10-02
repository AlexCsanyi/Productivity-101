import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TodosList from "./components/todos-list.component";
import EditTodo from "./components/edit-todo.component";
import CreateTodo from "./components/create-todo.component";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./imgs/pro101-logo.png";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="alexcsanyi.me" target="_blank">
            <img
              src={logo}
              width="50"
              height="50"
              alt="Productivity 101 app"
            ></img>
          </a>
          <Link to="/" className="navbar-brand">
            PRO 101
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  ToDos
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route path="/" exact component={TodosList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </div>
    </Router>
  );
}

export default App;
