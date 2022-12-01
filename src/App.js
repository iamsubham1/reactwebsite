import './App.css';
import Navbar from './components/Navbar';
import Icons from './components/Icons';
import Skills from './components/Skills';
import Hp_about from './components/Hp_about';
import Contacts from './components/Contacts';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Mode from './components/Mode';


function App() {
  return (
    <>

      <Router>

        <div className="App">


          <Switch>
            <Route path="/skills">

              <Navbar />
              <Skills />
            </Route>

            <Route path="/contacts">

              <Navbar />
              <Contacts />
            </Route>
            <Route path="*">
              <Navbar />
              <div class='image'>
                <img src="my img1.jpg" alt="my image" />
              </div>
              <Hp_about />
              <Icons />
            </Route>
          </Switch>
        </div>
      </Router>
      <Mode />
    </>
  );
}
export default App;
