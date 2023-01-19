import Citysearched from "../CitySearched"
import useCityStore from "../../../store/search_city"
import { getallrestaurants } from "../../../utils/scrapped_data"
import { useState } from "react";
import { useEffect } from "react";

function Restaurant () {

    const city = useCityStore(state => state.city_name);
    const [fetchedRestaurants,setFetchedRestaurants] = useState(null);
    useEffect(()=>{
        (async()=>{
            const data = await getallrestaurants(city.city)
            console.log(data)

            setFetchedRestaurants(data)
        })();
    },[])
    // const fetchedRestaurants = getallrestaurants(city.city)
    // const addRestaurant = useCityStore(state => state.addRestaurant)
    // const restaurants = useCityStore(state => state.restaurants)
    // setTimeout (()=>{
        // fetchedRestaurants.map(restaurant => addRestaurant(restaurant))
    // }, 2000)
    if (fetchedRestaurants===null) {
        return <Citysearched>
            loading...
        </Citysearched>
    }
    // console.log ("list: " + fetchedRestaurants)
    console.log(fetchedRestaurants);
    return (
        <Citysearched>
        {/* <li className={classes.item}>
            <div className={classes.image}>
                <img src={url}/>
            </div>
            <div className={classes.content}>
                <p>hello</p>
                <p>hello</p>
            </div>
            <div className={classes.actions}>
                <button>Info</button>
                <button id={classes.buttonCart}>button</button>
            </div>
        </li> */}
        {/* {
            fetchedRestaurants.map(rest => {
                return (
                    <div>{rest.name}</div>
                )
            })
        } */}
        {JSON.stringify(fetchedRestaurants)}
        </Citysearched>
    )
}

export default Restaurant

