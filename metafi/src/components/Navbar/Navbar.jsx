/* eslint-disable no-undef */
import './navbar.css';

export default function Navbar() {
    
    return(

        <nav>
            <div className='logo-div'>
                <img src="" alt=""></img>
                <h1>Metafi</h1>
            </div>
            <div className='list-div'>
                <ul>
                    <li>Features</li>
                    <li>Solutions</li>
                    <li>Customers</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                </ul>
            </div>
            <div className='btn-div'>
                <button className='login-btn'>Login</button>
                <button className='gs-btn'>Get Started</button>
            </div>
        </nav>
    
    );

}


