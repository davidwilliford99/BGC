/*
This is just your app component
Then you have to import your components to index.js
*/
import logo from './logo.svg';
import './App.css';

import AppRouter from './AppRouter';

function App() {
  return (
    <div class ="flex" className='App'>


    <ul id ="nav-list">
    <li class='mr-6'>
    <a href="http://localhost:3000/home">Home</a>
    </li>
    <li>
    <a href="http://localhost:3000/about">About</a>
    </li>
    <li>
    <a href="http://localhost:3000/contact">Contact</a>
    </li>
    <li>
      <a href="http://localhost:3000/pricing">Pricing</a>
    </li>
    </ul>
    <AppRouter/>
    </div>

  );
}

export default App;
