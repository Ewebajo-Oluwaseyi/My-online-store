import React, {useState, useEffect, Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Homepage from './component/pages/Homepage';
import Productpage from './component/pages/Productpage';
import axios from 'axios';
import './App.css';

const App = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
        const getData = async () =>{
            const {data} = await axios.get("/api/products");
            setProduct(data);
        }
        getData();
    }, [])
  return (
    <Router>
    <div className="grid-container">
      <Header/>
      <main className="main">
      <div className="content">
      <Switch>
      <Route exact path="/" render={props =>(
        <Fragment>
          <Homepage products={products} />
        </Fragment>
      )}/>
      <Route exact path="/product/:id" render={props =>(
        <Fragment>
          <Productpage products={products} props={props} />
        </Fragment>
      )}/>
      </Switch>
      </div>
      </main>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
