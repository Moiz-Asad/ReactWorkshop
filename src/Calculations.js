import React from 'react';
import {Sum,Div,Multiply,Sub} from './operations';

function Calculations() {
    
    const Style = {
        Container: {
            height: '100vh',
            width: '100%',
            backgroundColor: '#EC9B3B',
            color: 'white',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        Text:{
            fontSize: '60px'
        },
        BoxHead:{
            width: '400px',
            fontSize: '23px',
            backgroundColor: '#F24C4C',
            textAlign: 'center',
            padding: '0.3rem 0',
        },
        Box:{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '400px',
            height: '140px',
            backgroundColor: 'white',
            color: '#EC9B3B',
            fontSize: '23px',
        }
    }

    return (
        <div style={Style.Container}>
            <p style={Style.Text}>Component # 3</p>
            <p style={Style.BoxHead}>Some Arithmetic Operation.</p>
            <div style={Style.Box}>
                <p>Sum of 3 and 2 is {Sum(3,2)}</p>
                <p>Sub of 3 and 2 is {Sub(3,2)}</p>
                <p>Multiplication of 3 and 2 is {Multiply(3,2)}</p>
                <p>Division of 9 and 3 is {Div(9,3)}</p>
            </div>
        </div>
    )
}

export default Calculations