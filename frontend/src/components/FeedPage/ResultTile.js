function ResultTile( {bathroom} ){

    return (
        <div>
            <div>
                {bathroom.title}
            </div>

            <div>
                {bathroom.address}
            </div>

            <div>
                {bathroom.description}
            </div>

            <div>
                {bathroom.costPerDay}
            </div>
        </div>
    )
}
export default ResultTile;
