/*
This is just your app component
Then you have to import your components to index.js
*/
// import logo from './logo.svg';
import { useState } from 'react';
import AppRouter from './AppRouter';
import NavbarComp from './components/NavbarComp'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [signedIn, setSignedIn] = useState(false);

  return (
    <div className='App'>
      <NavbarComp/>
      <AppRouter/>
    </div>

  );
}

export default App;
