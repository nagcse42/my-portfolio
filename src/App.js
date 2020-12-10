import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/About";
import About from "./components/About";
import Post from "./components/Post";
import Project from "./components/Project";
import SinglePost from "./components/SinglePost";

// sanity path -> /Users/arjunparitala/Desktop/Computer/Practice/React/portfolio/portfolio

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact></Route>
        <Route component={About} path="/about"></Route>
        <Route component={Post} path="/post"></Route>
        <Route component={Project} path="/project"></Route>
        <Route component={SinglePost} path="/post/:slug"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
