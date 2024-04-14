import './App.css';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    
    
    {/* </div><div> */}
    <Router>
      <Header/>
      <Routes>   

        <Route exact path='/' element={<ProductListing/>} />
        <Route exact path='/product/:productId'  element = {<ProductDetail/>}/>
        <Route>404 Not Found!</Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
