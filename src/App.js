import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
function App() {
  return (
    <div className=" text-3xl font-semibold text-center">
      <Provider store={appStore}>      
        <Body></Body>
      </Provider>
    </div>
  );
}

export default App;
