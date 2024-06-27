import './footer.css'


export default function Footer() {
    return(
        <footer>
            <div>
                <p>Trusted by beloved partner and customer</p>
            </div>
            <div className='pics'>

                <div>
                    <img src="../../../assets/logos/adobe.png"></img>
                    <p className="logo-name" id='adobe'>Adobe</p>
                </div>
                <div>
                    <img src="../../../assets/logos/evernote.png"></img>
                    <p className="logo-name" id="evernote">Evernote</p>
                </div>
                <div>
                    <img src="../../../assets/logos/spotify.png"></img>
                    <p className="logo-name" id='spotify'>Spotify</p>
                </div>
                <div>
                    <img src="../../../assets/logos/asana.png"></img>
                    <p className="logo-name" id='asana'>asana</p>
                </div>
            </div>
        </footer>
    );
}