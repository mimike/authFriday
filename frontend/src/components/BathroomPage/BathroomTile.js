function BathroomTile( {bathroom} ){

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
        </div>
    )
}
export default BathroomTile;
