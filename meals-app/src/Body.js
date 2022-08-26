import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Body.css'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Body() {

    const [items, setItems] = useState([])


    useEffect(() => {
        
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then(res => {

                console.log(res.data);
                setItems(res.data.meals)

            }).catch(err => {

                console.log(err)

            })

    }, [])

    const itemlist = items.map((obj) => {

        return <div className='col-md-4'>

            <p>{obj.strMeal}</p>
            <img src={obj.strMealThumb} alt='meal' className='img-fluid'/>
            <p>{obj.idMeal}</p>

        </div>

    })

    return (
        <div>
            
            <div className='row'>

                {itemlist}

            </div>

        </div>
    )
}

export default Body
