import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
        <div className='widgets'>
            <iframe 
                src='https://www.instagram.com/p/CAetwl3Bgzm/embed'
                width='340'
                height='100%'
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling='no'
                frameBorder='0'
                allowTransparency='true'
                allow='encrypting-media'
            ></iframe>
        </div>
    )
}

export default Widgets
