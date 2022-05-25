import React from 'react'

function Componentinclinecss() {
    // Object of style objects
    const Style = {
        Container: {
            height: '100vh',
            width: '100%',
            backgroundColor: '#293462',
            color: 'white',
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        Text:{
            fontSize: '60px'
        }
    }

    // Return JSX
    return (
        <div style={Style.Container}>
            <p style={Style.Text}> Component # 1</p>
            <p> I am using In-Line CSS for styling.</p>
        </div>
    )
}

export default Componentinclinecss;