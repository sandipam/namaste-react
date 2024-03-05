import { useEffect } from "react";
import { useParams } from "react-router-dom";

    const RestaurantMenu = () => {
        // useEffect(() => {
        //     fetchMenu();
        // }, []);

        // const fetchMenu = () => {

        // }
        const {resId} = useParams();
        console.log("resId: ", resId);

        return (
            <div className="menu">
                <h1>Name of the Restaurant - ID {resId} </h1>
                <h2>Menu</h2>
                <ul>
                    <li>Biriyani</li>
                    <li>Burger</li>
                    <li>Diet Coke</li>
                </ul>
            </div>
        ) 
};

export default RestaurantMenu;