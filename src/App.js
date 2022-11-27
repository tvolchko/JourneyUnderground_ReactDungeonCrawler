import Header from './Components/Header';
import './App.css';
import CSheet from './Components/CSheet';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from './reducers';
import RightSide from './Components/RightSide';


const store = createStore(reducer, applyMiddleware(thunk, logger))


function App() {
  return (
    <Provider store={store}>
    <div className="App" style={{maxHeight:'100vh'}}>
      <header className="App-header">
        <Header/>
      </header>
      <div style={{display:'flex', maxHeight:'100%'}}>
      <CSheet/>
      <RightSide/>
      </div>

    </div>
    </Provider>
  );
}

export default App;
