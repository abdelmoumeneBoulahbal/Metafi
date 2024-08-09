import './footer.css'


export default function Footer() {
    return(
        <footer>
            <div>
                <p>Trusted by beloved partner and customer</p>
            </div>
            <div className='pics'>

                <div>
                    <img src="https://i.postimg.cc/SsDhPyDY/adobe.png"></img>
                    <p className="logo-name" id='adobe'>Adobe</p>
                </div>
                <div>
                    <img src="https://i.postimg.cc/6pnNXVMX/evernote.png"></img>
                    <p className="logo-name" id="evernote">Evernote</p>
                </div>
                <div>
                    <img src="https://i.postimg.cc/dtZb2mPy/spotify.png"></img>
                    <p className="logo-name" id='spotify'>Spotify</p>
                </div>
                <div>
                    <img src="https://i.postimg.cc/y8qwvgsr/asana.png"></img>
                    <p className="logo-name" id='asana'>asana</p>
                </div>
            </div>
        </footer>
    );
}