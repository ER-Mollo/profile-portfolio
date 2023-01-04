// import logo from './logo.svg';
import '../App.scss';
import Projects from '../Projects/Project';
import Header from './header/header';
import About from './about/about';
import MainContact from '../contactSection/contact';

function Main() {
  return (
    <div className="app">
        <Header/>
        <About/>
        <Projects/>
        <MainContact/>
    </div>

  );
}

export default Main;
