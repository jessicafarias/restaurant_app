import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home'
import Show from './Show'
import Header from '../components/Header';

import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';


import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';

const store = createStore(rootReducer, applyMiddleware(thunk));


const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
        <Provider store={store}>
          <Route exact path="/" component={Home} />
          <Route path="/show/:restaurant" component={Show} />
          </Provider>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
