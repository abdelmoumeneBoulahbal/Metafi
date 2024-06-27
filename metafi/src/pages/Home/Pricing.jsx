/* eslint-disable no-unused-vars */
import './pricing.css'
import React, {useState} from 'react';


export default function Pricing() {

    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    }

    return(

        <section className="pricing-section" id="pricing">
            <div className="text-div">
                <h3>Pricing</h3>
                <p className="p1">Simple, Flexible Pricing</p>
                <p className="p2">Pricing plans for business at avery stage of growth.</p>
            </div>
            <div className="button-div">
                <p className={`text ${!isChecked ? 'bold' : ''}`}>Monthly</p>
                <input type='checkbox' id='check' checked={isChecked} onChange={handleToggle}></input>
                <label htmlFor='check' className='button'></label>
                <p className={`text ${isChecked ? 'bold' : ''}`}>Yearly</p>
            </div>
            <p className="save-text">Save 30% OFF</p>

            <div className="pricing-card-div">


                <div className="card1">
                    <div className='pricing-card-left'>
                        <div className='pricing-card-title'>
                            <h3>Standard</h3>
                            <p>🔥30% off</p>
                        </div>
                        <div className='pricing-card-text'>
                            <p>Access a complete payments<br></br>
                                platform with simple.
                            </p>
                            <p className='price'>$15.99</p>
                            <p className='last-text'>Per user / billed yearly</p>
                        </div>
                    </div>

                    <div className='pricing-card-right'>
                        <ul>
                            <li> <img src='https://i.postimg.cc/pLTncTCz/tick.png'></img>All features from the <span className='left-side-p'>Personal package</span></li>
                            <li> <img src='https://i.postimg.cc/pLTncTCz/tick.png'></img>File upload limit of up to <span className='left-side-p'>100MB per file</span></li>
                            <li> <img src='https://i.postimg.cc/pLTncTCz/tick.png'></img>Unlimited revision & <span className='left-side-p'>request</span></li>
                            <li> <img src='https://i.postimg.cc/pLTncTCz/tick.png'></img>Unlimited users</li>
                            <li> <img src='https://i.postimg.cc/pLTncTCz/tick.png'></img>Pause & Cancel anytime</li>
                        </ul>
                    </div><br></br>
                    <div className='gs-button'>
                        <button>Get Started</button>
                    </div>
                </div>



                <div className="card2">
                <div className='pricing-card-left'>
                        <div className='pricing-card-title'>
                            <h3>Custom</h3>
                        </div>
                        <div className='pricing-card-text'>
                            <p>Access a complete payments<br></br>
                                platform with simple.
                            </p>
                            <p className='price'>Let&apos;s Talk</p>
                            <p className='last-text'>Contact us for details</p>
                        </div>
                    </div>

                    <div className='pricing-card-right'>
                        <ul>
                            <li> <img src='https://i.postimg.cc/KzNGy7vz/tick-black.png'></img>All features from the Team <span className='left-side-p'>package</span></li>
                            <li> <img src='https://i.postimg.cc/KzNGy7vz/tick-black.png'></img>Deeper integration and <span className='left-side-p'>API customization</span></li>
                            <li> <img src='https://i.postimg.cc/KzNGy7vz/tick-black.png'></img>Unlimited revision & <span className='left-side-p'>request</span></li>
                            <li> <img src='https://i.postimg.cc/KzNGy7vz/tick-black.png'></img>Unlimited users</li>
                            <li> <img src='https://i.postimg.cc/KzNGy7vz/tick-black.png'></img>Pause & Cancel anytime</li>
                        </ul>
                    </div><br></br>
                    <div className='gs-button'>
                        <button>Contact Sales</button>
                    </div>
                </div>
            </div>
        </section>

    );

}