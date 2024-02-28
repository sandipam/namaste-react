// const header = React.createElement('h1', {id: 'header'}, 'Hello World from React !');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log('--header--', header);

// root.render(header);

import React from "react";
import ReactDOM from "react-dom/client";
import image from "./images/logo.jpg";

//JS object
const styleCard = {
    backgroundColor: '#f0f0f0'
}

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                        src={image} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = (props) => {
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

const objRes = {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
        "info": {
          "id": "44543201",
          "name": "Paneer Biryani",
          "category": "Veg Biriyani",
          "description": "E: 1800. 51 kcal (171. 48 kcal), c: 198. 62 grams (18. 92 grams), p: 61. 42 grams (5. 85 grams), f: 82. 00 grams (7. 81 grams) [Energy: 1800.51 kcal, Protein: 61.42g, Carbohydrates: 198.62g, Fat: 82g]",
          "imageId": "gehax5kizfwncsgkris2",
          "inStock": 1,
          "isVeg": 1,
          "price": 33000,
          "variants": {
            
          },
          "variantsV2": {
            
          },
          "maxAddons": -1,
          "maxFreeAddons": -1,
          "addons": [
            {
              "groupId": "139029855",
              "groupName": "Starters (Veg)",
              "choices": [
                {
                  "id": "114186513",
                  "name": "Paneer Kabab",
                  "price": 35000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "114186520",
                  "name": "Golden Baby Corn",
                  "price": 30000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "114186514",
                  "name": "Mushroom Kabab",
                  "price": 35000,
                  "isVeg": 1,
                  "isEnabled": 1
                }
              ],
              "maxAddons": 3,
              "maxFreeAddons": -1
            },
            {
              "groupId": "94854741",
              "groupName": "Extra",
              "choices": [
                {
                  "id": "92431220",
                  "name": "Extra Masala Pack",
                  "price": 10500,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431218",
                  "name": "Extra Aloo 4 Pcs",
                  "price": 4000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431221",
                  "name": "Paneer Pcs",
                  "price": 21000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431219",
                  "name": "Extra Gravy",
                  "price": 2000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431222",
                  "name": "Extra Raita",
                  "price": 1200,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                }
              ],
              "maxAddons": 5,
              "maxFreeAddons": -1
            },
            {
              "groupId": "94854744",
              "groupName": "Choice Of Beverage (600ml)",
              "choices": [
                {
                  "id": "92431225",
                  "name": "Thums Up 600ml",
                  "price": 3810,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431223",
                  "name": "Coke 600 Ml",
                  "price": 3810,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431224",
                  "name": "Sprite 600ml",
                  "price": 3810,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                }
              ],
              "maxAddons": 2,
              "maxFreeAddons": -1
            }
          ],
          "ribbon": {
            "text": "BESTSELLER",
            "textColor": "#ffffff",
            "topBackgroundColor": "#d53d4c",
            "bottomBackgroundColor": "#b02331"
          },
          "itemBadge": {
            
          },
          "badgesV2": {
            
          },
          "ratings": {
            "aggregatedRating": {
              "rating": "4.6",
              "ratingCount": "8467 ratings",
              "ratingCountV2": "8467"
            }
          }
        },
        "analytics": {
          "screenName": "explore",
          "context": "{\"tid\":\"1a7ffaef-eb89-9d45-def7-2a598de5cb36\",\"grid\":\"99181225-b769-47db-beff-c2d25e7599db\",\"queryUniqueId\":\"dd2f896d-ded5-9c1c-af95-ec8dede930a8\",\"query\":\"Biryani\"}",
          "objectValue": "44543201",
          "clickObjectName": "click-item"
        },
        "restaurant": {
          "info": {
            "id": "3241",
            "name": "Meghana Foods",
            "city": "1",
            "slugs": {
              "restaurant": "meghana-foods-central-bangalore",
              "city": "bangalore"
            },
            "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
            "address": "57/1, 1st Floor, Jayalaxmi Chambers, Next to Old Galaxy Theatre,Residency Road, Bangalore",
            "locality": "Residency Road",
            "areaName": "Residency Road",
            "costForTwo": "50000",
            "costForTwoMessage": "₹500 FOR TWO",
            "cuisines": [
              "Biryani",
              "Andhra",
              "South Indian",
              "Chinese",
              "Seafood"
            ],
            "avgRating": 4.6,
            "feeDetails": {
              
            },
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 33,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 35,
              "lastMileTravel": 4,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "30-35 MINS",
              "lastMileTravelString": "4.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {
                
              }
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {
              
            },
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {
                
              },
              "presentation": {
                
              }
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"1a7ffaef-eb89-9d45-def7-2a598de5cb36\",\"grid\":\"99181225-b769-47db-beff-c2d25e7599db\",\"queryUniqueId\":\"dd2f896d-ded5-9c1c-af95-ec8dede930a8\",\"query\":\"Biryani\"}",
            "objectValue": "3241~44543201",
            "clickObjectName": "click-dish-search-full-menu"
          }
        }
      }
    },
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
        "info": {
          "id": "44543201",
          "name": "Paneer Biryani",
          "category": "Veg Biriyani",
          "description": "E: 1800. 51 kcal (171. 48 kcal), c: 198. 62 grams (18. 92 grams), p: 61. 42 grams (5. 85 grams), f: 82. 00 grams (7. 81 grams) [Energy: 1800.51 kcal, Protein: 61.42g, Carbohydrates: 198.62g, Fat: 82g]",
          "imageId": "gehax5kizfwncsgkris2",
          "inStock": 1,
          "isVeg": 1,
          "price": 33000,
          "variants": {
            
          },
          "variantsV2": {
            
          },
          "maxAddons": -1,
          "maxFreeAddons": -1,
          "addons": [
            {
              "groupId": "139029855",
              "groupName": "Starters (Veg)",
              "choices": [
                {
                  "id": "114186513",
                  "name": "Paneer Kabab",
                  "price": 35000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "114186520",
                  "name": "Golden Baby Corn",
                  "price": 30000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "114186514",
                  "name": "Mushroom Kabab",
                  "price": 35000,
                  "isVeg": 1,
                  "isEnabled": 1
                }
              ],
              "maxAddons": 3,
              "maxFreeAddons": -1
            },
            {
              "groupId": "94854741",
              "groupName": "Extra",
              "choices": [
                {
                  "id": "92431220",
                  "name": "Extra Masala Pack",
                  "price": 10500,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431218",
                  "name": "Extra Aloo 4 Pcs",
                  "price": 4000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431221",
                  "name": "Paneer Pcs",
                  "price": 21000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431219",
                  "name": "Extra Gravy",
                  "price": 2000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431222",
                  "name": "Extra Raita",
                  "price": 1200,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                }
              ],
              "maxAddons": 5,
              "maxFreeAddons": -1
            },
            {
              "groupId": "94854744",
              "groupName": "Choice Of Beverage (600ml)",
              "choices": [
                {
                  "id": "92431225",
                  "name": "Thums Up 600ml",
                  "price": 3810,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431223",
                  "name": "Coke 600 Ml",
                  "price": 3810,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431224",
                  "name": "Sprite 600ml",
                  "price": 3810,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                }
              ],
              "maxAddons": 2,
              "maxFreeAddons": -1
            }
          ],
          "ribbon": {
            "text": "BESTSELLER",
            "textColor": "#ffffff",
            "topBackgroundColor": "#d53d4c",
            "bottomBackgroundColor": "#b02331"
          },
          "itemBadge": {
            
          },
          "badgesV2": {
            
          },
          "ratings": {
            "aggregatedRating": {
              "rating": "4.6",
              "ratingCount": "8467 ratings",
              "ratingCountV2": "8467"
            }
          }
        },
        "analytics": {
          "screenName": "explore",
          "context": "{\"tid\":\"1a7ffaef-eb89-9d45-def7-2a598de5cb36\",\"grid\":\"99181225-b769-47db-beff-c2d25e7599db\",\"queryUniqueId\":\"dd2f896d-ded5-9c1c-af95-ec8dede930a8\",\"query\":\"Biryani\"}",
          "objectValue": "44543201",
          "clickObjectName": "click-item"
        },
        "restaurant": {
          "info": {
            "id": "3241",
            "name": "Meghana Foods",
            "city": "1",
            "slugs": {
              "restaurant": "meghana-foods-central-bangalore",
              "city": "bangalore"
            },
            "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
            "address": "57/1, 1st Floor, Jayalaxmi Chambers, Next to Old Galaxy Theatre,Residency Road, Bangalore",
            "locality": "Residency Road",
            "areaName": "Residency Road",
            "costForTwo": "50000",
            "costForTwoMessage": "₹500 FOR TWO",
            "cuisines": [
              "Biryani",
              "Andhra",
              "South Indian",
              "Chinese",
              "Seafood"
            ],
            "avgRating": 4.6,
            "feeDetails": {
              
            },
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 33,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 35,
              "lastMileTravel": 4,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "30-35 MINS",
              "lastMileTravelString": "4.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {
                
              }
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {
              
            },
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {
                
              },
              "presentation": {
                
              }
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"1a7ffaef-eb89-9d45-def7-2a598de5cb36\",\"grid\":\"99181225-b769-47db-beff-c2d25e7599db\",\"queryUniqueId\":\"dd2f896d-ded5-9c1c-af95-ec8dede930a8\",\"query\":\"Biryani\"}",
            "objectValue": "3241~44543201",
            "clickObjectName": "click-dish-search-full-menu"
          }
        }
      }
    },
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
        "info": {
          "id": "44543201",
          "name": "Paneer Biryani",
          "category": "Veg Biriyani",
          "description": "E: 1800. 51 kcal (171. 48 kcal), c: 198. 62 grams (18. 92 grams), p: 61. 42 grams (5. 85 grams), f: 82. 00 grams (7. 81 grams) [Energy: 1800.51 kcal, Protein: 61.42g, Carbohydrates: 198.62g, Fat: 82g]",
          "imageId": "gehax5kizfwncsgkris2",
          "inStock": 1,
          "isVeg": 1,
          "price": 33000,
          "variants": {
            
          },
          "variantsV2": {
            
          },
          "maxAddons": -1,
          "maxFreeAddons": -1,
          "addons": [
            {
              "groupId": "139029855",
              "groupName": "Starters (Veg)",
              "choices": [
                {
                  "id": "114186513",
                  "name": "Paneer Kabab",
                  "price": 35000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "114186520",
                  "name": "Golden Baby Corn",
                  "price": 30000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "114186514",
                  "name": "Mushroom Kabab",
                  "price": 35000,
                  "isVeg": 1,
                  "isEnabled": 1
                }
              ],
              "maxAddons": 3,
              "maxFreeAddons": -1
            },
            {
              "groupId": "94854741",
              "groupName": "Extra",
              "choices": [
                {
                  "id": "92431220",
                  "name": "Extra Masala Pack",
                  "price": 10500,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431218",
                  "name": "Extra Aloo 4 Pcs",
                  "price": 4000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431221",
                  "name": "Paneer Pcs",
                  "price": 21000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431219",
                  "name": "Extra Gravy",
                  "price": 2000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431222",
                  "name": "Extra Raita",
                  "price": 1200,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                }
              ],
              "maxAddons": 5,
              "maxFreeAddons": -1
            },
            {
              "groupId": "94854744",
              "groupName": "Choice Of Beverage (600ml)",
              "choices": [
                {
                  "id": "92431225",
                  "name": "Thums Up 600ml",
                  "price": 3810,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431223",
                  "name": "Coke 600 Ml",
                  "price": 3810,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431224",
                  "name": "Sprite 600ml",
                  "price": 3810,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                }
              ],
              "maxAddons": 2,
              "maxFreeAddons": -1
            }
          ],
          "ribbon": {
            "text": "BESTSELLER",
            "textColor": "#ffffff",
            "topBackgroundColor": "#d53d4c",
            "bottomBackgroundColor": "#b02331"
          },
          "itemBadge": {
            
          },
          "badgesV2": {
            
          },
          "ratings": {
            "aggregatedRating": {
              "rating": "4.6",
              "ratingCount": "8467 ratings",
              "ratingCountV2": "8467"
            }
          }
        },
        "analytics": {
          "screenName": "explore",
          "context": "{\"tid\":\"1a7ffaef-eb89-9d45-def7-2a598de5cb36\",\"grid\":\"99181225-b769-47db-beff-c2d25e7599db\",\"queryUniqueId\":\"dd2f896d-ded5-9c1c-af95-ec8dede930a8\",\"query\":\"Biryani\"}",
          "objectValue": "44543201",
          "clickObjectName": "click-item"
        },
        "restaurant": {
          "info": {
            "id": "3241",
            "name": "Meghana Foods",
            "city": "1",
            "slugs": {
              "restaurant": "meghana-foods-central-bangalore",
              "city": "bangalore"
            },
            "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
            "address": "57/1, 1st Floor, Jayalaxmi Chambers, Next to Old Galaxy Theatre,Residency Road, Bangalore",
            "locality": "Residency Road",
            "areaName": "Residency Road",
            "costForTwo": "50000",
            "costForTwoMessage": "₹500 FOR TWO",
            "cuisines": [
              "Biryani",
              "Andhra",
              "South Indian",
              "Chinese",
              "Seafood"
            ],
            "avgRating": 4.6,
            "feeDetails": {
              
            },
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 33,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 35,
              "lastMileTravel": 4,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "30-35 MINS",
              "lastMileTravelString": "4.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {
                
              }
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {
              
            },
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {
                
              },
              "presentation": {
                
              }
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"1a7ffaef-eb89-9d45-def7-2a598de5cb36\",\"grid\":\"99181225-b769-47db-beff-c2d25e7599db\",\"queryUniqueId\":\"dd2f896d-ded5-9c1c-af95-ec8dede930a8\",\"query\":\"Biryani\"}",
            "objectValue": "3241~44543201",
            "clickObjectName": "click-dish-search-full-menu"
          }
        }
      }
    },
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
        "info": {
          "id": "44543201",
          "name": "Paneer Biryani",
          "category": "Veg Biriyani",
          "description": "E: 1800. 51 kcal (171. 48 kcal), c: 198. 62 grams (18. 92 grams), p: 61. 42 grams (5. 85 grams), f: 82. 00 grams (7. 81 grams) [Energy: 1800.51 kcal, Protein: 61.42g, Carbohydrates: 198.62g, Fat: 82g]",
          "imageId": "gehax5kizfwncsgkris2",
          "inStock": 1,
          "isVeg": 1,
          "price": 33000,
          "variants": {
            
          },
          "variantsV2": {
            
          },
          "maxAddons": -1,
          "maxFreeAddons": -1,
          "addons": [
            {
              "groupId": "139029855",
              "groupName": "Starters (Veg)",
              "choices": [
                {
                  "id": "114186513",
                  "name": "Paneer Kabab",
                  "price": 35000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "114186520",
                  "name": "Golden Baby Corn",
                  "price": 30000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "114186514",
                  "name": "Mushroom Kabab",
                  "price": 35000,
                  "isVeg": 1,
                  "isEnabled": 1
                }
              ],
              "maxAddons": 3,
              "maxFreeAddons": -1
            },
            {
              "groupId": "94854741",
              "groupName": "Extra",
              "choices": [
                {
                  "id": "92431220",
                  "name": "Extra Masala Pack",
                  "price": 10500,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431218",
                  "name": "Extra Aloo 4 Pcs",
                  "price": 4000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431221",
                  "name": "Paneer Pcs",
                  "price": 21000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431219",
                  "name": "Extra Gravy",
                  "price": 2000,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431222",
                  "name": "Extra Raita",
                  "price": 1200,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                }
              ],
              "maxAddons": 5,
              "maxFreeAddons": -1
            },
            {
              "groupId": "94854744",
              "groupName": "Choice Of Beverage (600ml)",
              "choices": [
                {
                  "id": "92431225",
                  "name": "Thums Up 600ml",
                  "price": 3810,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431223",
                  "name": "Coke 600 Ml",
                  "price": 3810,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                },
                {
                  "id": "92431224",
                  "name": "Sprite 600ml",
                  "price": 3810,
                  "inStock": 1,
                  "isVeg": 1,
                  "isEnabled": 1
                }
              ],
              "maxAddons": 2,
              "maxFreeAddons": -1
            }
          ],
          "ribbon": {
            "text": "BESTSELLER",
            "textColor": "#ffffff",
            "topBackgroundColor": "#d53d4c",
            "bottomBackgroundColor": "#b02331"
          },
          "itemBadge": {
            
          },
          "badgesV2": {
            
          },
          "ratings": {
            "aggregatedRating": {
              "rating": "4.6",
              "ratingCount": "8467 ratings",
              "ratingCountV2": "8467"
            }
          }
        },
        "analytics": {
          "screenName": "explore",
          "context": "{\"tid\":\"1a7ffaef-eb89-9d45-def7-2a598de5cb36\",\"grid\":\"99181225-b769-47db-beff-c2d25e7599db\",\"queryUniqueId\":\"dd2f896d-ded5-9c1c-af95-ec8dede930a8\",\"query\":\"Biryani\"}",
          "objectValue": "44543201",
          "clickObjectName": "click-item"
        },
        "restaurant": {
          "info": {
            "id": "3241",
            "name": "Meghana Foods",
            "city": "1",
            "slugs": {
              "restaurant": "meghana-foods-central-bangalore",
              "city": "bangalore"
            },
            "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
            "address": "57/1, 1st Floor, Jayalaxmi Chambers, Next to Old Galaxy Theatre,Residency Road, Bangalore",
            "locality": "Residency Road",
            "areaName": "Residency Road",
            "costForTwo": "50000",
            "costForTwoMessage": "₹500 FOR TWO",
            "cuisines": [
              "Biryani",
              "Andhra",
              "South Indian",
              "Chinese",
              "Seafood"
            ],
            "avgRating": 4.6,
            "feeDetails": {
              
            },
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 33,
              "minDeliveryTime": 30,
              "maxDeliveryTime": 35,
              "lastMileTravel": 4,
              "serviceability": "SERVICEABLE",
              "rainMode": "RAIN_MODE_NONE",
              "slaString": "30-35 MINS",
              "lastMileTravelString": "4.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "opened": true,
              "restaurantClosedMeta": {
                
              }
            },
            "aggregatedDiscountInfo": {
              "visible": true
            },
            "badges": {
              
            },
            "aggregatedDiscountInfoV2": {
              "visible": true
            },
            "ratingSlab": "RATING_SLAB_5",
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "cartOrderabilityNudgeBanner": {
              "parameters": {
                
              },
              "presentation": {
                
              }
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            "screenName": "explore",
            "context": "{\"tid\":\"1a7ffaef-eb89-9d45-def7-2a598de5cb36\",\"grid\":\"99181225-b769-47db-beff-c2d25e7599db\",\"queryUniqueId\":\"dd2f896d-ded5-9c1c-af95-ec8dede930a8\",\"query\":\"Biryani\"}",
            "objectValue": "3241~44543201",
            "clickObjectName": "click-dish-search-full-menu"
          }
        }
      }
    }

  }

//lkq ind Pvt 

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resData = {objRes}></RestaurantCard>
            </div>
            
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);