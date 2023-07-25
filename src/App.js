import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from './components/Create';
import BlogDetails from './components/BlogDetails';
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
            <Switch>
              <Route exact path="/react-blog-website-project">
                <Home />
              </Route>
              <Route exact path="/react-blog-website-project/create">
                <Create />
              </Route>
              <Route exact path ="/react-blog-website-project/blogs/:id">
                <BlogDetails />
              </Route>
            </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
