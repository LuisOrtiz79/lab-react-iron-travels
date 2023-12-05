import { useState } from "react";

import travelPlans from '../assets/travel-plans.json';
import TravelCard from "./TravelCard";

const TravelList = () => {
  const [locations, setLocations] = useState(travelPlans);
  const [favorites, setFavorites] = useState([]);

  const deleteLocation = (id) => {
    let newLocation = locations.filter((location) => location.id != id);
    setLocations(newLocation);
  }

  const addFavorite = (id) => {
    let newfavorite = locations.find((location) => location.id === id);
    let newLocations = [newfavorite, ...favorites];
    setFavorites(newLocations); 
  }

  return (
    <div className="travel-list">
        <div className="location-cards">

            {
                locations.map((location) => {
                    return (
                        <TravelCard location={location} key={location.id} deleteLocation={deleteLocation} addFavorite={addFavorite}/>
                    )
                })
            }
        </div>

        <div className="favorites">
            <h2>Favorites</h2>
            <>
                {
                    favorites.length ?
                    <>
                        {
                            favorites.map((favorite) => {
                                return (
                                    <div className="favorite-card" key={favorite.id}>
                                        <div className="background" style={{backgroundImage: `url(${favorite.image})`}}></div>
                                        <p>{favorite.destination} ({favorite.days} days)</p>
                                        <p>{favorite.totalCost}</p>
                                    </div>
                                )
                            })
                        }
                    </>
                    :
                    null
                }
            </>

        </div>

    </div>
  )
}

export default TravelList;
