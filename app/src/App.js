/*
This is just a component
Then you have to import your components to index.js
*/
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <nav className='Nav' >
      <a className='nav-logo' href='#'>
      </a>
      <button 
      className='nav-toggler' 
      type='button' 
      data-toggle='collapse'
      data-target='#navNavDropdown'
      aria-controls='navNavDropdown'
      aria-expanded='false'
      aria-label='Toggle navigation' 
      >
      <span className='nav-toggler-icon'></span>
      </button>

    </nav>
  );
}

export default App;
