import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Show from './Show'
import Header from '../components/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/show/:restaurant" component={Show} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
