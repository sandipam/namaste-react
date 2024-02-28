//JS object
const styleCard = {
    backgroundColor: '#f0f0f0'
}

const RestaurantCard = (props) => {
    console.log(props)
    const {resData} = props;
    return (
        <div className="res-card" style={styleCard}>
            <img alt="res-logo" className="res-logo"
                src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/' + resData.card.card.restaurant.info.cloudinaryImageId} ></img>
            <h3>{resData.card.card.info.name}</h3>
            <h4>{resData.card.card.restaurant.info.cuisines.join(', ')}</h4>
            <h4>{resData.card.card.restaurant.info.avgRatingString} stars</h4>
            <h4>{resData.card.card.restaurant.info.costForTwo / 100}</h4>
            <h4>{resData.card.card.restaurant.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCard;