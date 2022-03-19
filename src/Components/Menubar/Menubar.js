import React from 'react';
import './Menubar.css';
const Menubar = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2">Logo</div>
                    <div className="col-md-10 menu-container d-flex justify-content-end">
                        <li className='items md-2 p-2'>Home</li>
                        <li className='items md-2 p-2'>About</li>
                        <li className='items md-2 p-2'>Contact Us</li>
                        <li className='items md-2 p-2'>Cart <sup>{props.count}</sup></li>
                        <li className='items md-2 p-2'>Login</li>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menubar;