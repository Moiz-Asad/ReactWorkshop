import React from 'react';

// Importing 3 components
import Componentinclinecss from './Componentinclinecss';
import ComponentFileStyling from './ComponentFileStyling';
import Calculations from './Calculations';

const App = ()=>{
  // Returning JSX
  return (
    // Sintactic-Sugar-Form JSX
    <>
      <Componentinclinecss />
      <ComponentFileStyling />
      <Calculations />
    </>
  );
}

export default App;