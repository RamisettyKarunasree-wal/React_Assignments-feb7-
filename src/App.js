import logo from './logo.svg';
import './App.css';
import Menu from './Menu'
import Registeration from './Registeration';
import Footer from './Footer';
import Hobbies from './Hobbies';
import Native from './Native';
import Counter from './Counter';
function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <div class="content">
        <Registeration></Registeration>
        <Hobbies></Hobbies>
        <Native></Native>
        <Counter></Counter>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
