// import logo from './logo.svg';
import '../App.scss';
import Projects from '../Projects/Project';
import Header from './header/header';
import About from './about/about';

function Main() {
  return (
    <div className="app">
        <Header/>
        <About/>
        <Projects/>
    </div>

  );
}

export default Main;
