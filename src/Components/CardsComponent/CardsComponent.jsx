/* eslint-disable array-callback-return */
import React from 'react'
import './CardsComponent.css'
import Cards from '../Events/CardItem1'
import Cards2 from '../Events/CardItem2'
import Card3 from '../Events/CardItem3'
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
            <div class="Middle">
                <div class="Middle-Content">
                    <h1>A era da invenção</h1>
                    </div>
            </div>
            <ul class="timeline">
                <li>
                    {
                        Cards2.map((cardItem) => {
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

            <div class="Middle">
                <div class="Middle-Content">
                    <h1>Revelações e Revoluções</h1>
                    </div>
            </div>
            <ul class="timeline">
                <li>
                    {
                        Card3.map((cardItem) => {
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
                   

        </>

    )
}

export default CardsComponent