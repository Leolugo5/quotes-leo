import './App.css';
import { useState } from 'react';
import { quotes } from './quotes.json';
import Selector from './selector';

function App() {

  // FUNCTIONS
  
  <Selector />;

  const [count, SetCount] = useState(Selector);


  return (
    <div className="App">

      {/* TITLE */}
      <div className="leo">
        <h1> Quotes Generator</h1>
      </div>


      {/* MAIN QUOTE BOX */}
      <div className="QuoteBox">
        
        {/* QUOTE & AUTHOR */}
        <div className='quote'>
        <p> " {quotes[count].quote} " </p>
        <p className='aut'> - {quotes[count].author} </p>
        </div>
        
        {/* BUTTON AND SHARE (TWITTER) */}
        <div className='controls'>
        <button className="share" onClick={ URL="https://twitter.com/?lang=es" }> Share </button>
        <button onClick={() => SetCount(Selector) } >New Quote</button>
        </div>
        

        
      </div>
    </div>
  );
}

export default App;
