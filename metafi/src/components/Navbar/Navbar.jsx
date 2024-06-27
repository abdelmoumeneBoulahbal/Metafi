/* eslint-disable no-undef */
import './navbar.css';

export default function Navbar() {
    
    return(

        <nav>
            <div className='logo-div'>
                <img src="https://i.ibb.co/f4ZxzFr/inspiration.png" alt="inspiration" border="0"></img>
                <h1>Metafi</h1>
            </div>
            <div className='list-div'>
                <ul className='nav-list'>
                <a href=''>
                        <li>
                            Features
                        </li>
                    </a>
                    <a href=''>
                        <li>
                            Solutions
                        </li>
                    </a>
                    <a href=''>
                        <li>
                            Customers
                        </li>
                    </a>
                    <a href=''>
                        <li>
                            Resources
                        </li>
                    </a>
                    <a href='#pricing'>
                        <li>
                            Pricing
                        </li>
                    </a>
                </ul>
            </div>
            <div className='btn-div'>
                <button className='login-btn'>Login</button>
                <button className='gs-btn'>Get Started</button>
            </div>
        </nav>
    
    );

}


