import React from 'react'
import './Hero.css'
import Eltrici from '../../IMG/Eletri.jfif'

const Hero = () => {

  return (
    <div className="hero">
      <article className="cards">
        <div className="temporary_text">
          <img src={Eltrici} alt="Eltrici" />
        </div>
        <div className="cards_content">
          <span className="card1_title">
            A História da Eletricidade
          </span>
          <span className="cards_subtitle">
            O começo da eletricidade
            </span>
          <p className="cards_description">
            A História da eletricidade tem
            seu início no século VI a.C., na Grécia Antiga,
            quando o filósofo Thales de Mileto, após descobrir
            uma resina vegetal fóssil petrificada chamada
            âmbar (elektron em grego), esfregou-a com
            pele e lã de animais e pôde então observar
            seu poder de atrair objetos leves como palhas,
             fragmentos de madeira e penas.
          </p>
        </div>
      </article>
      <button className="btn btn-primary">
        <a href="/fase1">Saiba mais</a>
      </button>

    </div>

  )
}

export default Hero