import React from "react";
import Navigation from "../../components/city-page/Navigation";
import SearchBar  from "../../components/city-page/SearchBar";
import Layout from "../../components/city-page/Layout";
import Footer from "../../components/landing-page/Footer";
import Weather from "../../components/city-page/Weather";
import useCityStore from "../../store/search_city";
import { useEffect, useState } from "react";
import { getCityImages } from "../../utils/scrapped_data";
import "./citySearched.css"
import BookTickets from "../../components/city-page/BookTickets";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function CitySearched (props) {

    const param = useParams()
    const cityName = param.city
    const newCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);

    const setIcon = useCityStore(state => state.setIcon)
    const addTemp = useCityStore(state => state.addTemp)
    const addLatitude = useCityStore(state => state.addLatitude)
    const addLongitude = useCityStore(state => state.addLongitude)
    const setDescription = useCityStore(state => state.setDescription)

    const [cityImage, setCityImage] = useState(null)
    const [backdrop, setBackdrop] = useState(false)
    
    useEffect (() => {
        (async () => {
            const data = await getCityImages(cityName)
            setCityImage(data.imageLinks)
        })()
    }, [cityName])
        
    // useEffect (()=> {
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4bc833dea642dd07a0351cee82fb0cf8`
    
    //       axios.get(url).then(response => {
    //         addTemp({temp : response.data.main.temp})
    //         addLatitude({latitude : response.data.coord.lat})
    //         addLongitude({longitude : response.data.coord.lon})
    //         setDescription(response.data.weather[0].main)
    //         setIcon(response.data.weather[0].icon)
    //       })
    //   }, [cityName])


    if (cityImage == null) {
        return (
            <>  
            <Layout>
                <div className=" flex flex-col justify-between">
                <SearchBar setBackdrop={setBackdrop} />
                    <div className=" bg-white h-full relative box-content pb-12">
                        <div className="w-full h-96 overflow-hidden">
                            <div className=" bg-black h-full w-full"></div>
                        </div>
                        <div className="h-96 w-full absolute bg-black opacity-50 z-10 top-0 flex justify-center items-center">
                            <p className=" text-opacity-100 text-white font-sofia text-8xl">{newCityName}</p>
                        </div>
                        <div className="flex justify-between mx-3 my-3">
    
                            <div className=" box w-9/12 mx-auto p-5 box-border rounded-2xl bg-cyangray overflow-x-scroll">
                                <Navigation tabIndex={props.tabIndex} />
                                {props.children}
                            </div>
                            <div className=" w-72">
                                <Weather />
                            </div>
    
                        </div>
                    </div>
                <Footer />
                </div>
            </Layout>
            </>           
        )
    }

    return(
        <>  
        <Layout>
            <div className=" flex flex-col justify-between">
            <SearchBar setBackdrop={setBackdrop} />
                <div className=" bg-white h-full relative box-content pb-12">
                    <div className="w-full h-96 overflow-hidden">
                        <img className="h-full w-full object-cover" src={cityImage[0]} />
                    </div>
                    <div className="h-96 w-full absolute bg-black opacity-50 z-10 top-0 flex justify-center items-center">
                        <p className=" text-opacity-100 text-white font-sofia text-8xl">{newCityName}</p>
                    </div>
                    <div className="flex justify-between mx-3 my-3">

                        <div className=" box w-9/12 mx-auto p-5 box-border rounded-2xl bg-cyangray overflow-x-scroll">
                            <Navigation />
                            {props.children}
                        </div>
                        <div className=" w-72">
                            <Weather />
                            <BookTickets />
                        </div>

                    </div>
                </div>
            <Footer />
            </div>
        </Layout>
        </>
    )
}

