import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useCityStore from '../../store/search_city'
import "./Navigation.css"

function Navigation () {

    return (
        <div>
        <nav className='navigation'>
            <ul>
                <li className='listItem'><Link to="/about">About</Link></li>
                <li className='listItem'><Link to="/hotels">Hotels</Link></li>
                <li className='listItem'><Link to="/restaurants">Restaurants</Link></li>
                <li className='listItem'><Link to="/places-of-interest">Places of Interests</Link></li>
                {/* <li><Link to="/hospitals">Hospitals</Link></li> */}
            </ul>
        </nav>
    </div>
    )
}

export default Navigation

