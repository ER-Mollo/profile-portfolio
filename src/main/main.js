// import logo from './logo.svg';
import '../App.scss';
import Projects from '../Projects/Project';
import Header from './header/header';

function Main() {
  return (
    <div className="app">
      {/* <div id="app__works" className="app__container work"> */}
        <Header/>
        {/* <div className="app__wrapper app__flex"> */}
          <Projects  ></Projects>
        {/* </div> */}
      {/* </div> */}
    </div>

  );
}

export default Main;
