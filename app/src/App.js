/*
This is just your app component
Then you have to import your components to index.js
*/
// import logo from './logo.svg';
import { useState } from 'react';
import AppRouter from './AppRouter';
import NavbarComp from './components/NavbarComp'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';



function App() {

  return (
    <PayPalScriptProvider options={{ 'client-id': 'AcbkjzEDKj9D_Vq9vfSZQL1c2JPxfRqyDAp4vZPf9rShfPas7AuNRPNnL32jq0_981ssAHEMmVrnxMiY' }}>
      <div className='App'>
        <NavbarComp/>
        <AppRouter/>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
