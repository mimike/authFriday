import "./About.css"

function About(){
    return (
        <>
            <div className="about-unko-container">
                <div className="about-text-container">
                    <div className="about-headline">
                        <h1>How does unko work?</h1>
                    </div>
                    <div className="about-explained">
                        <p>Start by <a className = "share-link" href="./best">discovering</a> cool bathrooms around the world.</p>
                        <p>Apply filters like entire bathrooms, self check-in, or by bathroom type to narrow your options.</p>

                        <p> Find the coolest bathrooms in the world from travelers and toilet connoiseures of the globe.</p>
                        <p><a href="./new" className = "share-link">Share</a> your bathroom experiences with other bathroom users.</p>
                    </div>
                </div>

                <div className="about-photos-container">
                    <img className="about-pic" src="/images/restrooms.jpeg" alt="a wooden sign pointing to restrooms"/>
                    <img className="about-pic" src="/images/unko6.jpg" alt="urinals made from beer kegs"/>
                    <img className="about-pic" src="/images/yellow.jpeg"/>


                </div>
            </div>
        </>


    )
}
export default About;
