import './App.css';
import About from './components/About';
import Home from './components/Home/Home';
import Header from './components/UI/Header';

function App() {
  return (
    <>
      <Home>
        <Header />
      </Home>
      <About />
    </>
  );
}

export default App;
