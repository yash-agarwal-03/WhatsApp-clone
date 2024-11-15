// import LandingPage from './components/LoginLandingPage';
import Messenger from './components/Messenger';
import AccountContextProvider from './context/AccountContextProvider';


function App() {
  return (
    <AccountContextProvider>
      <Messenger/>

    </AccountContextProvider>
  );
}

export default App;
