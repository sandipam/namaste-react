import RestaurantCard from "./RestaurantCard";
import objRes from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
    // Local state variable: scope of this State is local i.e. within the Body

    let listOfRes = objRes;
    const [listOfRestraurants, setListOfRestraurants] = useState(objRes);
    const [fileredListOfRestraurants, setFilteredListOfRestraurants] = useState(objRes);
    const [searchText, setSearchText] = useState("");

    // Whenever a state value updated, React triggers a Reconciliation cycle (re-render the entire component)
    console.log('Body re-render')

    //if no depency array, then useEffet will be called on every render.
    // if there is a empty depency array = [] => useEffect is called only once, not be called on each re=render
    // if some data is there in dependency array = [data] => useEffet is called evrytime 'data' changes
    // useEffect(() => {
    //     fetchData()
    // }, []);

    //
    const fetchData = async () => {
        const result = await fetch('https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=12.96340&lng=77.58550');
        const json = await result.json();

        console.log('data : ', json);

        //Optional chaining
        //setListOfRestraurants(json?.data?.cards[2]?.cards);
    }


    return (listOfRestraurants.length === 0) ?  <Shimmer /> : (
        <div className="body">
            
            <div className="filter">
                <div className="search">
                    <input type="text" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value)
                    }}></input>
                    <button onClick={() => {
                        let filterListOfRes = listOfRestraurants.filter(res => res.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredListOfRestraurants(filterListOfRes);
                    }}>Search</button>
                </div>
                <button className="filter-btn" 
                onClick={() => {
                    let filterListOfRes = listOfRestraurants.filter(res => res.card.card.restaurant.info.avgRatingString > 4.5);
                    setFilteredListOfRestraurants(filterListOfRes);
                }}>
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
              {fileredListOfRestraurants.map(obj => 
                    <Link key={obj.card.card.info.id}  to={"/restaurants/" + obj.card.card.info.id}>
                        <RestaurantCard resData = {obj}></RestaurantCard>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Body;