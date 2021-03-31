function ResultTile( {bathroom} ){

    return (
        <div>
            <div>
                Title: {bathroom.title}
            </div>

            <div>
                Location: {bathroom.address}
            </div>
            
            <div>
                City: {bathroom.city}
            </div>

            <div>
                State: {bathroom.state}
            </div>

            <div>
                Description: {bathroom.description}
            </div>

            <div>
                Cost: {bathroom.costPerDay}
            </div>
        </div>
    )
}

export default ResultTile;
