import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import ContainerNoAuth from './Components/ContainerNoAuth';
import About from './Components/About';
import ContainerAuth from './Components/ContainerAuth';
import CreatePost from './Components/CreatePost';
import SinglePost from './Components/SinglePost';
import './Components/ContainerAuth.css';
import './Components/ContainerNoAuth.css';
import PostsList from './Components/PostsList';
import { Fragment, useEffect, useState } from 'react';
import Axios from 'axios';

function App() {
  const [ loggedIn, setLoggedIn ]  = useState(false);
  const [ Posts, setPosts ] = useState([]);

  useEffect(()=>{
    fetchPosts();
  },[]);
  const fetchPosts = async()=>{
    const { data } = await Axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log("la data es = ",data);
    setPosts(data);
  }
  return (
    <Router>
      <div>
        <NavBar loggedIn = { loggedIn } />
        {
          (loggedIn)
          ?
          LoggedInRoutes(Posts)
          :
          loggedOutRoutes()
        }

      </div>
    </Router>
  );
}

const loggedOutRoutes = ()=>{
  return(
    <div className="_ContainerNoAuth">
      <Switch>
        <Route path = "/About" component = { About } />
        <Route path = "/Login" component = { Login } />
        <Route path = "/" component = { Login } />
      </Switch>
    </div>
  )
}

const LoggedInRoutes = (Posts)=>{
  return(
    <Fragment>
    <div className="_ContainerAuth" >
      <div className={(window.location.pathname == "/about") ? "_ContainerAuth" : "leftContainer"} >
      <Switch>
        <Route path = "/About" component = { About } />
        <Route path = "/Posts" render = {()=><PostsList Posts = { Posts } /> } />
        <Route path = "/SinglePost" component = { SinglePost } />
        <Route path = "/" render = {()=><PostsList Posts = { Posts } /> } />
      </Switch>
      </div>
      {
        (window.location.pathname != "/about")
        ?
          <div className="rightContainer">
            <CreatePost />
          </div>
        : <div></div>
      }
    </div>
    </Fragment>
  )
}

export default App;