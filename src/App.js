import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  // const user = null;
  const [ {user}, dispatch] = useStateValue();

  return (
    // BEM naming convention
    <div className='App'>

      { !user ? ( 
        <Login /> 
      ) : (
        <>
        <Header />
        <div className='App__body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
        </>
      )}
        
    </div>
  );
}

export default App;
