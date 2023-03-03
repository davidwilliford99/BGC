/*
This is just your app component
Then you have to import your components to index.js
*/
import logo from './logo.svg';
import AppRouter from './AppRouter';
import NavbarComp from './components/NavbarComp'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <NavbarComp/>
      <AppRouter/>
    </div>

  );
}

export default App;
