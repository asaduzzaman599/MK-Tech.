import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Information from './Components/Information/Information';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <div className='min-vh-100'>
        <Header></Header>
        <Banner></Banner>
      </div>
      <Information></Information>
      <hr />
      <Footer></Footer>
    </div>
  );
}

export default App;
