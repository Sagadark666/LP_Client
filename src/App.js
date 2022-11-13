import logo from './logo.svg';
import './App.css';
import NavBar from './Nav';
import Home from './home';
import About from './about';
import Projects from './project';
import ContactUs from './contactus';


function App() {
let Component;
switch (window.location.pathname){
    case "/":
        Component = Home;
        break
    case "/about":
        Component = About;
        break
    case "/project":
        Component = Projects;
        break
     case "/contactus":
        Component = ContactUs;
        break
}
  return (
    <div className="App">
        <NavBar />
        <Component />
    </div>
  );
}

export default App;