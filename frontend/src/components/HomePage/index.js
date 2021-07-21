
import './HomePage.css';
function HomePage(){
    return (
        <>
            <div className="home-container">
                <div className="main-image-container">
                    <div className="main-image" style={{display:"flex", flex:"column"}}>
                        <img src="/images/unko5.jpeg" alt="some toilet"/>
                    </div>
                </div>


                <div className= "text-container">
                    <div className= "made-possible-text">
                        <h2>Made possible by Hosts</h2>
                    </div>
                </div>

                <div className="info-image-container">
                    <div className="info-box">
                        <div className="home-page-text">
                            <h1>Your bathroom is worth sharing</h1>
                            <br></br>
                            <ul>We've all been there</ul>
                            <ul>You're out and the sudden urge to go to the bathroom strikes</ul>
                            <ul>You race to the find a bathroom, hoping that the conditions of the facility are acceptable.</ul>
                            <ul>That's no fun at all!</ul>
                        </div>
                    </div>

                    <div className="info-image">
                        <img src= "/images/unko2.jpeg" alt="toilet"/>
                    </div>

                </div>

            </div>

        </>
    )
}

export default HomePage;
