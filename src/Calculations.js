import React from 'react';
import {Sum,Div,Multiply,Sub} from './operations';

function Calculations() {
    
  return (
    <div>
        <p>Component # 3</p>
        <p>Some Arithmetic Operation.</p>
        <p>Sum of 3 and 2 is {Sum(3,2)}</p>
        <p>Sub of 3 and 2 is {Sub(3,2)}</p>
        <p>Multiplication of 3 and 2 is {Multiply(3,2)}</p>
        <p>Division of 9 and 3 is {Div(9,3)}</p>
    </div>
  )
}

export default Calculations