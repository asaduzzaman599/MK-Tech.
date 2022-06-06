import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner';
import Available from './Components/Available/Available';
import AD from './Components/AD/AD';
import Footer from './Components/Footer';
import BusinessSummary from './BusinessSummary/BusinessSummary';

function App() {
  return (
    <div className="App bg-base-200">
      <Header></Header>
      <Banner></Banner>
      <Available></Available>
      <AD></AD>
      <BusinessSummary></BusinessSummary>

      <Footer></Footer>
    </div>
  );
}

export default App;
