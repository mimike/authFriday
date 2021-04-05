
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
                            <ul>a bunch of text about how awesome this is</ul>
                            <ul>a bunch of text about how quirky this application is</ul>
                            <ul>some cool info</ul>
                            <ul> more cool stuff </ul>
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
