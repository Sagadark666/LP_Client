import logo from './resources/logo.svg';
import './styles/App.css';
import NavBar from './templates/Nav';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/project';
import ContactUs from './pages/contactus';


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