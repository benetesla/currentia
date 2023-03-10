/* eslint-disable array-callback-return */
import React from 'react'
import './CardsComponent.css'
import Cards from '../Events/CardItem1'
const CardsComponent = () => {
    return (
        <>
            <ul class="timeline">
                <li>
                    {
                        Cards.map((cardItem) => {
                            return (
                                <div class="direction-r">
                                    <div class="flag-wrapper">
                                        <span class="flag">{cardItem.title}</span>
                                        <span class="time-wrapper"><span class="time">{cardItem.ocupation}</span></span>
                                    </div>
                                    <div class="desc">{cardItem.Age}</div>
                                    <div class="desc">{cardItem.Location}</div>
                                </div>
                            )
                        })
                    }
                </li>         

            </ul>
            <h2>Events</h2>


        </>

    )
}

export default CardsComponent